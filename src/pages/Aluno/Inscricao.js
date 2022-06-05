import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import NotImplemented from "../NotImplemented";

import "./styles.css";

export default function Inscricao() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<NotImplemented />} />
        </div>
      </div>
  );
}
