import "./AddStock.scss";

const AddStock = () => {
  const warehouseList = ["manhatten", "new york"];
  const categoryList = ["Health", "Gear"];
  return (
    <div className="wrapper">
      <div className="add-stock__form-wrapper">
        <div className="add-stock__heading-wrapper">
          <div className="add-stock__back-btn"></div>
          <h1 className="add-stock__heading"></h1>
        </div>
        <form action="" className="add-stock__form">
          <div className="add-stock__form-text-wrapper">
            <div className="add-stock__input-wrapper">
              <div className="add-stock__form-left">
                <h2 className="add-stock__form-heading">Item Details</h2>
                <label htmlFor="itemName" className="add-stock__form-label">
                  <h3>Item Name</h3>
                </label>
                <input
                  type="text"
                  name="itemName"
                  placeholder="Item Name"
                  className="add-stock__input"
                />
                <label
                  htmlFor="itemDescription"
                  className="add-stock__form-label"
                >
                  <h3>Description</h3>
                </label>
                <textarea
                  name="itemDescription"
                  placeholder="Please enter a brief item description..."
                  className="add-stock__input add-stock__input--description"
                ></textarea>
                <label htmlFor="itemCategory" className="add-stock__form-label">
                  <h3>Catergory</h3>
                </label>
                <select
                  name="itemCategory"
                  id="warehouses"
                  className="add-stock__input"
                  placeholder="Please Select"
                >
                  <option>Please Select</option>
                  {categoryList.map((category) => {
                    return <option value={`${category}`}>{category}</option>;
                  })}
                </select>
              </div>
              <div className="add-stock__form-right">
                <h2 className="add-stock__form-heading">Item Availability</h2>
                <label className="add-stock__form-label">
                  <h3>Status</h3>
                </label>
                <div className="add-stock__radio-wrapper">
                  <div className="add-stock__radio-half-wrapper">
                    <input
                      type="radio"
                      value="inStock"
                      // className="add-stock__input"
                      name="stock"
                    />
                    <p className="add-stock__stock-status">In Stock</p>
                  </div>
                  <div className="add-stock__radio-half-wrapper">
                    <input
                      type="radio"
                      value="outOfStock"
                      // className="add-stock__input"
                      name="stock"
                    />
                    <p className="add-stock__stock-status">Out of Stock</p>
                  </div>
                </div>
                <label htmlFor="" className="add-stock__form-label">
                  <h3>Quantity</h3>
                </label>
                <input
                  type="text"
                  className="add-stock__input"
                  placeholder="0"
                />
                <label
                  htmlFor="itemWarehouse"
                  className="add-stock__form-label"
                >
                  <h3>Warehouse</h3>
                </label>
                <select
                  name="itemWarehouse"
                  id="warehouses"
                  className="add-stock__input"
                >
                  <option>Please Select</option>

                  {warehouseList.map((place) => {
                    return <option value={`${place}`}>{place}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="add-stock__btn-wrapper">
            <button type="text" className="add-stock__btn-cancel">
              Cancel
            </button>
            <button type="submit" className="add-stock__btn-submit">
              +Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStock;
