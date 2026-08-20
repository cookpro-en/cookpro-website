import { Link } from "react-router";

const Nav = () => {
  return (
    <nav>
        <ul>
            <Link to="/products">Products</Link>
            <Link to="/new">New Arrivals</Link>
        </ul>
    </nav>
  )
}

export default Nav