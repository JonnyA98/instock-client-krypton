import "./AddWarehouse.scss";
import backBtn from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
import { POST_WAREHOUSE } from "../../utils/apiCalls.mjs";

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

  const [errors, setErrors] = useState({});

  const submitWarehouseHandler = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};

    let isValid = true;

    if (!formData.warehouse_name) {
      isValid = false;
      newErrors["warehouse_name"] = "Please enter a warehouse name";
    }

    if (!formData.address) {
      isValid = false;
      newErrors["address"] = "Please enter an address";
    }

    if (!formData.city) {
      isValid = false;
      newErrors["city"] = "Please enter a city";
    }

    if (!formData.country) {
      isValid = false;
      newErrors["country"] = "Please enter a country";
    }

    if (!formData.contact_name) {
      isValid = false;
      newErrors["contact_name"] = "Please enter a contact name";
    }

    if (!formData.contact_position) {
      isValid = false;
      newErrors["contact_position"] = "Please enter a contact position";
    }

    if (!formData.contact_phone || !formData.contact_phone.includes("+")) {
      isValid = false;
      newErrors["contact_phone"] = "Please enter a valid phone number";
    }

    if (!formData.contact_email || !formData.contact_email.includes("@")) {
      isValid = false;
      newErrors["contact_email"] = "Please enter a valid email address";
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // If valid, make new warehouse object
    const newWarehouse = {
      ...formData,
    };

    // Reset form fields
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
    try {
      POST_WAREHOUSE(newWarehouse);
    } catch (error) {
      console.log(error);
    }
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
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="warehouse_name"
                  placeholder="Warehouse Name"
                  onChange={handleChange}
                  value={formData.warehouse_name}
                />
                {errors.warehouse_name && (
                  <p className="add-warehouse-form__validation">
                    {errors.warehouse_name}
                  </p>
                )}

                <label htmlFor="address" className="add-warehouse-form__label">
                  Street Address
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  onChange={handleChange}
                  value={formData.address}
                />
                {errors.address && (
                  <p className="add-warehouse-form__validation">
                    {errors.address}
                  </p>
                )}

                <label htmlFor="city" className="add-warehouse-form__label">
                  City
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  value={formData.city}
                />
                {errors.city && (
                  <p className="add-warehouse-form__validation">
                    {errors.city}
                  </p>
                )}

                <label htmlFor="country" className="add-warehouse-form__label">
                  Country
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                  value={formData.country}
                />
                {errors.country && (
                  <p className="add-warehouse-form__validation">
                    {errors.country}
                  </p>
                )}
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
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="contact_name"
                  placeholder="Contact Name"
                  onChange={handleChange}
                  value={formData.contact_name}
                />
                {errors.contact_name && (
                  <p className="add-warehouse-form__validation">
                    {errors.contact_name}
                  </p>
                )}

                <label
                  htmlFor="contact_position"
                  className="add-warehouse-form__label"
                >
                  Position
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="contact_position"
                  placeholder="Position"
                  onChange={handleChange}
                  value={formData.contact_position}
                />
                {errors.contact_position && (
                  <p className="add-warehouse-form__validation">
                    {errors.contact_position}
                  </p>
                )}

                <label
                  htmlFor="contact_phone"
                  className="add-warehouse-form__label"
                >
                  Phone Number
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="contact_phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.contact_phone}
                />
                {errors.contact_phone && (
                  <p className="add-warehouse-form__validation">
                    {errors.contact_phone}
                  </p>
                )}

                <label
                  htmlFor="contact_email"
                  className="add-warehouse-form__label"
                >
                  Email
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "add-warehouse-form__input add-warehouse-form__input--error"
                      : "add-warehouse-form__input"
                  }
                  type="text"
                  name="contact_email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.contact_email}
                />
                {errors.contact_email && (
                  <p className="add-warehouse-form__validation">
                    {errors.contact_email}
                  </p>
                )}
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
