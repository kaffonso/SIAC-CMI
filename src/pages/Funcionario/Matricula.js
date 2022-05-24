import Sidebar from "../../components/Sidebar";
import data from "../../data.json";

import "./styles.css";

export default function Matricula() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar data={data} />
      </div>
    </div>
  );
}
