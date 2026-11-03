import './SportSelect.css'


const SportSelect = ({
  value,
  onChange,
  placeholder = 'Selecione uma modalidade',
  required = false,
}) => {
  return (
    <div className="sport-select">
      <label htmlFor="sport">
        Modalidade de interesse
        {required && <span className="required-mark"> *</span>}
      </label>
      
      <select
        id="sport"
        name="sport"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        <option value="Beach Tennis">Beach Tennis</option>
        <option value="Vôlei de Praia">Vôlei de Praia</option>
        <option value="Futevôlei">Futevôlei</option>
      </select>

      <small>
        Beach tennis, futevôlei ou vôlei de praia.
      </small>
    </div>
  );
};

export default SportSelect;