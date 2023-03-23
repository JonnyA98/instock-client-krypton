import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

const WarehouseDetails = () => {
  const [inventory, setInventory] = useState(null);

  const { warehouseId } = useParams();

  useEffect(() => {
    const getInventory = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/warehouses/${warehouseId}/inventories`
      );
      setInventory(data);
    };

    try {
      getInventory();
    } catch (error) {
      console.log(error);
    }
  }, [warehouseId]);

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
