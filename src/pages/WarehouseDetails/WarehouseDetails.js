import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

const WarehouseDetails = () => {
  const [inventory, setInventory] = useState(null);
  const [warehouseInventory, setwarehouseInventory] = useState([]);

  const { warehouseId } = useParams();

  const getInventory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventories`
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

  useEffect(() => {
    if (!inventory) {
      console.log("Inventory hasn't loaded yet... Stopping.");
      return;
    }

    console.log("Inventory has loaded... Proceeding.");

    const filteredInventory = inventory.filter((item) => {
      return item.warehouse_id === warehouseId;
    });

    console.log(filteredInventory);

    setwarehouseInventory(filteredInventory);
  }, [inventory]);

  if (!inventory) {
    return <p>LOADING!!!!</p>;
  }

  return (
    <>
      <InventoryList warehouseInventory={warehouseInventory} />
    </>
  );
};

export default WarehouseDetails;
