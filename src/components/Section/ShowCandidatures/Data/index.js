import "../styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "../../SearchInput";
import DataHeader from "../../DataHeader";

export default function Data() {
  //const data = props.data.info
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    return await axios
      .get("http://localhost:3333/api/candidatures/info")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/api/candidatures/info?name=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      }) 
      .catch((err) => console.log(`Search error: ${err}`));
  };

  const handleStatus = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/api/candidatures/info?status=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.err(`Status filter error: ${err}`));
  };

  const handleSex = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/api/candidatures/info?sex=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };
  data.sort((a, b) => a.code - b.code); // ordenar dados por codigo, ordem crescente

  const data_student = data.map((data) => {
    const space = "";
    const name = space.concat(data.candidate.full_name, "").toUpperCase();
    console.log(data)
    const status = space.concat(data.status, "").toUpperCase();
    const island = space.concat(data.candidate.address.island, "").toUpperCase();
    return (
      <div className="data_element" key={data.id}>
        <p className="box">{data.id}</p>
        <p className="box">{name}</p>
        <p className="box">{data.course.acronym}</p>
        <p className="box">{data.candidate.user.sex}</p>
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
      <DataHeader one='CODIGO' two='NOME' three='CURSO' four='SEXO' five='ILHA' six='ESTADO' /> 

      <div className="data_wrapper">{data_student}</div>
    </>
  );
}
