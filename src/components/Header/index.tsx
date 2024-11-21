import { useLocation, NavLink } from 'react-router-dom'
import logo from '../../assets/pictures/logo.svg'
import style from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = (): JSX.Element => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <header className={style.header}>
      <div className={style.app_logo_container}>
        <img src={logo} className={style.app_logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" className={activeLink === '/' ? style.active : ''}>Accueil</NavLink></li>
          <li><NavLink to="/about" className={activeLink === '/about' ? style.active : ''}>À propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header