import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import CreateInscricao from '../../components/Section/CreateInscricao'

import "./styles.css";

export default function Inscricao() {
  return (
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<CreateInscricao />} />
        </div>
      </div>
  );
}
