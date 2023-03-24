import { Link } from "react-router-dom";
import "./SearchWarehouses.scss";

const SearchWarehouses = ({ mainTitle, descriptionBtn }) => {
  return (
    <section className="warehouses__content">
      <h1 className="warehouses__title">{mainTitle}</h1>
      <div className="warehouses__search">
        <input
          type="text"
          name="search"
          className="warehouses__text warehouses__search-icon"
          placeholder="Search"
        />
        <Link to="add-warehouse" className="warehouses__btn">
          + {descriptionBtn}
        </Link>
      </div>
    </section>
  );
};

export default SearchWarehouses;
