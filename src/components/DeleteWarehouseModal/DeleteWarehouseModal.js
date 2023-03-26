import "./DeleteWarehouseModal.scss";
import close from "../../assets/Icons/close-24px.svg";

const DeleteWarehouseModal = ({
  warehouseToDelete,
  modalToggle,
  deleteWarehouse,
}) => {
  return (
    <article onClick={modalToggle} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal__wrapper">
        <img
          onClick={modalToggle}
          className="modal__close"
          src={close}
          alt="close"
        />
        <h1 className="modal__header">
          Delete {warehouseToDelete.warehouse_name} warehouse?
        </h1>
        <p className="modal__text">
          Please confirm that you'd like to delete the{" "}
          {warehouseToDelete.warehouse_name} warehouse from the list of
          warehouses. You won't be able to undo this action.
        </p>
        <div className="modal__buttons">
          <button
            onClick={modalToggle}
            className="modal__button modal__button--cancel"
          >
            Cancel
          </button>

          <button
            onClick={() => deleteWarehouse(warehouseToDelete)}
            className="modal__button modal__button--delete"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default DeleteWarehouseModal;
