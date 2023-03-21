const AddStock = () => {
  const warehouseList = ["manhatten", "new york"];
  const categoryList = ["Health", "Gear"];
  return (
    <div className="wrapper">
      <div className="add-stock__form-wrapper">
        <form action="" className="add-stock__form">
          <div className="add-stock__heading-wrapper">
            <h1 className="add-stock__heading">Add New Inventory Item</h1>
          </div>
          <div className="add-stock__form-left">
            <h2 className="add-stock__form-heading">Item Details</h2>
            <label htmlFor="itemName" className="add-stock__form-label">
              {" "}
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              placeholder="Please enter Items name"
              className="add-stock__input"
            />
            <label htmlFor="itemDescription" className="add-stock__form-label">
              Description
            </label>
            <textarea
              name="itemDescription"
              placeholder="Please enter a brief item description..."
              className="add-stock__input"
            ></textarea>
            <label htmlFor="itemCategory">Catergory</label>
            <select
              name="itemCategory"
              id="warehouses"
              className="add-stock__input"
            >
              {categoryList.map((category) => {
                return <option value={`${category}`}>{category}</option>;
              })}
            </select>
          </div>
          <div className="add-stock__form-right">
            <h2 className="add-stock__form-heading">Item Availability</h2>
            <label className="add-stock__form-label">Status</label>
            <div className="add-stock__form-radio-wrapper">
              <input
                type="radio"
                value="In Stock"
                className="add-stock__input"
              />
              <input
                type="radio"
                value="Out of Stock"
                className="add-stock__input"
              />
            </div>
            <label htmlFor="" className="add-stock__form-label">
              Quantity
            </label>
            <input type="text" className="add-stock__input" placeholder="0" />
            <label
              htmlFor="itemWarehouse"
              className="add-stock__form-label"
            ></label>
            <select
              name="itemWarehouse"
              id="warehouses"
              className="add-stock__dropdown"
            >
              {warehouseList.map((place) => {
                return <option value={`${place}`}>{place}</option>;
              })}
            </select>
          </div>
          <div className="add-stock__btn-wrapper">
            <button type="text" className="add-stock__btn-cancel">
              Cancel
            </button>
          </div>
          <button type="submit" className="add-stock__btn-submit">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStock;
