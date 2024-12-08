import style from './Footer.module.scss'
import logoWhite from '../../assets/pictures/logo_white.svg'

/**
 * Footer component for the Kasa app.
 *
 * The footer contains the Kasa logo and the copyright notice.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_logo_container}>
        <img src={logoWhite} alt="" />
      </div>
      <p className={style.footer_copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer