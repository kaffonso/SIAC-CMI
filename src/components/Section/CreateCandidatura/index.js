import InputData from "../InputData";
import { useState } from "react";
import "./styles.css";

export default function CreateCandidatura() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [CNI, setCNI] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sex, setSex] = useState("");
  const [islandAcronym, setIslandAcronym] = useState("");
  const [courseAcronym, setCourseAcronym] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const courseData = {
      "courseAcronym": courseAcronym,
    };

    const islandData = {
      "islandAcronym": islandAcronym
    };

    const candidatura = {
      "code": 201231,
      "name": name,
      "nasc": date,
      "cni": CNI,
      "telephone": telephone,
      "email": email,
      "course": courseData,
      "sex": sex,
      "island": islandData
    };

    console.log(candidatura);

    setName('');
    setDate('');
    setCNI('');
    setEmail('');
    setSex('');
    setTelephone('');
    setCourseAcronym('');

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
              placeholder="Nome"
              id="name"
              change={(e) => setName(e.target.value)}
            />
            <InputData
              type="date"
              name="Nascimento"
              id="nasc"
              change={(e) => setDate(e.target.value)}
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
            <InputData
              type="number"
              name="Telefone"
              id="telephone"
              change={(e) => setTelephone(e.target.value)}
            />
            <div className="dropdown">
              <label for="sex">Sexo</label>
              <select
                id="sex_element"
                name="sex"
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="none" selected disabled hidden>
                  Escolha o Sexo
                </option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
            <div className="data_course">
              <div className="dropdown">
                <label for="island">Ilha de Residencia</label>
                <select
                  id="island_element"
                  name="island"
                  onChange={(e) => setIslandAcronym(e.target.value)}
                >
                  <option value="none" selected disabled hidden>
                    Escolha a Ilha
                  </option>
                  <option value="SA">Santo Antao</option>
                  <option value="SV">Sao Vicente</option>
                  <option value="SN">Sao Nicolau</option>setSex
                  <option value="ST">Santiago</option>
                  <option value="FG">Fogo</option>
                  <option value="BR">Brava</option>
                </select>
              </div>
            </div>
            <InputData type="file" name="Fotocopia de NIF" />
            <InputData type="file" name="Fotocopia de CNI" />
            <InputData type="file" name="Atestado Medico" />
            <InputData type="file" name="Registro" />
          </div>
          <p>Dados Escolares</p>
          <div className="data_school">
            <InputData type="file" name="Certificado de Conclusao" />
            <InputData type="file" name="Historico Escolar" />
          </div>
          <p>Escolha de Curso</p>
          <div className="data_course">
            <div className="dropdown">
              <label for="course">Curso</label>
              <select
                id="course_element"
                name="course"
                defaultValue=""
                onChange={(e) => {
                  setCourseAcronym(e.target.value);
                }}
              >
                <option value="none" selected disabled hidden>
                  Escolha o Curso
                </option>
                <option value="LEIT">
                  Licencietura Engenharia Informatica e Telecomunicacoes
                </option>
                <option value="LEC">Licencietura Engenharia Civil</option>
                <option value="LCB">Licencietura Ciencias Biologicas</option>
                <option value="LEE">Licencietura Engenharia Eletronica</option>
                <option value="LEM">Licencietura Maquinas Maritimas</option>
              </select>
            </div>
          </div>
          <p>Pagamento</p>
          <div className="data_payment">
            <InputData type="file" name="Comprovativo" />
          </div>
          <div className="btn_submit">
            <input type="submit" value="CANDIDATAR" />
          </div>
        </form>
      </div>
    </div>
  );
}
