import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import CreateCandidatura from "../../components/Section/CreateCandidatura";
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
          <Section children={<CreateCandidatura />} />
        </div>
      </div>
    </Context.Provider>
  );
}