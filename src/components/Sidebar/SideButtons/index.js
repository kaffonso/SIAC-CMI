import SideButton from "../SideButton"
import './styles.css'
export default function SideButtons() {
  return (
    <div className="sidebuttons">
      <SideButton name="CANDIDATURA" status="active" />
      <SideButton name="MATRICULA" status="innactive" />
      <SideButton name="INSCRIÇÃO" status="innactive" />
    </div>
  )
}