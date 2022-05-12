import './styles.css'
import logo from '../../../img/logo.png'

export default function Footer(){
  return(
    <div className="footer">
      <img src={logo} alt="" id='footer-img'/>
    </div>
  )
}