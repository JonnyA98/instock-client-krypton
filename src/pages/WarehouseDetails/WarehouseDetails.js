import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import WarehouseInfo from "../../components/WarehouseInfo/WarehouseInfo";
import DeleteItemModal from "../../components/DeleteItemModal/DeleteItemModal";
import "./WarehouseDetails.scss";
import {
  GET_A_WAREHOUSE,
  DELETE_INVENTORY_ITEM,
  GET_WAREHOUSE_INVENTORY,
} from "../../utils/apiCalls.mjs";

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
    const { data } = await GET_WAREHOUSE_INVENTORY(warehouseId);
    setInventory(data);
  };

  const deleteItem = async (item) => {
    DELETE_INVENTORY_ITEM(item);
    getInventory();
    modalToggle();
  };

  useEffect(() => {
    try {
      getInventory();
    } catch (error) {
      console.log(error);
    }

    // eslint-disable-next-line
  }, [warehouseId]);

  useEffect(() => {
    const getWarehouse = async () => {
      const { data } = await GET_A_WAREHOUSE(warehouseId);

      setWarehouse(data[0]);
    };

    try {
      getWarehouse();
    } catch (err) {
      setError(err.message);
    }
  }, [warehouseId]);

  if (!warehouse) {
    return <p>Loading...</p>;
  }
  if (!inventory) {
    return (
      <div className="warehouse-details">
        <div className="warehouse-details__wrapper">
          <div className="warehouse-details__list">
            <WarehouseInfo key={warehouse.id} warehouse={warehouse} />
          </div>
          <div className="warehouse-details__no-inv-wrapper">
            <h2 className="warehouse-details__no-inv">
              This warehouse has no inventory
            </h2>
            <Link
              to="/inventory/add-stock"
              className="warehouse-details__add-btn"
            >
              + Add New Item
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="warehouse-details">
      <div className="warehouse-details__wrapper">
        {deleteModal && (
          <DeleteItemModal
            modalToggle={modalToggle}
            itemToDelete={itemToDelete}
            deleteItem={deleteItem}
          />
        )}

        <div className="warehouse-details__list">
          <WarehouseInfo key={warehouse.id} warehouse={warehouse} />
        </div>
        <InventoryList modalToggle={modalToggle} inventory={inventory} />

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default WarehouseDetails;
