import { useEffect, useState } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import DeleteItemModal from "../../components/DeleteItemModal/DeleteItemModal";
import "./Inventory.scss";
import {
  DELETE_INVENTORY_ITEM,
  GET_INVENTORY_ALL,
} from "../../utils/apiCalls.mjs";

const Inventory = () => {
  const [inventories, setInventories] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const modalToggle = (item) => {
    setDeleteModal(!deleteModal);
    setItemToDelete(item);
  };

  const deleteItem = async (item) => {
    await DELETE_INVENTORY_ITEM(item);
    getInventories();
    modalToggle();
  };

  const getInventories = async () => {
    const { data } = await GET_INVENTORY_ALL();
    setInventories(data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  if (!inventories) {
    return <p>Loading..</p>;
  }

  const mainTitle = "Inventory";
  const descriptionBtn = "Add New Item";

  return (
    <div className="inventories">
      <div className="inventories__card">
        {deleteModal && (
          <DeleteItemModal
            modalToggle={modalToggle}
            itemToDelete={itemToDelete}
            deleteItem={deleteItem}
          />
        )}
        <SearchHeader mainTitle={mainTitle} descriptionBtn={descriptionBtn} />
        <div className="inventory-list alt">
          <InventoryHeader />
        </div>
        {inventories.map((inventories) => {
          return (
            <InventoryCard
              modalToggle={modalToggle}
              key={inventories.id}
              inventories={inventories}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;
