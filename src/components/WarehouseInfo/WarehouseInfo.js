import "./WarehouseInfo.scss";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";

const WarehouseInfo = ({ warehouse }) => {
  return (
    <div className="warehouse-info">
      <section className="warehouse-info__container">
        <h2 className="warehouse-info__title warehouse-info__arrow ">
          {warehouse.warehouse_name}
        </h2>
        <span className="warehouse-info__edit">
          <img
            className="warehouse-info__pen"
            src={editIconWhite}
            alt="edit Icon"
          />
          <p className="warehouse-info__editPen">Edit</p>
        </span>
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
