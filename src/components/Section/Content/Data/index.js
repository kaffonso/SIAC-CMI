import "../styles.css";
export default function Data(props) {
  const studentData = props.data.info.map((data) => {
    const name = data.nome.split(" ");

    return (
      <div className="data">
        <div className="box"> {data.code}</div>
        <div className="box">
          {name[0]} {name[1]} {name[name.length - 1]}
        </div>
        <div className="box">{data.curso.siglaCurso}</div>
        <div className="box">{data.sexo}</div>
        <div className="box">{data.ilha.siglaIlha}</div>
        <div className="box">{data.estado}</div>
      </div>
    );
  });
  return <div className="wrapper">{studentData}</div>;
}
