import "./AddWarehouse.scss";
import backBtn from "../../assets/Icons/arrow_back-24px.svg";

const AddWarehouse = () => {
  return (
    <main className="add-warehouse">
      <div className="add-warehouse__heading-wrapper">
        <img src={backBtn} alt="back button" />
        <h1>Add New Warehouse</h1>
      </div>
    </main>
  );
};

export default AddWarehouse;
