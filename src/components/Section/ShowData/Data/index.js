import "../styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Data(props) {
  //const data = props.data.info
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    return await axios
      .get("http://localhost:3333/info")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/info?q=${value}`)
      .then((response) =>{
         setData(response.data)
         setValue("")
      })
      .catch((err) => console.log(err));
  };

  data.sort((a, b) => a.code - b.code); // ordenar dados por codigo, ordem crescente

  const data_student = data.map((data) => {
    const space = "";
    const name = space.concat(data.name, "").toUpperCase();
    const status = space.concat(data.status, "").toUpperCase();
    const island = space.concat(data.island.islandName, "").toUpperCase();
    return (
      <div className="data_element" key={data.code}>
        <p className="box">{data.code}</p>
        <p className="box">{name}</p>
        <p className="box">{data.course.courseAcronym}</p>
        <p className="box">{data.sex}</p>
        <p className="box">{island}</p>
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" onClick={handleSearch} value="Search"/>
      </div>

      <div className="data_header">
        <p className="box">CODIGO</p>
        <p className="box">NOME</p>
        <p className="box">CURSO</p>
        <p className="box">SEXO</p>
        <p className="box">ILHA</p>
        <p className="box">ESTADO</p>
      </div>

      <div className="data_wrapper">{data_student}</div>
    </>
  );
}
