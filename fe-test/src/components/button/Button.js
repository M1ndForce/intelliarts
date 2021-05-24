import "./Button.css";

const Button = ({ text, onclick }) => {
  return <button onClick={onclick}>{text} </button>;
};
export default Button;
