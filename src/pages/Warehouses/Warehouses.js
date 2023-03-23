import WarehouseInventoryList from "../../components/InventoryList/InventoryList";

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
    console.log(deleteModal);
  };

  const getWarehouses = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses`
    );
    setWarehouses(data);
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
        <DeleteWarehouseModal warehouseToDelete={warehouseToDelete} />
      )}
      <div className="warehouses">
        <div className="warehouses__card">
          <SearchWarehouses />
          <div className="warehouses__list">
            {warehouses.map((warehouse) => {
              // deleteModal && <DeleteWarehouseModal warehouse={warehouse} />;
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
