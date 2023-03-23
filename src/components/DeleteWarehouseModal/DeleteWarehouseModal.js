const DeleteWarehouseModal = ({ warehouse }) => {
  return (
    <>
      <h1>Delete {warehouse} warehouse?</h1>
      <p>
        Please confirm that you'd like to delete the {warehouse} warehouse from
        the list of warehouses. You don't be able to undo this action.
      </p>
    </>
  );
};

export default DeleteWarehouseModal;
