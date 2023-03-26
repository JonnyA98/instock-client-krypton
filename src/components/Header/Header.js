import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img src={logo} alt="InStock Logo" className="header__logo" />
        </Link>
        <div className="header__links">
          <NavLink to="warehouses" className="header__link">
            Warehouses
          </NavLink>
          <NavLink to="inventory" className="header__link">
            Inventory
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
