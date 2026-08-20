import * as Papa from "papaparse";
import type { Product } from "../types/Product.ts";

const mapRowToProduct = (row: Record<string, string>): Product | null => {
  if (!row["sku"]) {
    return null;
  }

  const isIncomplete = Object.entries(row).some(
    ([key, value]) => key !== "sku" && (!value || value.trim() === "")
  );

  if (isIncomplete) {
    console.warn(`Skipping incomplete row (SKU: ${row["sku"]})`);
    return null;
  }

  const bullets = row["bullets"]
    .split("\n")
    .map((bullet) => bullet.trim())
    .filter((bullet) => bullet.length > 0);

    const imageUrls = row["imageUrl"]
      .split(';')
      .map(imageUrl => imageUrl.trim())
      .filter(imageUrl => imageUrl.length > 0);

  return {
    sku: row["sku"],
    name: row["name"],
    description: row["description"],
    bullets: bullets,
    brand: row["brand"],
    imageUrl: {
      main: imageUrls[0] ?? "",
      alts: imageUrls.slice(1),
    },
  };
};

export const getProductData = async (url: string) => {
  const response = await fetch(url);
  const csvText = await response.text();

  const { data } = Papa.parse<Record<string, string>>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return data.map((productRow) => mapRowToProduct(productRow));
};

export default getProductData;
