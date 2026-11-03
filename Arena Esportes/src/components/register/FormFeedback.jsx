import './FormFeedback.css'


const FormFeedback = ({ type, message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`form-feedback ${type}`} role="status">
      {message}
    </div>
  );
};

export default FormFeedback;

