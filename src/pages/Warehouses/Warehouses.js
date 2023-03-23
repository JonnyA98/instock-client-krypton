import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchWarehouses from "../../components/SearchWarehouses/SearchWarehouses";
import WarehouseCard from "../../components/ListWarehouses/WarehouseCard";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";

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
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (!warehouses) {
    return <p>Loading..</p>;
  }

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
          <SearchWarehouses />
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
