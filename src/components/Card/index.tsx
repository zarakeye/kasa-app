import { Link } from 'react-router-dom'
import style from './Card.module.scss'
import { Flat } from '../../hooks/useFlatsData'

interface CardProps {
 flat: Flat,
}


const Card: React.FC<CardProps> = ({flat}): JSX.Element => {
  return (
    <>
      <Link 
        to={`/flat/${flat.id}`}
        key={flat.id}
      >
        <article id={flat.id} className={style.thumb}>
          <img className={style.thumb_cover} src={flat.cover} alt={flat.title} />
          <h2 className={style.thumb_title}>{flat.title}</h2>
        </article>
      </Link>
    </>
  )
}

export default Card

