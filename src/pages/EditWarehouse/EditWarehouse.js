import backBtn from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal/FormModal";
import { PUT_WAREHOUSE } from "../../utils/apiCalls.mjs";

const EditWarehouse = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const warehouse = location.state;

  const backHandler = () => {
    navigate(-1);
  };

  const [showModal, setShowModal] = useState(false);

  // set form fields with warehouse to be edited
  const [formData, setFormData] = useState({
    warehouse_name: warehouse.warehouse_name,
    address: warehouse.address,
    city: warehouse.city,
    country: warehouse.country,
    contact_name: warehouse.contact_name,
    contact_position: warehouse.contact_position,
    contact_phone: warehouse.contact_phone,
    contact_email: warehouse.contact_email,
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
    const editedWarehouse = {
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

    console.log(editedWarehouse);
    try {
      PUT_WAREHOUSE(warehouse.id, editedWarehouse);
    } catch (error) {
      console.log(error);
    }

    setShowModal(true);

    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-warehouse__wrapper">
      <main className="form-warehouse">
        <div className="form-warehouse__heading-wrapper">
          <img
            className="form-warehouse__back"
            src={backBtn}
            alt="back button"
            onClick={backHandler}
          />
          <h1 className="form-warehouse__heading">Edit Warehouse</h1>
        </div>

        {/* Modal for confirming edit */}
        <FormModal show={showModal} />

        <form className="form-warehouse-form" onSubmit={submitWarehouseHandler}>
          <div className="form-warehouse-form__inputs-wrapper">
            <div className="form-warehouse-form__warehouse-details">
              <div className="form-warehouse-form__wrapper form-warehouse-form__wrapper--left">
                <h2 className="form-warehouse-form__heading">
                  Warehouse Details
                </h2>

                <label
                  className="form-warehouse-form__label"
                  htmlFor="warehouse_name"
                >
                  Warehouse Name
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="warehouse_name"
                  placeholder="Warehouse Name"
                  onChange={handleChange}
                  value={formData.warehouse_name}
                />
                {errors.warehouse_name && (
                  <p className="form-warehouse-form__validation">
                    {errors.warehouse_name}
                  </p>
                )}

                <label htmlFor="address" className="form-warehouse-form__label">
                  Street Address
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  onChange={handleChange}
                  value={formData.address}
                />
                {errors.address && (
                  <p className="form-warehouse-form__validation">
                    {errors.address}
                  </p>
                )}

                <label htmlFor="city" className="form-warehouse-form__label">
                  City
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  value={formData.city}
                />
                {errors.city && (
                  <p className="form-warehouse-form__validation">
                    {errors.city}
                  </p>
                )}

                <label htmlFor="country" className="form-warehouse-form__label">
                  Country
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                  value={formData.country}
                />
                {errors.country && (
                  <p className="form-warehouse-form__validation">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>
            <div className="form-warehouse-form__contact-details">
              <div className="form-warehouse-form__wrapper">
                <h2 className="form-warehouse-form__heading">
                  Contact Details
                </h2>

                <label
                  className="form-warehouse-form__label"
                  htmlFor="contact_name"
                >
                  Contact Name
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="contact_name"
                  placeholder="Contact Name"
                  onChange={handleChange}
                  value={formData.contact_name}
                />
                {errors.contact_name && (
                  <p className="form-warehouse-form__validation">
                    {errors.contact_name}
                  </p>
                )}

                <label
                  htmlFor="contact_position"
                  className="form-warehouse-form__label"
                >
                  Position
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="contact_position"
                  placeholder="Position"
                  onChange={handleChange}
                  value={formData.contact_position}
                />
                {errors.contact_position && (
                  <p className="form-warehouse-form__validation">
                    {errors.contact_position}
                  </p>
                )}

                <label
                  htmlFor="contact_phone"
                  className="form-warehouse-form__label"
                >
                  Phone Number
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="contact_phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.contact_phone}
                />
                {errors.contact_phone && (
                  <p className="form-warehouse-form__validation">
                    {errors.contact_phone}
                  </p>
                )}

                <label
                  htmlFor="contact_email"
                  className="form-warehouse-form__label"
                >
                  Email
                </label>
                <input
                  className={
                    errors.warehouse_name
                      ? "form-warehouse-form__input form-warehouse-form__input--error"
                      : "form-warehouse-form__input"
                  }
                  type="text"
                  name="contact_email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.contact_email}
                />
                {errors.contact_email && (
                  <p className="form-warehouse-form__validation">
                    {errors.contact_email}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="form-warehouse-form__bottom-wrapper">
            <button
              className="form-warehouse-form__button form-warehouse-form__button--cancel"
              onClick={backHandler}
            >
              Cancel
            </button>

            <button type="submit" className="form-warehouse-form__button">
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditWarehouse;
