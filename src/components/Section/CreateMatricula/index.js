import InputData from "../InputData";
import { useState } from "react";
import SubmitButton from "../SubmitButton";
import "../CreateCandidatura/styles.css";

export default function CreateMatricula() {
  const [name, setName] = useState("");
  const [CNI, setCNI] = useState("");
  const [email, setEmail] = useState("");
  const [courseYear, setCourseYear] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const candidatura = {
      code: 201231,
      name: name,
      cni: CNI,
      email: email,
      courseYear: courseYear,
    };

    console.log(candidatura);

    setName("");
    setCNI("");
    setEmail("");
    setCourseYear("");

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
          <p>Detalhes de Matricula</p>
          <div className="data_course">
            <div className="dropdown">
              <label for="course_year">Ano de Curso</label>
              <select
                id="course_year"
                name="course_year"
                onChange={(e) => setCourseYear(e.target.value)}
              >
                <option value="none" selected disabled hidden>
                  Escolha o Ano
                </option>
                <option value="1">1º Ano</option>
                <option value="2">2º Ano</option>
                <option value="3">3º Ano</option>
                <option value="4">4º Ano</option>
              </select>
            </div>
          </div>
          <p>Pagamento</p>
          <div className="data_payment">
            <InputData type="file" name="Comprovativo" />
          </div>
          <SubmitButton title='Matricular'/>
        </form>
      </div>
    </div>
  );
}
