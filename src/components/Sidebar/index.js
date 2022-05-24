import Avatar from "./Avatar";
import SideButton from "./SideButton";
import logo from "../../img/logo.png";

import "./styles.css";

export default function Sidebar(props) {
  const userType = props.data.type;
  let url;

  if (userType === "Funcionario") {
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
            url={url}
            title="candidatura"
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
