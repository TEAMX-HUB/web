import InputStyles from "./input.module.css";


const Input = ({
  type,
  label,
  id,
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
        name={name}
        placeholder={placeholder}
        required
        style={style}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Input;