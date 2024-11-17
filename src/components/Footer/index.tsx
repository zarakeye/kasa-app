import './footer.scss'
import logoWhite from '../../assets/pictures/logo_white.svg'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="logo-footer_container">
        <img src={logoWhite} alt="" />
      </div>
      <p className="copyright">© 2023 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer