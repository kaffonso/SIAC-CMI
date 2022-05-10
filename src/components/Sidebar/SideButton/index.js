import { useState } from "react"
import './styles.css'

export default function SideButton(props) { 
  const [status, setStatus] = useState(props.status)

  const handleClick = () => {
    console.log(status)

    if (status === 'innactive'){
      setStatus("active")
    }
  }

  return (
    <div className="button">
      <button className={status} onClick={handleClick}>
        {props.name}
      </button>
    </div>
  )
}