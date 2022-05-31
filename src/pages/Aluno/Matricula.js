import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import CreateMatricula from "../../components/Section/CreateMatricula";
import data from "../../data.json";

import "./styles.css";
import Context from "../../services/context";

export default function Matricula() {
  return (
    <Context.Provider value={data}>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<CreateMatricula />} />
        </div>
      </div>
    </Context.Provider>
  );
}