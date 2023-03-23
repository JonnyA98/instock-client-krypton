import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./WarehouseCard.scss";

const WarehouseCard = ({ warehouse, modalToggle }) => {
  return (
    <article>
      <div className="warehouses__stock">
        <div className="warehouses__main-info-wrapper">
          <div className="warehouses__name-add-wrapper">
            <div className="warehouses__facts">
              <h4 className="warehouses__subtitle">WAREHOUSE</h4>
              <Link
                to={`/warehouses/${warehouse.id}`}
                className="warehouses__description warehouses__link-wrapper"
              >
                <h3 className="warehouses__info">{warehouse.warehouse_name}</h3>
                <img
                  src={chevron}
                  alt=""
                  className="warehouses__info-chevron"
                />
              </Link>
            </div>
            <div className="warehouses__facts">
              <h4 className="warehouses__subtitle">ADDRESS</h4>
              <p className="warehouses__info">{warehouse.address}</p>
            </div>
          </div>
          <div className="warehouses__contact-wrapper">
            <div className="warehouses__facts">
              <h4 className="warehouses__subtitle">CONTACT NAME</h4>
              <p className="warehouses__info">{warehouse.contact_name}</p>
            </div>
            <div className="warehouses__facts">
              <h4 className="warehouses__subtitle">CONTACT INFORMATION</h4>
              <p className="warehouses__info">{warehouse.contact_phone}</p>
              <p className="warehouses__info">{warehouse.contact_email}</p>
            </div>
          </div>
        </div>
        <div className="warehouses__action-wrapper">
          <img
            src={deleteIcon}
            alt="delete Icon"
            onClick={() => modalToggle(warehouse)}
            className="warehouses__delete"
          />

          <img src={editIcon} alt="edit Icon" className="warehouses__edit" />
        </div>
      </div>
    </article>
  );
};

export default WarehouseCard;
