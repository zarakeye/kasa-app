import Header from "../Header"
import './layout.scss'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  )
}

export default Layout