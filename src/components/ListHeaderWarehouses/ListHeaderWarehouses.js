import "./ListHeaderWarehouses.scss";
import sort from "../../assets/Icons/sort-24px.svg";

const ListHeader = () => {
  return (
    <div className="list-header">
      <div className="list-header__main-info-wrapper">
        <div className="list-header__half-wrapper">
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Warehouse</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Address</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
        </div>

        <div className="list-header__half-wrapper">
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Contact Name</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
          <div className="list-header__category-wrapper">
            <h4 className="list-header__category">Contact Information</h4>
            <img src={sort} alt="sort icon" className="list-header__sort" />
          </div>
        </div>
      </div>
      <h4 className="list-header__category list-header__category--actions">
        Actions
      </h4>
    </div>
  );
};

export default ListHeader;
