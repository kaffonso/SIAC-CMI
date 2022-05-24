import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import Content from "../../components/Section/Content";
import data from "../../data.json";

import "./styles.css";

export default function Candidatura() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar data={data} />
      </div>
      <div className="section">
        <Section children={<Content />} />
      </div>
    </div>
  );
}