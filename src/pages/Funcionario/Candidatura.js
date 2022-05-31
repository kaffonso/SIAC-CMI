import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import Content from "../../components/Section/ShowData";
import data from "../../data.json";

import "./styles.css";
import Context from "../../services/context";

export default function Candidatura() {
  return (
    <Context.Provider value={data}>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<Content />} />
        </div>
      </div>
    </Context.Provider>
  );
}
