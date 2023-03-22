import { Link } from "react-router-dom";
import WarehouseInventoryListItem from "../InventoryListItem/InventoryListItem";
import sort from "../../assets/Icons/sort-24px.svg";
import "./InventoryList.scss";

const WarehouseInventoryList = ({ itemsReal }) => {
  const items = [
    {
      item_name: "toothbrush",
      category: "yellow",
      quantity: 7,
    },
  ];

  return (
    <>
      <div className="warehouse-inventory-list__category-header-wrapper">
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">
            Inventory Item
          </h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">
            Category
          </h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box warehouse-inventory-list__category-box--status">
          <h4 className="warehouse-inventory-list__category-header ">Status</h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box">
          <h4 className="warehouse-inventory-list__category-header">
            Quantity
          </h4>
          <img src={sort} alt="sort" />
        </div>
        <div className="warehouse-inventory-list__category-box warehouse-inventory-list__category-box--actions">
          <h4 className="warehouse-inventory-list__category-header">Actions</h4>
        </div>
      </div>
      {items.map((item) => (
        <WarehouseInventoryListItem
          name={item.item_name}
          category={item.category}
          quantity={item.quantity}
        />
      ))}
    </>
  );
};

export default WarehouseInventoryList;
