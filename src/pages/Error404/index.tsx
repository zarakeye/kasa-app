import { Link } from "react-router-dom"
import style from './Error404.module.scss'

interface Error404Props {
  message: string
}

/**
 * A 404 error page component, to be used when a page is not found.
 *
 * @prop {string} message - The message to be displayed on the 404 error page.
 *
 * @returns {JSX.Element} A 404 error page.
 */
const Error404: React.FC<Error404Props> = ({message}): JSX.Element => {
  return (
    <div className={style.error404}>
      <h1 className={style.error404_title}>404</h1>
      <p className={style.error404_text}>{message}</p>
      <Link to="/" className={style.error404_linkToHome}>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error404