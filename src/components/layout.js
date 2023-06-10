import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar"
import Footer from "../components/footer"


const Layout = ({ location, children, invert }) => {
  return (
    <div>
      <Navbar invert={invert}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
