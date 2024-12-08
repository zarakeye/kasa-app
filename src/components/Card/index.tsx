import { Link } from 'react-router-dom'
import style from './Card.module.scss'
import { Flat } from '../../hooks/useFlatsData'

interface CardProps {
 flat: Flat,
}

/**
 * Card component that displays a thumbnail of a flat with a cover image and title.
 * Wraps the content in a link to the flat's details page.
 *
 * @param {CardProps} props - The properties of the component.
 * @param {Flat} props.flat - The flat data to be displayed, including id, cover image, and title.
 * @returns {JSX.Element} - A React element that renders the card.
 */
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

