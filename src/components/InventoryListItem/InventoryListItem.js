import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./InventoryListItem.scss";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import bin from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";

const InventoryListItem = ({ item, category, quantity, modalToggle, name }) => {
  const [status, setStatus] = useState("In Stock");
  const [statusClass, setStatusClass] = useState("inventory-list-item__status");

  useEffect(() => {
    if (quantity < 1) {
      setStatus("Out of Stock");
      setStatusClass(
        "inventory-list-item__status inventory-list-item__status--out"
      );
    }
  }, [quantity]);

  return (
    <>
      <article className="inventory-list-item">
        <div className="inventory-list-item__text">
          <div className="inventory-list-item__text-inner">
            <div className="inventory-list-item__category warehouse-inventory-list-item__category--link">
              <h4 className="inventory-list-item__mini-header">
                Inventory Item
              </h4>
              <Link
                to={`/inventory/${item.id}`}
                className="inventory-list-item__link"
              >
                <h3 className="inventory-list-item__link-text">{name}</h3>
                <img src={arrow} alt="chevron_right" />
              </Link>
            </div>
            <div className="inventory-list-item__category">
              <h4 className="inventory-list-item__mini-header">Category</h4>
              <p className="inventory-list-item__data">{category}</p>
            </div>
          </div>
          <div className="inventory-list-item__text-inner">
            <div className="inventory-list-item__category warehouse-inventory-list-item__category--status">
              <h4 className="inventory-list-item__mini-header">Status</h4>
              <p className={statusClass}>{status}</p>
            </div>
            <div className="inventory-list-item__category">
              <h4 className="inventory-list-item__mini-header">QTY</h4>
              <p className="inventory-list-item__data">{quantity}</p>
            </div>
          </div>
        </div>
        <div className="inventory-list-item__buttons">
          <img
            onClick={() => modalToggle(item)}
            className="inventory-list-item__delete"
            src={bin}
            alt="bin"
          />

          <Link
            to={`/inventory/edit/${item.id}`}
            state={item}
            className="inventory-list-item__link"
          >
            <img src={pencil} alt="pencil" />
          </Link>
        </div>
      </article>
    </>
  );
};

export default InventoryListItem;
