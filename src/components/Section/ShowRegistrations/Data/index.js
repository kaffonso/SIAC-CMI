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
      .get("http://localhost:3333/api/registrations/info")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/api/registrations/info?name_like=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };

  const handleStatus = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/api/registrations/info?status=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.err(`Status filter error: ${err}`));
  };

  const handleSex = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3333/api/registrations/info?sex=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };
  data.sort((a, b) => a.code - b.code); // ordenar dados por codigo, ordem crescente

  const data_student = data.map((data) => {
    const space = "";
    const name = space.concat(data.student.full_name, "").toUpperCase();
    const date = new Date(data.created_at)
    console.log(date.getDate())
    return (
      <div className="data_element" key={data.id}>
        <p className="box">{data.id}</p>
        <p className="box">{name}</p>
        <p className="box">{data.student.code}</p>
        <p className="box">{data.course.acronym}</p>
        <p className="box">{data.course.year}</p>
        <p className="box">{date.getDay() + '/' + date.getMonth()  + '/' + date.getFullYear()}</p>
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
      <DataHeader one='CODIGO' two='NOME' three='CODIGO ALUNO' four='CURSO' five='ANO' six='DATA' /> 

      <div className="data_wrapper">{data_student}</div>
    </>
  );
}
