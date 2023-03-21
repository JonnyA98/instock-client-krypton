import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_1x.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="InStock Logo" className="header__logo" />
      <div className="header__links">
        <NavLink to="warehouses" className="header__link">
          Warehouses
        </NavLink>
        <NavLink to="inventory" className="header__link">
          Inventory
        </NavLink>
      </div>
    </header>
  );
};

export default Header;