import getProductsData from "./api/productsApi.ts";
import { RouterProvider } from "react-router";
import router from "./router.tsx";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlVfCapbSNNHtrPoRwZznfQa_LV8hTie-iTqSxs3dqHkbXyNYuffzmAOOppeRBKuU2DAK7NkPV6Cd-/pub?gid=0&single=true&output=csv";

const products = await getProductsData(CSV_URL);

console.log(products);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
