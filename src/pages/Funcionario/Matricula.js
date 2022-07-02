import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import ShowCandidatures from "../../components/Section/ShowCandidatures";

import "./styles.css";

export default function Matricula() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<ShowCandidatures />} />
        </div>
      </div>
  );
}
