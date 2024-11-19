import style from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={style.layout}>
      <main className={style.main}>{children}</main>
    </div>
  )
}

export default Layout