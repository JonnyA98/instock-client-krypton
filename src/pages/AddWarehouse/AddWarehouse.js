import "./AddWarehouse.scss";
import backBtn from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";

const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const submitWarehouseHandler = (e) => {
    e.preventDefault();

    const newWarehouse = {
      ...formData,
    };

    setFormData({
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    });

    console.log(newWarehouse);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-warehouse__wrapper">
      <main className="add-warehouse">
        <div className="add-warehouse__heading-wrapper">
          <img
            className="add-warehouse__back"
            src={backBtn}
            alt="back button"
          />
          <h1 className="add-warehouse__heading">Add New Warehouse</h1>
        </div>

        <form className="add-warehouse-form" onSubmit={submitWarehouseHandler}>
          <div className="add-warehouse-form__inputs-wrapper">
            <div className="add-warehouse-form__warehouse-details">
              <div className="add-warehouse-form__wrapper add-warehouse-form__wrapper--left">
                <h2 className="add-warehouse-form__heading">
                  Warehouse Details
                </h2>

                <label
                  className="add-warehouse-form__label"
                  htmlFor="warehouse_name"
                >
                  Warehouse Name
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="warehouse_name"
                  placeholder="Warehouse Name"
                  onChange={handleChange}
                  value={formData.warehouse_name}
                />

                <label htmlFor="address" className="add-warehouse-form__label">
                  Street Address
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  onChange={handleChange}
                  value={formData.address}
                />

                <label htmlFor="city" className="add-warehouse-form__label">
                  City
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  value={formData.city}
                />

                <label htmlFor="country" className="add-warehouse-form__label">
                  Country
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>
            </div>
            <div className="add-warehouse-form__contact-details">
              <div className="add-warehouse-form__wrapper">
                <h2 className="add-warehouse-form__heading">Contact Details</h2>

                <label
                  className="add-warehouse-form__label"
                  htmlFor="contact_name"
                >
                  Contact Name
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="contact_name"
                  placeholder="Contact Name"
                  onChange={handleChange}
                  value={formData.contact_name}
                />

                <label
                  htmlFor="contact_position"
                  className="add-warehouse-form__label"
                >
                  Position
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="contact_position"
                  placeholder="Position"
                  onChange={handleChange}
                  value={formData.contact_position}
                />

                <label
                  htmlFor="contact_phone"
                  className="add-warehouse-form__label"
                >
                  Phone Number
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="contact_phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.contact_phone}
                />

                <label
                  htmlFor="contact_email"
                  className="add-warehouse-form__label"
                >
                  Email
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="contact_email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.contact_email}
                />
              </div>
            </div>
          </div>

          <div className="add-warehouse-form__bottom-wrapper">
            <button className="add-warehouse-form__button add-warehouse-form__button--cancel">
              Cancel
            </button>
            <button type="submit" className="add-warehouse-form__button">
              + Add Warehouse
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddWarehouse;
