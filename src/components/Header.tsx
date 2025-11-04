import { Link, NavLink } from "react-router-dom";
import pageList from "../constants/pageList";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="logo">
          <Link to={"/"}>
            <img src="../../public/logo-1.svg" alt="logo-1" />
          </Link>
        </div>
        <nav className="navBar">
          <ul className="navList">
            {pageList
              .filter((page) => page.for_header)
              .map((page) => (
                <li className="navItem" key={page.id}>
                  <NavLink to={page.path}>{page.title}</NavLink>
                </li>
              ))}
          </ul>
        </nav>
        <div className="icons">
          <a href="/cart">
            <FaShoppingCart />
          </a>
          <a href="/wishlist">
            <FaHeart />
          </a>
          <a href="/user">
            <FaUser />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
