import "../styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "../../SearchInput";

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
      .get(`http://localhost:3333/info?name_like=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };

  const handleStatus = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/info?status=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.err(`Status filter error: ${err}`));
  };

  const handleSex = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/info?sex=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(`Search error: ${err}`));
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
        <div className="filters">
          <div className="filter">
            <select onChange={(e) => {setValue(e.target.value)}}>
              <option value="none" selected disabled hidden>Select a sex </option>
              <option value="M" onClick={handleSex}> Masculino </option>
              <option value="F" onClick={handleSex}> Feminino </option>
            </select>
          </div>
          <div className="filter">
            <select onChange={(e) => {setValue(e.target.value)}}>
              <option value="none" selected disabled hidden> Select a filter </option>
              <option value="Aprovado" onClick={handleStatus}>
                Aprovado
              </option>
              <option value="Reprovado" onClick={handleStatus}>
                Reprovado
              </option>
            </select>
          </div>
        </div>
          <SearchInput
            value={value}
            change={(e) => setValue(e.target.value)}
            click={handleSearch}
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

      <div className="data_wrapper">{data_student}</div>
    </>
  );
}
