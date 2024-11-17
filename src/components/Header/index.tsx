import { NavLink } from 'react-router-dom'
import logo from '../../assets/pictures/logo.svg'
import './header.scss'

const Header = (): JSX.Element => {
  return (
    <header>
      <div className='app-logo_container'>
        <img src={logo} className="app-logo" alt="logo" />
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