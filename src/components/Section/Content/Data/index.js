import "../styles.css";
import { useState } from "react";
export default function Data(props) {
  const data = props.data.info
  const [searchName, setSearchName] = useState("");

  const filterReturn = (filter, value) => {
    if (filter === "") {
      return value;
    } else if (value.nome.toLowerCase().includes(filter.toLowerCase())) {
      return value;
    }
  };

  const data_student = data
    .filter((value) => filterReturn(searchName, value))
    .map((data) => {
      const space = "";
      const name = space.concat(data.nome, "").toUpperCase();
      const status = space.concat(data.estado, "").toUpperCase();
      const ilha = space.concat(data.ilha.nomeIlha, "").toUpperCase();

      return (
        <div className="data_element">
          <p className="box">{data.code}</p>
          <p className="box">{name}</p>
          <p className="box">{data.curso.siglaCurso}</p>
          <p className="box">{data.sexo}</p>
          <p className="box">{ilha}</p>
          <p className="box">{status}</p>
        </div>
      );
    });
  return (
    <>
      <div className="data_searchbar">
        <label htmlFor="PROCURAR">PROCURAR</label>
        <input
          type="text"
          id="searchbar_input"
          placeholder="Procurar"
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        />
      </div>
      
      <div className="data_header">
        <div className="box">CODIGO</div>
        <div className="box">NOME</div>
        <div className="box">CURSO</div>
        <div className="box">SEXO</div>
        <div className="box">ILHA</div>
        <div className="box">ESTADO</div>
      </div>

      <div className="data_wrapper">
        {data_student}
      </div>
    </>
  );
}
