import { Outlet } from "react-router";
import Nav from "../components/Nav.tsx";

const MainLayout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default MainLayout