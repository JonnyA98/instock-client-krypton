import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

const WarehouseDetails = () => {
  const [inventory, setInventory] = useState(null);

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

  if (!inventory) {
    return <p>LOADING!!!!</p>;
  }

  return (
    <>
      <InventoryList warehouseInventory={inventory} />
    </>
  );
};

export default WarehouseDetails;
