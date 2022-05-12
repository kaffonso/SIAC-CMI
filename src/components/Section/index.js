import banner from '../../img/banner.jpg'
import './styles.css'

export default function Section() {
  return (
    <div className="section">
      <div className="banner">
        <img src={banner} alt="" id='banner-img' />
      </div>
      <div className="content">
        
      </div>
    </div>
  )
}