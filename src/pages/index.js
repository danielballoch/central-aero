import React from "react"
import Hero from '../components/index/hero.js'
import About from '../components/index/homepage-about.js'
import Engineering from '../components/index/engineering.js'
import Electrical from '../components/index/electrical.js'
import Contact from '../components/index/contact.js'


import Layout from "../components/layout"
// import Seo from "../components/seo"

export default function Index(){
  return (
    <Layout>
        <Hero/>
        <About/>
        <Engineering/>
        <Electrical/>
        {/* <Contact/> */}
    </Layout>
  )
}

// export const Head = () => <Seo title="Homepage" />


