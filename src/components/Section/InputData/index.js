import "./styles.css";
export default function InputData(props) {
  return (
    <div className="input_data">
      <label>{props.name}</label>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.change}
        required
      />
    </div>
  );
}
