import "./FormModal.scss";

const FormModal = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="form-modal">
      <div className="form-modal__card">
        <h2 className="form-modal__heading">Warehouse added</h2>
        <p className="form-modal__text">Redirecting...</p>
      </div>
    </div>
  );
};

export default FormModal;
