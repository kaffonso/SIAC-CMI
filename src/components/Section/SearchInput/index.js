import './styles.css'
import { BsSearch } from 'react-icons/bs'

export default function SearchInput(props){
  return(
    <div className="data_searchbar">
        <input
          type="text"
          id="searchbar_input"
          placeholder="Procurar"
          onChange={props.change}
          value={props.value}/>
        <button id="searchbar_btn" onClick={props.click} type="submit"> {<BsSearch size={15}/>} </button>
      </div>
  )
}