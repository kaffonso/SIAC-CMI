import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import Content from "../../components/Section/ShowData";

import "./styles.css";

export default function Inscricao() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<Content />} />
        </div>
      </div>
  );
}
