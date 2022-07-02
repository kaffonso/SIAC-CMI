import '../ShowCandidatures/styles.css'

export default function DataHeader(props){
  return(
    <div className="data_header">
      <p className="box">{props.one}</p>
      <p className="box">{props.two}</p>
      <p className="box">{props.three}</p>
      <p className="box">{props.four}</p>
      <p className="box">{props.five}</p>
      <p className="box">{props.six}</p>
  </div>
  )
}