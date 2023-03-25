import { Link, useLocation } from "react-router-dom";
import "./SearchWarehouses.scss";

const SearchWarehouses = ({ mainTitle, descriptionBtn }) => {
  const location = useLocation();

  return (
    <section className="search-warehouses">
      <h1 className="search-warehouses__title">{mainTitle}</h1>
      <div className="search-warehouses__search">
        <input
          type="text"
          name="search"
          className="search-warehouses__text search-warehouses__search-icon"
          placeholder="Search"
        />

        <Link
          to={
            location.pathname === "/warehouses" ? "add-warehouse" : "add-stock"
          }
          className="search-warehouses__btn"
        >
          + {descriptionBtn}
        </Link>
      </div>
    </section>
  );
};

export default SearchWarehouses;
