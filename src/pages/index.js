import React from "react"
import Hero from '../components/index/hero.js'
import About from '../components/index/homepage-about.js'
import Engineering from '../components/index/engineering.js'
import Electrical from '../components/index/electrical.js'
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Index(){
  return (
    <Layout id="top">
        <Hero id="top"/>
        <About/>
        <Engineering/>
        <Electrical/>
    </Layout>
  )
}

export const Head = () => <Seo 
title="Central Aero | Aircraft Engineering & Electrical Parts" 
description="Providing quality Aircraft Engineering & Electrical services for over 17+ years. Starter Generators, Magnetos, Fuel Pumps etc - buy electrical parts new, exchange or overhaul."
/>


