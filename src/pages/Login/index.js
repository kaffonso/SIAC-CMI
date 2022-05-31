import "./styles.css";
import InputData from "../../components/Section/InputData";
import SubmitButton from "../../components/Section/SubmitButton";
import SideButton from "../../components/Sidebar/SideButton";

export default function Login() {
  return (
    <div className="login">
      <div className="box-login">
        <div className="title">
          <p>Login</p>
        </div>
        {/* <div className="form">
          <form id="form-login" action="">
            <InputData name='Email' type='email'/>
            <InputData name='Password' type='password' />
            <SubmitButton title='Entrar' />
          </form>
        </div> */}

        <div className="users">
          <SideButton
            name="ALUNO"
            status="active"
            url="/aluno/matricula"
            title=""
          />
          <SideButton
            name="CANDIDATO"
            status="active"
            url="/candidato/matricula"
            title=""
          />
          <SideButton
            name="FUNCIONARIO"
            status="active"
            url="/funcionario/candidatura"
            title=""
          />
        </div>
      </div>
    </div>
  );
}
