import { useState, useEffect } from "react";
import "./ItemCard.scss";
import pencil from "../../assets/Icons/edit-24px.svg";
import arrow from "../../assets/Icons/arrow_back-24px.svg";

const ItemCard = ({ item }) => {
  const [statusClass, setStatusClass] = useState("item__status");

  useEffect(() => {
    if (item.quantity === 0) {
      setStatusClass("item__status item__status--out");
    }
  }, []);

  return (
    <article className="item">
      <div className="item__top-row">
        <div className="item__title-container">
          <img src={arrow} alt="arrow" />
          <h1 className="item__header">{item.item_name}</h1>
        </div>
        <div className="item__img-container">
          <img className="item__pencil" src={pencil} alt="pencil" />
        </div>
      </div>
      <div className="item__body-wrapper">
        <div className="item__text-container item__text-container--left">
          <div className="item__stat">
            <h4 className="item__mini-header">Item Description</h4>
            <p className="item__text">{item.description}</p>
          </div>
          <div className="item__stat">
            <h4 className="item__mini-header">Category</h4>
            <p className="item__text">{item.category}</p>
          </div>
        </div>
        <div className="item__text-container">
          <div className="item__row">
            <div className="item__stat">
              <h4 className="item__mini-header">Status</h4>
              <p className={statusClass}>{item.status}</p>
            </div>
            <div className="item__stat">
              <h4 className="item__mini-header">Quantity</h4>
              <p className="item__text">{item.quantity}</p>
            </div>
          </div>
          <div className="item__stat">
            <h4 className="item__mini-header">Warehouse</h4>
            <div className="item__text">{item.warehouse_name}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
