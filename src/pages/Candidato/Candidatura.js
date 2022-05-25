import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import CreateData from "../../components/Section/CreateData";
import data from "../../data.json";

import "./styles.css";

export default function Candidatura() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar data={data} />
      </div>
      <div className="section">
        <Section children={<CreateData />}/>
      </div>
    </div>
  );
}