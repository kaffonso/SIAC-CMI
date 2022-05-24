import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";

export default function SideButton(props) {
  const [status, setStatus] = useState(props.status);

  const link = props.url.concat(props.title) // receber as duas partes do url e concatenar para termos o link ou path para a respetiva pagina

  const nav = useNavigate(); //componente que lida com os links, se inicia assim

  return (
    <div className="button">
      <button
        className={status}
        onClick={() => {
          nav(link); // ao clicar sera redirecionado para o url ou link respetivo 
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
