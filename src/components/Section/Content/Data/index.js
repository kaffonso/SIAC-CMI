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

  data.sort((a,b) =>(a.code - b.code)) // ordenar dados por codigo, orderm crescente

  const data_student = data
    .filter((value) => filterReturn(searchName, value))
    .map((data) => {
      const space = "";
      const name = space.concat(data.nome, "").toUpperCase();
      const status = space.concat(data.estado, "").toUpperCase();
      const ilha = space.concat(data.ilha.nomeIlha, "").toUpperCase();

      return (
        <div className="data_element" key={data.code}>
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
        <p className="box">CODIGO</p>
        <p className="box">NOME</p>
        <p className="box">CURSO</p>
        <p className="box">SEXO</p>
        <p className="box">ILHA</p>
        <p className="box">ESTADO</p>
      </div>

      <div className="data_wrapper">
        {data_student}
      </div>
    </>
  );
}
