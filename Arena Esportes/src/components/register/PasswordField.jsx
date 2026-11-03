import { useState } from 'react';
import './PasswordField.css';

const PasswordField = ({
  label,
  name,
  value,
  onChange,
  placeholder = 'Digite sua senha',
  helpText,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-field">
      <label htmlFor={name}>
        {label}
        {required && <span className="required-mark"> *</span>}
      </label>

      <div className="password-input-container">
        <input
          id={name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          <img
            src={
              showPassword
                ? '/images/icons/eye.svg'
                : '/images/icons/eye-off.svg'
            }
            alt=""
          />
        </button>
      </div>

      {helpText && <small>{helpText}</small>}
    </div>
  );
};

export default PasswordField;
