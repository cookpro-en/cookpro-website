import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav.tsx";
import getProductData from "../api/productsApi.ts";
import type { Product } from "../types/Product.ts";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlVfCapbSNNHtrPoRwZznfQa_LV8hTie-iTqSxs3dqHkbXyNYuffzmAOOppeRBKuU2DAK7NkPV6Cd-/pub?gid=0&single=true&output=csv";

const MainLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProductData(CSV_URL);
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <>
      <Nav />
      <Outlet context={{ products }} />
    </>
  );
};

export default MainLayout;
