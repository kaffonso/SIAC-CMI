import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import data from "../../data.json";
import NotImplemented from "../NotImplemented";

import "./styles.css";

export default function Inscricao() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar data={data} />
      </div>
      <div className="section">
        <Section children={<NotImplemented />}/>
      </div>
    </div>
  );
}
