import InputStyles from "./input.module.css";

const Input = ({
  type,
  label,
  id,
  onChange,
  value,
  name = id,
  placeholder,
  style,
  errorMessage,
}) => {
  return (
    <div className={InputStyles.wrapper}>
      {errorMessage && (
        <small className={InputStyles.errorMessage}>{errorMessage}</small>
      )}
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required
        style={style}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Input;
