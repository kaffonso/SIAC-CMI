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
      .get("https://siac-cmi-bck.herokuapp.com/api/registrations/info")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://siac-cmi-bck.herokuapp.com/api/registrations/info?name=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(`Search error: ${err}`));
  };

  const handleCourse = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://siac-cmi-bck.herokuapp.com/api/registrations/info?course=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.err(`Status filter error: ${err}`));
  };

  const handleYear = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://siac-cmi-bck.herokuapp.com/api/registrations/info?year=${value}`)
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
        <p className="box">{date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()}</p>
      </div>
    );
  });
  return (
    <>
      <div className="data_searchbar">
        <div className="filters">
          <div className="filter">
            <select onChange={(e) => { setValue(e.target.value) }}>
              <option value="none" selected disabled hidden>Select a year </option>
              <option value="1" onClick={handleYear}> first year </option>
              <option value="2" onClick={handleYear}> second year </option>
              <option value="3" onClick={handleYear}> third year </option>
              <option value="4" onClick={handleYear}> fourth year </option>

            </select>
          </div>
          <div className="filter">
            <select onChange={(e) => { setValue(e.target.value) }}>
              <option value="none" selected disabled hidden> Select a course </option>
              <option value="LEIT" onClick={handleCourse}>
                LEIT
              </option>
              <option value="LEE" onClick={handleCourse}>
                LEE
              </option>
              <option value="LEC" onClick={handleCourse}>
                LEC
              </option>
              <option value="LCB" onClick={handleCourse}>
                LCB
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
