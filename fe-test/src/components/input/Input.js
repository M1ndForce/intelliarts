import "./Input.css";

const Input = ({ text, value, id, onChange }) => {
  return (
    <div>
      <p>{text}</p>
      <input id={id} type={"text"} value={value} onChange={onChange} />
    </div>
  );
};
export default Input;
