import './styles.css'

export default function SubmitButton(props) {
  return (
    <div className="btn_submit">
      <input type="submit" value={props.title} />
    </div>
  );
}
