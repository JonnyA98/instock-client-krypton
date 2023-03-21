import { Link } from "react-router-dom";

const WarehouseInventoryListItem = ({ name, category, quantity }) => {
  return (
    <>
      <article className="warehouse-inventory-list-item">
        <div className="warehouse-inventory-list-item__text">
          <div className="warehouse-inventory-list-item__text-inner">
            <h4 className="warehouse-inventory-list-item__mini-header">
              Inventory Item
            </h4>
            <Link className="warehouse-inventory-list-item__link">
              <p>{name}</p>
            </Link>
            <h4 className="warehouse-inventory-list-item__mini-header">
              Category
            </h4>
            <p>{category}</p>
          </div>
          <div className="warehouse-inventory-list-item__text-inner">
            <h4 className="warehouse-inventory-list-item__mini-header">
              Status
            </h4>
            <p></p>
            <h4 className="warehouse-inventory-list-item__mini-header">
              Quantity
            </h4>
            <p>{quantity}</p>
          </div>
        </div>
        <div className="warehouse-inventory-list-item__buttons"></div>
      </article>
    </>
  );
};

export default WarehouseInventoryListItem;
