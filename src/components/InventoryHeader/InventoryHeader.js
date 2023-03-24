import sort from "../../assets/Icons/sort-24px.svg";
import "./InventoryHeader.scss";

const InventoryHeader = () => {
  return (
    <div className="warehouse-inventory-list">
      <div className="warehouse-inventory-list__category-header-wrapper">
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">
            INVENTORY ITEM
          </h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">
            CATEGORT
          </h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box warehouse-inventory-list__category-box--status">
          <h4 className="warehouse-inventory-list__category-header ">STATUS</h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">QTY</h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">
            WAREHOUSE
          </h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box warehouse-inventory-list__category-box--actions">
          <h4 className="warehouse-inventory-list__category-header">ACTIONS</h4>
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
