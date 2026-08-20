import * as Papa from "papaparse";
import type { Product } from "../types/Product.ts";

let cachedProducts: Promise<Product[]> | null = null;

const mapRowToProduct = (row: Record<string, string>): Product | null => {
  // Returns null if row has no sku
  if (!row["sku"]) {
    return null;
  }

  // Checks and retuns null for incomplete rows
  const isIncomplete = Object.entries(row).some(
    ([key, value]) => key !== "sku" && (!value || value.trim() === ""),
  );

  if (isIncomplete) {
    console.warn(`Skipping incomplete row (SKU: ${row["sku"]})`);
    return null;
  }

  // Split the bullets array by '\n' character separation
  const bullets = row["bullets"]
    .split("\n")
    .map((bullet) => bullet.trim())
    .filter((bullet) => bullet.length > 0);

  // Splits the imageUrl array by ';' character separation
  const imageUrls = row["imageUrl"]
    .split(";")
    .map((imageUrl) => imageUrl.trim())
    .filter((imageUrl) => imageUrl.length > 0);

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

const fetchAndParseData = async(url: string) => {
  const response = await fetch(url);
  const csvText = await response.text();

  const { data } = Papa.parse<Record<string, string>>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return data
    .map((productRow) => mapRowToProduct(productRow))
    .filter((product): product is Product => product !== null);
}

export const getProductData = async (url: string) => {

  if (cachedProducts !== null) {
    return cachedProducts;
  }

  cachedProducts = fetchAndParseData(url);
  return cachedProducts;
};

export default getProductData;
