import "./FormModal.scss";

const FormModal = ({ show, message }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="form-modal">
      <div className="form-modal__card">
        <h2 className="form-modal__heading">{message}</h2>
        <p className="form-modal__text">Redirecting...</p>
      </div>
    </div>
  );
};

export default FormModal;
