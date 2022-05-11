import Avatar from './Avatar'
import SideButton from './SideButton'
import logo from '../../img/logo.png'
import data from '../../data.json'

import './styles.css'

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="avatar">
        <Avatar data={data} />
      </div>
      <div className="options">
        <div className="sidebuttons">
          <SideButton name="CANDIDATURA" status="active" />
          <SideButton name="MATRICULA" status="innactive" />
          <SideButton name="INSCRIÇÃO" status="innactive" />
        </div>
      </div>
      <div className="footer">
        <div className="footer">
          <img src={logo} alt="" id='footer-img' />
        </div>
      </div>
    </div>
  )
}