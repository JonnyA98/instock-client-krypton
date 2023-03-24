import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../InventoryListItem/InventoryListItem.scss";
import arrow from "../../assets/Icons/chevron_right-24px.svg";
import bin from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";

const InventoryCard = ({ inventories }) => {
  const [status, setStatus] = useState("In Stock");
  const [statusClass, setStatusClass] = useState("inventory-list-item__status");

  useEffect(() => {
    if (inventories.quantity < 1) {
      setStatus("Out of Stock");
      setStatusClass(
        "inventory-list-item__status inventory-list-item__status--out"
      );
    }
  }, [inventories.quantity]);

  return (
    <>
      <article className="inventory-list-item">
        <div className="inventory-list-item__text">
          <div className="inventory-list-item__text-inner">
            <div className="inventory-list-item__category warehouse-inventory-list-item__category--link">
              <h4 className="inventory-list-item__mini-header">
                Inventory Item
              </h4>
              <Link className="inventory-list-item__link">
                <p className="inventory-list-item__link-text">
                  {inventories.item_name}
                </p>
                <img src={arrow} alt="chevron_right" />
              </Link>
            </div>
            <div className="inventory-list-item__category">
              <h4 className="inventory-list-item__mini-header">Caterogy</h4>
              <p className="inventory-list-item__data">
                {inventories.category}
              </p>
            </div>
          </div>
          <div className="inventory-list-item__text-inner">
            <div className="inventory-list-item__category warehouse-inventory-list-item__category--status">
              <h4 className="inventory-list-item__mini-header">Status</h4>
              <p className={statusClass}>{status}</p>
            </div>
            <div className="inventory-list-item__category">
              <h4 className="inventory-list-item__mini-header">QTY</h4>
              <p className="inventory-list-item__data">
                {inventories.quantity}
              </p>
              <h4 className="inventory-list-item__mini-header">Warehouse</h4>
              <p className="inventory-list-item__data inventory-list-item__warehouse-name ">
                {inventories.warehouse_name}
              </p>
            </div>
          </div>
        </div>
        <div className="inventory-list-item__buttons">
          <Link>
            <img src={bin} alt="bin" />
          </Link>
          <Link>
            <img src={pencil} alt="pencil" />
          </Link>
        </div>
      </article>
    </>
  );
};

export default InventoryCard;
