const ItemCard = ({ item, statusClass }) => {
  return (
    <article className="item">
      <h1 className="item__header">{item.item_name}</h1>
      <div className="item__text-container">
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
    </article>
  );
};

export default ItemCard;
