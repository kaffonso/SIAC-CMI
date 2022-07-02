import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import ShowRegistrations from "../../components/Section/ShowRegistrations";

import "./styles.css";

export default function Matricula() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<ShowRegistrations />} />
        </div>
      </div>
  );
}
