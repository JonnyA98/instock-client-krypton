import axios from "axios";
import { useEffect, useState } from "react";
import WarehouseInventoryList from "../../components/InventoryList/InventoryList";

const WarehouseDetails = () => {
  const [warehouseInventory, setWarehouseInventory] = useState(null);
  const getWarehouseInventory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventory`
    );
    setWarehouseInventory(data);
  };

  useEffect(() => {
    getWarehouseInventory();
  }, []);
  return (
    <>
      <WarehouseInventoryList />
    </>
  );
};

export default WarehouseDetails;
