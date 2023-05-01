import * as React from "react"
import { Link } from "gatsby"

import Navbar from "../components/navbar"
import Footer from "../components/footer"


const Layout = ({ location, children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
