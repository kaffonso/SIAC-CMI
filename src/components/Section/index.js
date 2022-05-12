import Content from './Content'
import './index.css'

export default function Section(){
  return(
    <div className="section">
      <div className="banner">
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  )
}