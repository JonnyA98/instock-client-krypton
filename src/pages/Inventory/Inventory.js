import axios from "axios";
import { useEffect, useState } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import SearchWarehouses from "../../components/SearchWarehouses/SearchWarehouses";
import DeleteItemModal from "../../components/DeleteItemModal/DeleteItemModal";
import "./Inventory.scss";

const Inventory = () => {
  const [inventories, setInventories] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const modalToggle = (item) => {
    setDeleteModal(!deleteModal);
    setItemToDelete(item);
  };

  const deleteItem = async (item) => {
    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventories/${item.id}`
    );
    getInventories();
    modalToggle();
  };

  const getInventories = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventories`
    );
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
  const linkTo = "/inventory/add-stock";

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
        <SearchWarehouses
          mainTitle={mainTitle}
          descriptionBtn={descriptionBtn}
          linkTo={linkTo}
        />
        <div>
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
