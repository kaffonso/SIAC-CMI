import { useNavigate } from "react-router";
import "./styles.css";

export default function SideButton(props) {
  let link;

  if (props.title === "sair") {
    link = "/";
  } else {
    link = props.url.concat(props.title);
  }

  const nav = useNavigate(); //componente que lida com os links, se inicia assim

  return (
    <div className="button">
      <button
        className={props.status}
        onClick={() => {
          nav(link); // ao clicar sera redirecionado para o url ou link respetivo
        }}>
        {props.name}
      </button>
    </div>
  );
}
