import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_1x.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="InStock Logo" className="header__logo" />
    </header>
  );
};

export default Header;
