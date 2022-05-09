import './index.css'

export default function SideButton(props) { 
  return (
    <div className="button">
      <button className={props.status}>
        {props.name}
      </button>
    </div>
  )
}