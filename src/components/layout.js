import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from "../components/navbar"
import Footer from "../components/footer"


const Layout = ({ location, children, invert }) => {
  const data = useStaticQuery(graphql`
  query {
        contact: allSanityContactPhoneNumbers{
            nodes {
                electrical_phone
                engineering_phone
            }
        }
    }`
  )
  let phones = data.contact.nodes[0]
  return (
    <div>
      <Navbar invert={invert} phones={phones}/>
      <main>{children}</main>
      <Footer phones={phones}/>
    </div>
  )
}

export default Layout