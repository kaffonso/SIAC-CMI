import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import CreateCandidatura from "../../components/Section/CreateCandidatura";

import "./styles.css";

export default function Candidatura() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<CreateCandidatura />} />
        </div>
      </div>
  );
}