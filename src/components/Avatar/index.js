import './index.css'

export default function Avatar(props) {

  const a = ''
  const name = a.concat(props.data.name, '').toUpperCase()
  const type = a.concat(props.data.type, '').toUpperCase()

  return (
    <div className='avatar'>
      <div className="avatar_img">
        <img src="" alt="" />
      </div>
      <div className="avatar_name">
        <h2>{name}</h2>
      </div>
      <div className="avatar_type">
        <p>{type}</p>

      </div>
      <div className="avatar_info">
        <div className="avatar_info__course">
          <p>{props.data.info.course} </p>
        </div>
        <div className="avatar_info__year">
          <p>{props.data.info.year} </p>
        </div>
        <div className="avatar_info__code">
          <p>{props.data.info.code} </p>
        </div>
      </div>
    </div>
  )
}