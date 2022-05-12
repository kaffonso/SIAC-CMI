import './style.css'
import Data from './Data'
import data from "./data.json";

export default function content() {
  return (
    <div className="studentData">
      <div className="wrapper container containerBox">
        <div className="box">Nome</div>
        <div className="box">Curso</div>
        <div className="box">Sexo</div>
        <div className="box">Ilha</div>
        <div className="box">Estado</div>
      </div>

      <div className="data">
        <Data data={data} />
      </div>
    </div>
  );
}
