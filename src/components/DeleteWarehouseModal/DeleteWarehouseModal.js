import "./DeleteWarehouseModal.scss";

const DeleteWarehouseModal = ({ warehouseToDelete }) => {
  return (
    <article className="modal">
      <div className="modal__wrapper">
        <h1 className="modal__header">
          Delete {warehouseToDelete.warehouse_name} warehouse?
        </h1>
        <p className="modal__text">
          Please confirm that you'd like to delete the{" "}
          {warehouseToDelete.warehouse_name} warehouse from the list of
          warehouses. You don't be able to undo this action.
        </p>
      </div>
    </article>
  );
};

export default DeleteWarehouseModal;
