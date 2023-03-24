import "./DeleteItemModal.scss";
import close from "../../assets/Icons/close-24px.svg";

const DeleteItemModal = ({ itemToDelete, modalToggle, deleteItem }) => {
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
          Delete {itemToDelete.item_name} inventory item?
        </h1>
        <p className="modal__text">
          Please confirm that you'd like to delete {itemToDelete.item_name} from
          the inventory list. You won't be able to undo this action.
        </p>
        <div className="modal__buttons">
          <div
            onClick={modalToggle}
            className="modal__button modal__button--cancel"
          >
            <a className="modal__button-text">Cancel</a>
          </div>
          <div
            onClick={() => deleteItem(itemToDelete)}
            className="modal__button modal__button--delete"
          >
            <a className="modal__button-text modal__button-text--delete">
              Delete
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeleteItemModal;
