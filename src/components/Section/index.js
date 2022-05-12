import banner from '../../img/banner.jpg'
import Content from '../Section/Content'

import './styles.css'

export default function Section() {
  return (
    <div className="section">
      <div className="banner">
        <img src={banner} alt="" id='banner-img' />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  )
}