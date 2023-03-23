import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import "./WarehouseCard.scss";

const WarehouseCard = ({ warehouse, modalToggle }) => {
  return (
    <article>
      <div className="warehouses__stock">
        <div className="warehouses__facts">
          <h2 className="warehouses__subtitle">WAREHOUSE</h2>
          <Link
            to={`/warehouses/${warehouse.id}`}
            className="warehouses__description warehouses__link"
          >
            <p className="warehouses__info">{warehouse.warehouse_name}</p>
          </Link>
        </div>
        <div className="warehouses__facts">
          <h2 className="warehouses__subtitle">CONTACT NAME</h2>
          <p className="warehouses__info">{warehouse.contact_name}</p>
        </div>
        <div className="warehouses__facts">
          <h2 className="warehouses__subtitle">ADDRESS</h2>
          <p className="warehouses__info">{warehouse.address}</p>
        </div>
        <div className="warehouses__facts">
          <h2 className="warehouses__subtitle">CONTACT INFORMATION</h2>
          <p className="warehouses__info">{warehouse.contact_phone}</p>
          <p className="warehouses__info">{warehouse.contact_email}</p>
        </div>

        <img
          onClick={() => modalToggle(warehouse)}
          src={deleteIcon}
          alt="delete Icon"
          className="warehouses__delete"
        />

        <img src={editIcon} alt="edit Icon" className="warehouses__edit" />
      </div>
    </article>
  );
};

export default WarehouseCard;
