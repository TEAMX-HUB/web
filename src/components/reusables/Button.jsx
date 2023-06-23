import ButtonStyles from "./button.module.css";

const Button = ({ children, style, onClick, disable }) => {
    return disable ? (
      <button
        className={ButtonStyles.button}
        onClick={onClick}
        style={style}
        disabled
      >
        {children}
      </button>
    ) : (
      <button className={ButtonStyles.button} onClick={onClick} style={style}>
        {children}
      </button>
    );
  };
  
  export default Button;