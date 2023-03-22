import { useState } from "react";
import "./AddStock.scss";
import { v4 as uuid } from "uuid";

const AddStock = () => {
  const warehouseList = [
    { id: 123, name: "manhatten" },
    { id: 456, name: "new york" },
  ];
  const categoryList = ["Health", "Gear", "", ""];

  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    quantity: 0,
    status: "",
  });

  const submitItemHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.inStock.value);
    console.log(e.target.inStock.checked);

    const warehouseId = e.target.itemWarehouse.id;

    const quantity = !e.target.inStock ? 0 : e.target.itemQuantity;

    const stockStatus = !e.target.inStock ? "Out of Stock" : "In Stock";

    const newItem = {
      ...formData,
      id: uuid(),
    };
  };

  const handleChange = (event) => {
    const inputName = event.target.name;

    const value =
      inputName === "quantity"
        ? Number(event.target.value)
        : event.target.value;

    setFormData({ ...formData, [inputName]: value });
  };

  return (
    <div className="wrapper">
      <div className="add-stock__form-wrapper">
        <div className="add-stock__heading-wrapper">
          <div className="add-stock__back-btn"></div>
          <h1 className="add-stock__heading"> Add New Inventory Item</h1>
        </div>
        <form onSubmit={submitItemHandler} className="add-stock__form">
          <div className="add-stock__form-text-wrapper">
            <div className="add-stock__input-wrapper">
              <div className="add-stock__form-left">
                <h2 className="add-stock__form-heading">Item Details</h2>
                <label htmlFor="item_name" className="add-stock__form-label">
                  <h3>Item Name</h3>
                </label>
                <input
                  type="text"
                  name="item_name"
                  placeholder="Item Name"
                  className="add-stock__input"
                  onChange={(event) => handleChange(event)}
                />
                <label htmlFor="description" className="add-stock__form-label">
                  <h3>Description</h3>
                </label>
                <textarea
                  name="description"
                  placeholder="Please enter a brief item description..."
                  className="add-stock__input add-stock__input--description"
                  onChange={(event) => handleChange(event)}
                ></textarea>
                <label htmlFor="category" className="add-stock__form-label">
                  <h3>Catergory</h3>
                </label>
                <select
                  name="category"
                  className="add-stock__input"
                  placeholder="Please Select"
                  onChange={(event) => handleChange(event)}
                >
                  <option>Please Select</option>
                  {categoryList.map((category, i) => {
                    return (
                      <option key={i} value={`${category}`}>
                        {category}
                      </option>
                    );
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
                      value="In Stock"
                      name="status"
                      id="inStock"
                      onChange={(event) => handleChange(event)}
                    />
                    <label
                      htmlFor="inStock"
                      className="add-stock__stock-status"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="add-stock__radio-half-wrapper">
                    <input
                      type="radio"
                      value="Out of Stock"
                      name="status"
                      id="outOfStock"
                      onChange={(event) => handleChange(event)}
                    />
                    <label
                      htmlFor="outOfStock"
                      className="add-stock__stock-status"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
                {formData.status === "In Stock" && (
                  <>
                    <label htmlFor="quantity" className="add-stock__form-label">
                      <h3>Quantity</h3>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      className="add-stock__input"
                      placeholder={0}
                      onChange={(event) => handleChange(event)}
                    />
                  </>
                )}
                <label htmlFor="warehouse_id" className="add-stock__form-label">
                  <h3>Warehouse</h3>
                </label>
                <select
                  name="warehouse_id"
                  id="warehouses"
                  className="add-stock__input"
                  onChange={(event) => handleChange(event)}
                >
                  <option value="">Please Select</option>

                  {warehouseList.map((place) => {
                    return (
                      <option key={place.id} value={place.id}>
                        {place.name}
                      </option>
                    );
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
