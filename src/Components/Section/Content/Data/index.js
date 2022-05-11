import '../style.css'
export default function Data(props) {
    const name = (props.data.nome).split(" ");

  return (
    <div className="wrapper containerBox">
      <div className="box">{name[0]} {name[name.length-1]}</div>
      <div className="box">{props.data.curso.siglaCurso}</div>
      <div className="box">{props.data.sexo}</div>
      <div className="box">{props.data.ilha.siglaIlha}</div>
      <div className="box">{props.data.estado}</div>
    </div>
  );
}
