import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";

export default function SideButton(props) {
  const [status, setStatus] = useState(props.status);

  const link = props.url.concat(props.title)
  console.log(link)

  const nav = useNavigate();

  return (
    <div className="button">
      <button
        className={status}
        onClick={() => {
          nav(link);
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
