import './FormField.css';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  helpText,
  required = false,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {required && <span className="required-mark"> *</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />

      {helpText && <small>{helpText}</small>}
    </div>
  );
};

export default FormField;
