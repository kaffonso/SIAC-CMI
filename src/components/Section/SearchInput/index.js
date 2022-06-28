import './styles.css'

export default function SearchInput(props){
  return(
    <div className="data_searchbar">
        <label htmlFor="PROCURAR">PROCURAR</label>
        <input
          type="text"
          id="searchbar_input"
          placeholder="Procurar"
          onChange={props.change}
          value={props.value}/>
        <input id="searchbar_btn" type="submit" onClick={props.click} value="Search"/>
      </div>
  )
}