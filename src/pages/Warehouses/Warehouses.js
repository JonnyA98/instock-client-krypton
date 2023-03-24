import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchWarehouses from "../../components/SearchWarehouses/SearchWarehouses";
import WarehouseCard from "../../components/WarehouseCard/WarehouseCard";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import sort from "../../assets/Icons/sort-24px.svg";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  const modalToggle = (warehouse) => {
    setDeleteModal(!deleteModal);
    setWarehouseToDelete(warehouse);
  };

  const getWarehouses = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses`
    );
    setWarehouses(data);
  };

  const deleteWarehouse = async (warehouse) => {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses/${warehouse.id}`
    );
    getWarehouses();
    modalToggle();
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (!warehouses) {
    return <p>Loading..</p>;
  }
  const mainTitle = "Warehouses";
  const descriptionBtn = "Add New Warehouse";
  const linkTo = "/warehouses/add-warehouse";

  return (
    <>
      {deleteModal && (
        <DeleteWarehouseModal
          modalToggle={modalToggle}
          warehouseToDelete={warehouseToDelete}
          deleteWarehouse={deleteWarehouse}
        />
      )}
      <div className="warehouses">
        <div className="warehouses__card">
          <SearchWarehouses
            mainTitle={mainTitle}
            descriptionBtn={descriptionBtn}
            linkTo={linkTo}
          />

          <div className="inventory-list__category-header-wrapper">
            <div className="inventory-list__category-box">
              <h4 className="inventory-list__category-header">Warehouse</h4>
              <img src={sort} alt="sort" />
            </div>
            <div className="inventory-list__category-box">
              <h4 className="inventory-list__category-header">Address</h4>
              <img src={sort} alt="sort" />
            </div>
            <div className="inventory-list__category-box warehouse-inventory-list__category-box--status">
              <h4 className="inventory-list__category-header ">Contact Name</h4>
              <img src={sort} alt="sort" />
            </div>
            <div className="inventory-list__category-box">
              <h4 className="inventory-list__category-header">
                Contact Information
              </h4>
              <img src={sort} alt="sort" />
            </div>
            <div className="inventory-list__category-box warehouse-inventory-list__category-box--actions">
              <h4 className="inventory-list__category-header">Actions</h4>
            </div>
          </div>

          <div className="warehouses__list">
            {warehouses.map((warehouse) => {
              return (
                <WarehouseCard
                  key={warehouse.id}
                  warehouse={warehouse}
                  modalToggle={modalToggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Warehouses;
