import InputData from "./InputData";
import "./styles.css";

export default function CreateData() {
  return (
    <div className="data_container">
      <div className="data_form">
        <form method="post" id="data_form_input">
          <p>Informacoes Pessoais</p>
          <div className="data_personal">
            <InputData type="text" name="Nome" />
            <InputData type="date" name="Nascimento" />
            <InputData type="text" name="CNI" />
            <InputData type="email" name="Email" />
            <InputData type="number" name="Telefone" />
            <div className="dropdown">
              <label for="sex">Sexo</label>
              <select id="sex_element" name="sex">
                <option value="SA">Masculino</option>
                <option value="SV">Feminino</option>
              </select>
            </div>
            <div className="data_course">
              <div className="dropdown">
                <label for="island">Ilha de Residencia</label>
                <select id="island_element" name="island">
                  <option value="SA">Santo Antao</option>
                  <option value="SV">Sao Vicente</option>
                  <option value="SN">Sao Nicolau</option>
                  <option value="SL">Sal</option>
                  <option value="BV">Boavista</option>
                  <option value="MA">Maio</option>
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
              <select id="course_element" name="course">
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
