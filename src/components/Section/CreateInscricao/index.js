import InputData from "../InputData";
import { useState } from "react";
import SubmitButton from "../SubmitButton";
import "../CreateCandidatura/styles.css";

export default function CreateInscricao() {
  const [name, setName] = useState("");
  const [CNI, setCNI] = useState("");
  const [email, setEmail] = useState("");
  const [class1, setClass1] = useState("");
  const [class2, setClass2] = useState("");
  const [class3, setClass3] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const candidatura = {
      code: 201231,
      name: name,
      cni: CNI,
      email: email,
      class1 : class1,
      class2 : class2,
      class3 : class3
    };

    console.log(candidatura);

    setName("");
    setCNI("");
    setEmail("");
    setClass1("")
    setClass2("")
    setClass3("")

    e.target.reset();
  }

  return (
    <div className="data_container">
      <div className="data_form">
        <form method="post" id="data_form_input" onSubmit={handleSubmit}>
          <p>Informacoes Pessoais</p>
          <div className="data_personal">
            <InputData
              type="text"
              name="Nome"
              id="name"
              change={(e) => setName(e.target.value)}
            />
            <InputData
              type="text"
              name="CNI"
              id="cni"
              change={(e) => setCNI(e.target.value)}
            />
            <InputData
              type="email"
              name="Email"
              id="email"
              change={(e) => setEmail(e.target.value)}
            />
            <div className="data_course"></div>
            <InputData type="file" name="Fotocopia de NIF" />
            <InputData type="file" name="Fotocopia de CNI" />
          </div>
          <p>Detalhes de Inscricao</p>
          <div className="data_course">
            <div className="dropdown">
              <label htmlFor="class">Disciplina 1</label>
              <select
                id="class"
                name="class"
                onChange={(e) => setClass1(e.target.value)}
              >
                <option value="none" selected disabled hidden>
                  Escolha a Disciplina
                </option>
                <option value="IP">Introdução a Programação</option>
                <option value="AC">Arquitetura de Computadores</option>
                <option value="MD">Matemática Discreta</option>
                <option value="AED">Algoritmo e Estrutura de Dados</option>
                <option value="AM1">Análise Matemática 2</option>
                <option value="MV">Mecânica e Vibrações</option>
                <option value="PDM">Programação para Dispositivos Móveis </option>
                <option value="POO">Programação Orientada a Objectos</option>
                <option value="AM1">Análise Matemática 1</option>
                <option value="FSO">Fundamentos de Sistemas Operativos</option>
                <option value="SD">Sistemas Digitais</option>
                <option value="SS">Sistemas e Sinais</option>
                <option value="FIA">Fundamentos de Inteligência Artificial</option>
                <option value="BD">Base de Dados</option>
                <option value="IRC">Introdução a Redes de Computadores</option>
                <option value="EO">Eletromagnetismo e Óptica</option>
                <option value="ESW">Engenharia de Software</option>
              </select>
            </div>
            <div className="dropdown">
              <label htmlFor="class">Disciplina 2</label>
              <select
                id="class"
                name="class"
                onChange={(e) => setClass2(e.target.value)}
              >
                <option value="none" selected disabled hidden>
                  Escolha a Disciplina
                </option>
                <option value="IP">Introdução a Programação</option>
                <option value="AC">Arquitetura de Computadores</option>
                <option value="MD">Matemática Discreta</option>
                <option value="AED">Algoritmo e Estrutura de Dados</option>
                <option value="AM1">Análise Matemática 2</option>
                <option value="MV">Mecânica e Vibrações</option>
                <option value="PDM">Programação para Dispositivos Móveis </option>
                <option value="POO">Programação Orientada a Objectos</option>
                <option value="AM1">Análise Matemática 1</option>
                <option value="FSO">Fundamentos de Sistemas Operativos</option>
                <option value="SD">Sistemas Digitais</option>
                <option value="SS">Sistemas e Sinais</option>
                <option value="FIA">Fundamentos de Inteligência Artificial</option>
                <option value="BD">Base de Dados</option>
                <option value="IRC">Introdução a Redes de Computadores</option>
                <option value="EO">Eletromagnetismo e Óptica</option>
                <option value="ESW">Engenharia de Software</option>
              </select>
            </div>
            <div className="dropdown">
              <label htmlFor="class">Disciplina 3</label>
              <select
                id="class"
                name="class"
                onChange={(e) => setClass3(e.target.value)}
              >
                <option value="none" selected disabled hidden>
                  Escolha a Disciplina
                </option>
                <option value="IP">Introdução a Programação</option>
                <option value="AC">Arquitetura de Computadores</option>
                <option value="MD">Matemática Discreta</option>
                <option value="AED">Algoritmo e Estrutura de Dados</option>
                <option value="AM1">Análise Matemática 2</option>
                <option value="MV">Mecânica e Vibrações</option>
                <option value="PDM">Programação para Dispositivos Móveis </option>
                <option value="POO">Programação Orientada a Objectos</option>
                <option value="AM1">Análise Matemática 1</option>
                <option value="FSO">Fundamentos de Sistemas Operativos</option>
                <option value="SD">Sistemas Digitais</option>
                <option value="SS">Sistemas e Sinais</option>
                <option value="FIA">Fundamentos de Inteligência Artificial</option>
                <option value="BD">Base de Dados</option>
                <option value="IRC">Introdução a Redes de Computadores</option>
                <option value="EO">Eletromagnetismo e Óptica</option>
                <option value="ESW">Engenharia de Software</option>
              </select>
            </div>
          </div>
          <p>Pagamento</p>
          <div className="data_payment">
            <InputData type="file" name="Comprovativo" />
          </div>
          <SubmitButton title='inscrever'/>
        </form>
      </div>
    </div>
  );
}
