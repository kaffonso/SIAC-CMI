import './styles.css'

export default function SubmitButton(props) {
  const space = "";
  const title = space.concat(props.title, "").toUpperCase();

  return (
    <div className="btn_submit">
      <input type="submit" value={title} />
    </div>
  );
}
