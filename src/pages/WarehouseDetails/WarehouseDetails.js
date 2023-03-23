import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo";
import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  const [inventory, setInventory] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [error, setError] = useState("");

  const { warehouseId } = useParams();

  const getInventory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses/${warehouseId}/inventories`
    );
    setInventory(data);
  };

  useEffect(() => {
    try {
      getInventory();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getWarehouse = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses/${warehouseId}`
    );
    setWarehouse(data);
  };

  useEffect(() => {
    try {
      getWarehouse();
    } catch (err) {
      setError(err.message);
    }
  }, []);

  if (!inventory || !warehouse) {
    return <p>LOADING!!!!</p>;
  }

  return (
    <>
      <div className="warehouses">
        <div className="warehouses__card">
          <div className="warehouses__list">
            {warehouse.map((warehouse) => {
              return <WarehouseInfo key={warehouse.id} warehouse={warehouse} />;
            })}
          </div>
          <InventoryList warehouseInventory={inventory} />
        </div>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default WarehouseDetails;
