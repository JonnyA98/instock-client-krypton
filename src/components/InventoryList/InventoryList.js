import InventoryListItem from "../InventoryListItem/InventoryListItem";
import sort from "../../assets/Icons/sort-24px.svg";
import "./InventoryList.scss";

const InventoryList = ({ inventory, modalToggle }) => {
  return (
    <>
      <div className="inventory-list__category-header-wrapper">
        <div className="inventory-list__container inventory-list__container--1">
          <div className="inventory-list__category-box">
            <h4 className="inventory-list__category-header">Inventory Item</h4>
            <img src={sort} alt="sort" />
          </div>
          <div className="inventory-list__category-box">
            <h4 className="inventory-list__category-header">Category</h4>
            <img src={sort} alt="sort" />
          </div>
          <div className="inventory-list__category-box warehouse-inventory-list__category-box--status">
            <h4 className="inventory-list__category-header ">Status</h4>
            <img src={sort} alt="sort" />
          </div>
        </div>
        <div className="inventory-list__container inventory-list__container--2">
          <div className="inventory-list__category-box inventory-list__category-box--2 ">
            <h4 className="inventory-list__category-header">Quantity</h4>
            <img src={sort} alt="sort" />
          </div>
          <div className="inventory-list__category-box warehouse-inventory-list__category-box--2">
            <h4 className="inventory-list__category-header">Actions</h4>
          </div>
        </div>
      </div>
      {inventory &&
        inventory.map((item) => (
          <InventoryListItem
            item={item}
            name={item.item_name}
            category={item.category}
            quantity={item.quantity}
            key={item.id}
            modalToggle={modalToggle}
          />
        ))}
      {!inventory && <p>No inventory in this warehouse!</p>}
    </>
  );
};

export default InventoryList;
