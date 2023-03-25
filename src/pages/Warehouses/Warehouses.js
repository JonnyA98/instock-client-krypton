import "./Warehouses.scss";
import { useEffect, useState } from "react";

import SearchHeader from "../../components/SearchHeader/SearchHeader";
import WarehouseCard from "../../components/WarehouseCard/WarehouseCard";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import ListHeaderWarehouses from "../../components/ListHeaderWarehouses/ListHeaderWarehouses";
import { DELETE_WAREHOUSE, GET_WAREHOUSES } from "../../utils/apiCalls.mjs";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  const modalToggle = (warehouse) => {
    setDeleteModal(!deleteModal);
    setWarehouseToDelete(warehouse);
  };

  const getWarehouses = async () => {
    const { data } = await GET_WAREHOUSES();
    setWarehouses(data);
  };

  const deleteWarehouse = async (warehouse) => {
    DELETE_WAREHOUSE(warehouse);
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
          <SearchHeader mainTitle={mainTitle} descriptionBtn={descriptionBtn} />

          <ListHeaderWarehouses />

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
