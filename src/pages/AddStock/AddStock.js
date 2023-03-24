import { useState, useEffect } from "react";
import "./AddStock.scss";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStock = () => {
  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    quantity: 0,
    status: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(false);
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/warehouses`
      );
      setWarehouses(data);
    } catch (error) {
      setApiError(true);
    }
  };
  useEffect(() => {
    getWarehouses();
  }, []);

  const categoryList = [
    "Health",
    "Gear",
    "Accesserories",
    "Apperal",
    "Electronics",
  ];

  const navigate = useNavigate();

  const postNewItem = async () => {
    const newItem = {
      ...formData,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/inventories`,
        newItem
      );
    } catch (err) {
      console.log(err);
    }
  };

  const submitItemHandler = async (e) => {
    e.preventDefault();

    let isValid = true;

    const newErrors = {};

    if (formData.item_name === "") {
      isValid = false;
      newErrors["name"] = "Please enter an Item Name";
    }

    if (formData.description === "") {
      isValid = false;
      newErrors["description"] = "Please enter an Item description";
    }

    if (formData.category === "") {
      isValid = false;
      newErrors["category"] = "Please select a Category for your Item";
    }

    if (formData.status === "") {
      isValid = false;
      newErrors["status"] = "Please specify the Status of your Stock";
    }

    if (formData.status === "In Stock") {
      if (formData.quantity === 0) {
        isValid = false;
        newErrors["quantity"] = "Please enter the Quantity of your Stock";
      }
    }

    if (formData.warehouse_id === "") {
      isValid = false;
      newErrors["warehouse"] = "Please select a Warehouse for your Item";
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    postNewItem();
    navigate(-1);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;

    const value =
      inputName === "quantity"
        ? Number(event.target.value)
        : event.target.value;

    setFormData({ ...formData, [inputName]: value });
  };

  const handleBackPage = () => {
    navigate(-1);
  };
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="wrapper">
      <div className="add-stock__form-wrapper">
        <div className="add-stock__heading-wrapper">
          <div className="add-stock__back-btn" onClick={handleBackPage}></div>
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
                  className={`add-stock__input ${
                    errors.name ? "add-stock__input--invalid" : ""
                  }`}
                  onChange={(event) => handleChange(event)}
                />
                {errors.name && (
                  <p className="add-stock__validation-msg">{errors.name}</p>
                )}
                <label htmlFor="description" className="add-stock__form-label">
                  <h3>Description</h3>
                </label>
                <textarea
                  name="description"
                  placeholder="Please enter a brief item description..."
                  className={`add-stock__input add-stock__input--description ${
                    errors.description ? "add-stock__input--invalid" : ""
                  }`}
                  onChange={(event) => handleChange(event)}
                ></textarea>
                {errors.description && (
                  <p className="add-stock__validation-msg">
                    {errors.description}
                  </p>
                )}
                <label htmlFor="category" className="add-stock__form-label">
                  <h3>Catergory</h3>
                </label>
                <select
                  name="category"
                  className={`add-stock__input add-stock__input--dropdown ${
                    errors.category ? "add-stock__input--invalid" : ""
                  }`}
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
                {errors.category && (
                  <p className="add-stock__validation-msg">{errors.category}</p>
                )}
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
                      className="add-stock__input--radio"
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
                      className="add-stock__input--radio"
                    />
                    <label
                      htmlFor="outOfStock"
                      className="add-stock__stock-status"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
                {errors.status && (
                  <p className="add-stock__validation-msg">{errors.name}</p>
                )}
                {formData.status === "In Stock" && (
                  <>
                    <label htmlFor="quantity" className="add-stock__form-label">
                      <h3>Quantity</h3>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      className={`add-stock__input ${
                        errors.quantity ? "add-stock__input--invalid" : ""
                      }`}
                      placeholder={0}
                      onChange={(event) => handleChange(event)}
                    />
                    {errors.quantity && (
                      <p className="add-stock__validation-msg">
                        {errors.quantity}
                      </p>
                    )}
                  </>
                )}
                <label htmlFor="warehouse_id" className="add-stock__form-label">
                  <h3>Warehouse</h3>
                </label>
                <select
                  name="warehouse_id"
                  id="warehouses"
                  className={`add-stock__input add-stock__input--dropdown  ${
                    errors.warehouse ? "add-stock__input--invalid" : ""
                  }`}
                  onChange={(event) => handleChange(event)}
                >
                  <option value="">Please Select</option>

                  {warehouses.map((place) => {
                    return (
                      <option key={place.id} value={place.id}>
                        {place.warehouse_name}
                      </option>
                    );
                  })}
                </select>
                {errors.warehouse && (
                  <p className="add-stock__validation-msg">
                    {errors.warehouse}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="add-stock__btn-wrapper">
            <button type="button" className="add-stock__btn-cancel">
              Cancel
            </button>
            <button
              type="submit"
              className="add-stock__btn-submit"
              disabled={apiError}
            >
              +Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStock;
