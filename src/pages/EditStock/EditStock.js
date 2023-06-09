import { useState, useEffect } from "react";

import FormModal from "../../components/FormModal/FormModal.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  GET_WAREHOUSES,
  PUT_INVENTORY_ITEM,
  GET_INVENTORY_ITEM,
} from "../../utils/apiCalls.mjs";

const EditStock = () => {
  const { stockId } = useParams();

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
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  let inventoryItem;
  inventoryItem = location.state;

  useEffect(() => {
    const getInventoryItem = async () => {
      const { data } = await GET_INVENTORY_ITEM(stockId);

      // eslint-disable-next-line
      inventoryItem = data;
      console.log(inventoryItem);

      setFormData({
        warehouse_id: inventoryItem.warehouse_id,
        item_name: inventoryItem.item_name,
        description: inventoryItem.description,
        category: inventoryItem.category,
        quantity: inventoryItem.quantity,
        status: inventoryItem.status,
      });
    };

    if (!inventoryItem) {
      getInventoryItem();
      return;
    }
    setFormData({
      warehouse_id: inventoryItem.warehouse_id,
      item_name: inventoryItem.item_name,
      description: inventoryItem.description,
      category: inventoryItem.category,
      quantity: inventoryItem.quantity,
      status: inventoryItem.status,
    });
  }, []);

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const { data } = await GET_WAREHOUSES();

        const filteredWarehouses = [];
        data.forEach((warehouseItem) => {
          if (warehouseItem.id === formData.warehouse_id) {
            filteredWarehouses.unshift(warehouseItem);
          } else {
            filteredWarehouses.push(warehouseItem);
          }
        });

        setWarehouses(filteredWarehouses);
      } catch (error) {
        setApiError(true);
      }
    };

    getWarehouses();
  }, [formData.warehouse_id]);

  const categoryList = [
    "Health",
    "Gear",
    "Accessories",
    "Apperal",
    "Electronics",
  ];

  const filteredCategories = [];

  categoryList.forEach((categoryItem) => {
    if (categoryItem === formData.category) {
      filteredCategories.unshift(categoryItem);
    } else {
      filteredCategories.push(categoryItem);
    }
  });

  const navigate = useNavigate();

  const updateItem = async (newItem) => {
    try {
      await PUT_INVENTORY_ITEM(inventoryItem.id, newItem);
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

    const quantityAsNum = Number(formData.quantity);

    if (isNaN(quantityAsNum)) {
      isValid = false;
      newErrors["quantity"] = "Please ensure Stock is a number";
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const newItem = {
      ...formData,
      quantity: quantityAsNum,
    };

    await updateItem(newItem);

    setShowModal(true);

    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;

    const value = event.target.value;

    inputName === "status"
      ? setFormData({ ...formData, [inputName]: value, quantity: 0 })
      : setFormData({ ...formData, [inputName]: value });
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <div className="wrapper">
      <FormModal message="Inventory Edited" show={showModal} />

      <div className="add-stock__form-wrapper">
        <div className="add-stock__heading-wrapper">
          <div className="add-stock__back-btn" onClick={handleBackPage}></div>
          <h1 className="add-stock__heading"> Edit Inventory Item</h1>
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
                  value={formData.item_name}
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
                  value={formData.description}
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
                  {filteredCategories.map((category, i) => {
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
                      checked={formData.status === "In Stock"}
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
                      checked={formData.status === "Out of Stock"}
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
                      value={formData.quantity}
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
            <button
              type="button"
              className="add-stock__btn-cancel"
              onClick={handleBackPage}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="add-stock__btn-submit"
              disabled={apiError}
            >
              Edit Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStock;
