import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo";
import DeleteItemModal from "../../components/DeleteItemModal/DeleteItemModal";
import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  const [inventory, setInventory] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const { warehouseId } = useParams();

  const modalToggle = (item) => {
    setDeleteModal(!deleteModal);
    setItemToDelete(item);
  };

  const getInventory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses/${warehouseId}/inventories`
    );
    setInventory(data);
  };

  const deleteItem = async (item) => {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventories/${item.id}`
    );
    getInventory();
    modalToggle();
  };

  useEffect(() => {
    try {
      getInventory();
    } catch (error) {
      console.log(error);
    }
  }, [warehouseId]);

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

  if (!warehouse) {
    return <p>LOADING!!!!</p>;
  }
  if (!inventory) {
    return (
      <>
        <div className="warehouses__list">
          {warehouse.map((warehouse) => {
            return <WarehouseInfo key={warehouse.id} warehouse={warehouse} />;
          })}
        </div>
        <h2>This warehouse has no inventory</h2>
      </>
    );
  }

  return (
    <>
      {deleteModal && (
        <DeleteItemModal
          modalToggle={modalToggle}
          itemToDelete={itemToDelete}
          deleteItem={deleteItem}
        />
      )}

      <div className="warehouses__list">
        {warehouse.map((warehouse) => {
          return <WarehouseInfo key={warehouse.id} warehouse={warehouse} />;
        })}
      </div>
      <InventoryList modalToggle={modalToggle} inventory={inventory} />

      {error && <p>{error}</p>}
    </>
  );
};

export default WarehouseDetails;
