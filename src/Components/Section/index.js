import Banner from "./Banner"
import Content from './Content'
import './index.css'

export default function Section(){
  return(
    <div className="section">
      <div className="banner">
        <Banner />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  )
}