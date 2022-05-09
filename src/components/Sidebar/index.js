import Avatar from '../Avatar'
import SideButtons from '../SideButtons'
import Footer from '../Footer'
import data from '../../data.json'

import './index.css'

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="avatar">
        <Avatar data={data} />
      </div>
      <div className="options">
        <SideButtons />

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}