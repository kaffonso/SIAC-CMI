import "../styles.css";
export default function Data(props) {
  const studentData = props.data.info.map((data) => {
    const space = ''
    const name = space.concat(data.nome,'').toUpperCase()
    const status = space.concat(data.estado,'').toUpperCase()

    return (
      <div className="data_element">
        <p className="box">{data.code}</p>
        <p className="box">{name}</p>
        <p className="box">{data.curso.siglaCurso}</p>
        <p className="box">{data.sexo}</p>
        <p className="box">{data.ilha.siglaIlha}</p>
        <p className="box">{status}</p>
      </div>
    );
  });
  return <div className="wrapper">{studentData}</div>;
}
