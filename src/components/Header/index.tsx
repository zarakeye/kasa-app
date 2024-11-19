import { NavLink } from 'react-router-dom'
import logo from '../../assets/pictures/logo.svg'
import style from './Header.module.scss'

const Header = (): JSX.Element => {
  return (
    <header className={style.header}>
      <div className={style.app_logo_container}>
        <img src={logo} className={style.app_logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">A propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header