import './styles.css'
import image from '../../../img/profile.jpg'
import { useContext } from 'react'
import Context from '../../../services/context'

export default function Avatar() {
  const state = useContext(Context)

  const a = ''
  const name = a.concat(state.name, '').toUpperCase()
  const type = a.concat(state.type, '').toUpperCase()

  let info

  if (state.type === "Aluno") {
    info = 'avatar_info'
  } else{
    info = 'avatar_info_hidden'
  }

  return (
    <div className='avatar'>
      <div className="avatar_img">
        <img src={image} alt="" id='avatar-img'/>
      </div>
      <div className="avatar_name">
        <h2>{name}</h2>
      </div>
      <div className="avatar_type">
        <p>{type}</p>

      </div>
      <div className={info}>
        <div className="avatar_info__course">
          <p>{state.info.course} </p>
        </div>
        <div className="avatar_info__year">
          <p>{state.info.year} </p>
        </div>
        <div className="avatar_info__code">
          <p>{state.info.code} </p>
        </div>
      </div>
    </div>
  )
}