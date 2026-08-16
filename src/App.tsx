import { useState } from "react";
import "./App.css";
import getProductsData from "./api/productsApi.ts";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlVfCapbSNNHtrPoRwZznfQa_LV8hTie-iTqSxs3dqHkbXyNYuffzmAOOppeRBKuU2DAK7NkPV6Cd-/pub?gid=0&single=true&output=csv";

function App() {
  getProductsData(CSV_URL);
  return <>Hello World</>;
}

export default App;
