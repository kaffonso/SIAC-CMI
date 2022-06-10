import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import CreateMatricula from "../../components/Section/CreateMatricula";

import "./styles.css";

export default function Matricula() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<CreateMatricula />} />
        </div>
      </div>
  );
}