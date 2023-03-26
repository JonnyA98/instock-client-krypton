import "./WarehouseInfo.scss";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";

const WarehouseInfo = ({ warehouse }) => {
  const navigate = useNavigate();

  return (
    <div className="warehouse-info">
      <section className="warehouse-info__container">
        <div className="warehouse-info__wrapper">
          <img
            className="warehouse-info__arrow "
            src={arrow}
            alt="arrow"
            onClick={() => navigate(-1)}
          />
          <h2 className="warehouse-info__title ">{warehouse.warehouse_name}</h2>
        </div>
        <Link
          to={`/warehouses/edit/${warehouse.id}`}
          className="warehouse-info__edit"
          state={warehouse}
        >
          <img
            className="warehouse-info__pen"
            src={editIconWhite}
            alt="edit Icon"
          />
          <p className="warehouse-info__editPen">Edit</p>
        </Link>
      </section>
      <section className="warehouse-info__section">
        <div className="warehouse-info__address">
          <h2 className="warehouse-info__subtitle">WAREHOUSE ADDRESS</h2>
          <p className="warehouse-info__details">{warehouse.address}</p>
        </div>
        <div className="warehouse-info__stock">
          <div className="warehouse-info__facts">
            <h2 className="warehouse-info__subtitle">CONTACT NAME:</h2>
            <p className="warehouse-info__details">{warehouse.contact_name}</p>
            <p className="warehouse-info__details">
              {warehouse.contact_position}
            </p>
          </div>
          <div className="warehouse-info__facts">
            <h2 className="warehouse-info__subtitle">CONTACT INFORMATION:</h2>
            <p className="warehouse-info__details">{warehouse.contact_phone}</p>
            <p className="warehouse-info__details">{warehouse.contact_email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseInfo;
