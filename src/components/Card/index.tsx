import './card.module.scss'

interface CardProps {
 location: {
   id: string,
   title: string,
   cover: string
 }
}

const Card: React.FC<CardProps> = ({location}): JSX.Element => {
  return (
    <>
      <article id={location.id} className="thumb">
        <img className="thumb_cover" src={location.cover} alt={location.title} />
        <h2 className="thumb_title">{location.title}</h2>
      </article>
    </>
  )
}

export default Card