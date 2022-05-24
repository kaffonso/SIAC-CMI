import Avatar from "./Avatar";
import SideButton from "./SideButton";
import logo from "../../img/logo.png";

import "./styles.css";

export default function Sidebar(props) {
  const userType = props.data.type; //receber o tipo de usuario, que vem do json
  let url; //variavel para guardar o url

  if (userType === "Funcionario") { //comparar o tipo de usuario com os 3 posiveis tipos, atribuir um path para o respetivo
    url = "/funcionario/";
  } else if (userType === "Aluno") {
    url = "/aluno/";
  } else {
    url = "/candidato/";
  }

  return (
    <div className="sidebar">
      <div className="avatar">
        <Avatar data={props.data} />
      </div>
      <div className="options">
        <div className="sidebuttons">
          <SideButton
            name="CANDIDATURA"
            status="active"
            url={url} //passar o url como prop para o butao
            title="candidatura" // a segund parte de url, que e o titulo do butao
          />
          <SideButton
            name="MATRICULA"
            status="innactive"
            url={url}
            title="matricula"
          />
          <SideButton
            name="INSCRIÇÃO"
            status="innactive"
            url={url}
            title="inscricao"
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
