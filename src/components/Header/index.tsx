import { useLocation, NavLink, Link } from 'react-router-dom'
import logo from '../../assets/pictures/logo.svg'
import style from './Header.module.scss'
import { useEffect, useState } from 'react'

/**
 * Header component that renders a sticky navigation bar with a logo and links.
 * The active link is highlighted based on the current route using `useLocation`.
 * 
 * @returns JSX.Element - The header element with logo and navigation links.
 */
const Header = (): JSX.Element => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <header className={style.header}>
      <div className={style.app_logo_container}>
        <Link to="/">
          <img src={logo} className={style.app_logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={style.header_links}>
          <li><NavLink to="/" className={activeLink === '/' ? style.active : ''}>Accueil</NavLink></li>
          <li><NavLink to="/about" className={activeLink === '/about' ? style.active : ''}>À propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header