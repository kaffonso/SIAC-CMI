import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import data from "../../data.json";
import NotImplemented from "../NotImplemented";

import "./styles.css";
import Context from "../../services/context";

export default function Inscricao() {
  return (
    <Context.Provider value={data}>
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="section">
          <Section children={<NotImplemented />} />
        </div>
      </div>
    </Context.Provider>
  );
}
