import { Link } from "react-router-dom";
import "./SearchWarehouses.scss";

const SearchWarehouses = () => {
  return (
    <section className="warehouses__content">
      <div className="warehouses__search">
        <h1 className="warehouses__title">Warehouses</h1>
        <input
          type="text"
          name="search"
          className="warehouses__text warehouses__search-icon"
          placeholder="Search"
        />
        <Link to="add-warehouse" className="warehouses__btn">
          + Add New Warehouse
        </Link>
      </div>
    </section>
  );
};

export default SearchWarehouses;
