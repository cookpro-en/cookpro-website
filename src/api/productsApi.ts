import * as Papa from "papaparse";
import type { Product } from "../types/Product.ts";

const mapRowToProduct = (row: Record<string, string>): Product => {
  return {
    sku: row["sku"],
    name: row["name"],
    description: row["description"],
    category: row["category"],
    imageUrl: row["imageUrl"],
  };
};

export const getProductData = async (url: string) => {
  const response = await fetch(url);
  const csvText = await response.text();

  const { data } = Papa.parse<Record<string, string>>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return data.map(productRow => mapRowToProduct(productRow));
};

export default getProductData;
