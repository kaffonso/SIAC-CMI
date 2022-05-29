import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import data from "../../data.json";

import "./styles.css";

export default function Inscricao() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar data={data} />
      </div>
      <div className="section">
        <Section />
      </div>
    </div>
  );
}
