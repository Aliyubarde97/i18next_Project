import { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Navigation from "../navigation/Navigation"

interface LayoutProfs{
    children:ReactNode
}

const Layout = ({children}:LayoutProfs) => {
  return (
    <div>
    <Navigation/>
      {children}
      <Footer/>
      
    </div>
  )
}

export default Layout
