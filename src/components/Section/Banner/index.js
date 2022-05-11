import './styles.css'
import image from '../../../img/banner.jpg'

export default function Banner(){
  return(
    <div className="banner">
      <img src={image} alt="" id='banner-img' />
    </div>
  )
}