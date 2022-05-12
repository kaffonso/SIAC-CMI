import './styles.css'
import Data from './Data'
import data from "./data.json";

export default function content() {
  return (
    <div className="studentData">
      <div className="data_header">
        <div className="box">CODIGO</div>
        <div className="box">NOME</div>
        <div className="box">CURSO</div>
        <div className="box">SEXO</div>
        <div className="box">ILHA</div>
        <div className="box">ESTADO</div>
      </div>
      <div className="data_container">
        <Data data={data} />
      </div>
    </div>
  );
}