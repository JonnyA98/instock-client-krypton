import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import DeleteItemModal from "../../components/DeleteItemModal/DeleteItemModal";

const WarehouseDetails = () => {
  const [inventory, setInventory] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { warehouseId } = useParams();

  const modalToggle = (item) => {
    setDeleteModal(!deleteModal);
    setItemToDelete(item);
  };

  const deleteItem = (item) => {
    console.log(item);
  };

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
      {deleteModal && (
        <DeleteItemModal
          modalToggle={modalToggle}
          itemToDelete={itemToDelete}
          deleteItem={deleteItem}
        />
      )}
      <InventoryList modalToggle={modalToggle} warehouseInventory={inventory} />
    </>
  );
};

export default WarehouseDetails;
