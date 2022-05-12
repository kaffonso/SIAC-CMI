import Sidebar from "./components/Sidebar"
import Section from "./components/Section"

import './styles/index.css'

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="section">
        <Section />
      </div>
    </div>
  )
}