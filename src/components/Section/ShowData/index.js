import "./styles.css";
import Data from "./Data";
import data from "./Data.json";

export default function Content() {
  return (
    <div className="data_student">
      <div className="data_container">
        <Data data={data} />
      </div>
    </div>
  );
}
