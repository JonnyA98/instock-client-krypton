import WarehouseInventoryList from "../../components/InventoryList/InventoryList";

import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchWarehouses from "../../components/SearchWarehouses/SearchWarehouses";
import WarehouseCard from "../../components/ListWarehouses/WarehouseCard";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const modalToggle = () => {
    setDeleteModal(!deleteModal);
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
  );
};

export default Warehouses;
