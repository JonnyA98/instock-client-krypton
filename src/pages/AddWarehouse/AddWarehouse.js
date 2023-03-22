import "./AddWarehouse.scss";
import backBtn from "../../assets/Icons/arrow_back-24px.svg";

const AddWarehouse = () => {
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

        <form className="add-warehouse-form">
          <div className="add-warehouse-form__inputs-wrapper">
            <div className="add-warehouse-form__warehouse-details">
              <div className="add-warehouse-form__wrapper add-warehouse-form__wrapper--left">
                <h2 className="add-warehouse-form__heading">
                  Warehouse Details
                </h2>

                <label
                  className="add-warehouse-form__label"
                  htmlFor="warehouseName"
                >
                  Warehouse Name
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="warehouseName"
                  placeholder="Warehouse Name"
                />

                <label htmlFor="address" className="add-warehouse-form__label">
                  Street Address
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="address"
                  placeholder="Street Address"
                />

                <label htmlFor="city" className="add-warehouse-form__label">
                  City
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="city"
                  placeholder="City"
                />

                <label htmlFor="country" className="add-warehouse-form__label">
                  Country
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="country"
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="add-warehouse-form__contact-details">
              <div className="add-warehouse-form__wrapper">
                <h2 className="add-warehouse-form__heading">Contact Details</h2>

                <label
                  className="add-warehouse-form__label"
                  htmlFor="contactName"
                >
                  Contact Name
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="contactName"
                  placeholder="Contact Name"
                />

                <label htmlFor="position" className="add-warehouse-form__label">
                  Position
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="position"
                  placeholder="Position"
                />

                <label
                  htmlFor="phoneNumber"
                  className="add-warehouse-form__label"
                >
                  Phone Number
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />

                <label htmlFor="email" className="add-warehouse-form__label">
                  Email
                </label>
                <input
                  className="add-warehouse-form__input"
                  type="text"
                  name="email"
                  placeholder="Email"
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
