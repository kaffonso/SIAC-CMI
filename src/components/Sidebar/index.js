import Avatar from "./Avatar";
import SideButton from "./SideButton";
import logo from "../../img/logo.png";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Context from "../../services/context";

import "./styles.css";

export default function Sidebar(props) {
  const sampleLocation = useLocation().pathname;
  const path = sampleLocation.split("/");
  
  console.log(path[2]);

  let btn1, btn2, btn3;

  if (path[2] === "candidatura") {
    btn1 = "active";
    btn2 = "innactive";
    btn3 = "innactive";
  } else if (path[2] === "matricula") {
    btn1 = "innactive";
    btn2 = "active";
    btn3 = "innactive";
  } else {
    btn1 = "innactive";
    btn2 = "innactive";
    btn3 = "active";
  }

  const state = useContext(Context)

  const userType = state.type; //receber o tipo de usuario, que vem do json
  console.log(userType)
  let url; //variavel para guardar o url

  if (userType === "Funcionario") {
    //comparar o tipo de usuario com os 3 posiveis tipos, atribuir um path para o respetivo
    url = "/funcionario/";
  } else if (userType === "Aluno") {
    url = "/aluno/";
    btn1 = 'disabled'
  } else {
    url = "/candidato/";
    btn3 = 'disabled'
  }

  return (
    <div className="sidebar">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="options">
        <div className="sidebuttons">
          <SideButton
            name="CANDIDATURA"
            status={btn1} // passar o estilo do botao
            url={url} //passar o url como prop para o butao
            title="candidatura" // a segund parte de url, que e o titulo do butao
          />
          <SideButton
            name="MATRICULA"
            status={btn2}
            url={url}
            title="matricula"
          />
          <SideButton
            name="INSCRIÇÃO"
            status={btn3}
            url={url}
            title="inscricao"
          />
          <SideButton
            name="SAIR"
            status="logout"
            title="sair"
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer">
          <img src={logo} alt="" id="footer-img" />
        </div>
      </div>
    </div>
  );
}
