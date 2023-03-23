import "./WarehouseInfo.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";

const WarehouseInfo = ({ warehouse }) => {
  return (
    <div className="warehouse-info">
      <h2 className="warehouse-info__title warehouse-info__arrow ">
        {warehouse.warehouse_name}
      </h2>
      <span className="warehouse-info__edit">
        <img src={editIcon} alt="edit Icon" />
      </span>
      <section>
        <div>
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
