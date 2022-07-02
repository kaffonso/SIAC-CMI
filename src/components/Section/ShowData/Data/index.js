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

  // const fetchAllData = async () => {
  //   return await axios
  //     .get("http://localhost:3000/api/students")
  //     .then((response) => {setData(response.data)
  //     console.log(response.data)})
  //     .catch((err) => console.log(err));
  // };
  const fetchAllData = async () => {
    return await axios.get('http://localhost:3001/api/candidatura')
      .then((response) => {

        console.log(response.data)
        setData(response.data);
      });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/api/candidatura?name=${value}`)
      .then((response) => {
        setData(response.data)
        setValue("")
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };

  const handleStatus = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/api/candidatura?status=${value}`)
      .then((response) => {
        setData(response.data)
        setValue("")
      })
      .catch((err) => console.err(`Status filter error: ${err}`))
  }

  const handleSex = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/api/candidatura?sex=${value}`)
      .then((response) => {
        console.log(response)
        setData(response.data)
        setValue("")
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };
  data.sort((a, b) => a.code - b.code); // ordenar dados por codigo, ordem crescente

  const data_student = data.map((data) => {
    const space = "";
    const name = space.concat(data.full_name, "").toUpperCase();
    const status = space.concat(data.city, "").toUpperCase();
    const island = space.concat(data.island, "").toUpperCase();
    return (
      <div className="data_element" key={data.code}>
        <p className="box">{data.code}</p>
        <p className="box">{name.trim()}</p>
        <p className="box">{data.course.acronym}</p>
        <p className="box">{data.user.sex}</p>
        <p className="box">{data.address.island}</p>
        <p className="box">{status.trim()}</p>
      </div>
    );
  });
  return (
    <>
      <div className="data_searchbar">
        <div>
          <select onChange={(e) => {
            setValue(e.target.value)
          }} >
            <option value="none" selected disabled hidden>Select a sex</option>
            <option value="M" onClick={handleSex}>Masculino</option>
            <option value="F" onClick={handleSex}>Feminino</option>
          </select>
        </div>
        <div>
          <select onChange={(e) => {
            setValue(e.target.value)
          }} >
            <option value="none" selected disabled hidden>Select a filter</option>
            <option value="Aprovado" onClick={handleStatus}>APROVADO</option>
            <option value="Reprovado" onClick={handleStatus}>REPROVADO</option>
          </select>
        </div>
        <label htmlFor="PROCURAR">PROCURAR</label>
        <input
          type="text"
          id="searchbar_input"
          placeholder="Procurar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" onClick={handleSearch} value="Search" />
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
