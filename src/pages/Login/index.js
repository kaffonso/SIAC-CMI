import "./styles.css";
import { useState } from "react";
import InputData from "../../components/Section/InputData";
import SubmitButton from "../../components/Section/SubmitButton";
import SideButton from "../../components/Sidebar/SideButton";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
    
  }

  return (
    <div className="login">
      <div className="box-login">
        <div className="title">
          <p>Login</p>
        </div>
        {/* <div className="form">
          <form id="form-login" onSubmit={handleSubmit}>
            <InputData name='Email' type='email' value={email} change={(e) => setEmail(e.target.value)}/>
            <InputData name='Password' type='password' value={password} change={(e) => setPassword(e.target.value)}/>
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
