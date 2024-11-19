import style from './Card.module.scss'

interface CardProps {
 flat: {
   id: string,
   title: string,
   cover: string
 }
}

const Card: React.FC<CardProps> = ({flat}): JSX.Element => {
  return (
    <>
      <article id={flat.id} className={style.thumb}>
        <img className={style.thumb_cover} src={flat.cover} alt={flat.title} />
        <h2 className={style.thumb_title}>{flat.title}</h2>
      </article>
    </>
  )
}

export default Card