import style from './Footer.module.scss'
import logoWhite from '../../assets/pictures/logo_white.svg'

const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_logo_container}>
        <img src={logoWhite} alt="" />
      </div>
      <p className={style.footer_copyright}>© 2023 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer