import sort from "../../assets/Icons/sort-24px.svg";
import "../InventoryList/InventoryList.scss";

const InventoryHeader = () => {
  return (
    <div className="inventory-list__category-header-wrapper">
      <div className="inventory-list__container">
        <div className="inventory-list__container-left">
          <div className="inventory-list__category-box">
            <h4 className="inventory-list__category-header">INVENTORY ITEM</h4>
            <img src={sort} alt="sort" />
          </div>
          <div className="inventory-list__category-box">
            <h4 className="inventory-list__category-header">CATEGORY</h4>
            <img src={sort} alt="sort" />
          </div>
        </div>
        <div className="inventory-list__container-right">
          <div className="inventory-list__category-box warehouse-inventory-list__category-box--status">
            <h4 className="inventory-list__category-header ">STATUS</h4>
            <img src={sort} alt="sort" />
          </div>
          <div className="inventory-list__category-box">
            <h4 className="inventory-list__category-header">QTY</h4>
            <img src={sort} alt="sort" />
          </div>
          <div className="inventory-list__category-box">
            <h4 className="inventory-list__category-header">WAREHOUSE</h4>
            <img src={sort} alt="sort" />
          </div>
        </div>
        <div className="winventory-list__category-box warehouse-inventory-list__category-box--actions">
          <h4 className="inventory-list__category-header">ACTIONS</h4>
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
