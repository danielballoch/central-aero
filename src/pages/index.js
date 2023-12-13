import React from "react"
import Hero from '../components/index/hero.js'
import About from '../components/index/homepage-about.js'
import Engineering from '../components/index/engineering.js'
import Electrical from '../components/index/electrical.js'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export default function Index({data}){
  console.log(data.allSanityHomepage.nodes[0])
  let sanity = data.allSanityHomepage.nodes[0]
  return (
    <Layout id="top">
        <Hero id="top" heroTitle={sanity.hero_title}/>
        <About introTitle={sanity.intro_title} introText={sanity.intro_text}/>
        <Engineering engineeringTitle={sanity.engineering_title} engineeringText={sanity.engineering_text}/>
        <Electrical electricalTitle={sanity.electrical_title} electricalText={sanity.electrical_text}/>
    </Layout>
  )
}

export const Head = () => <Seo 
title="Central Aero | Aircraft Engineering & Electrical Parts" 
description="Providing quality Aircraft Engineering & Electrical services for over 17+ years. Starter Generators, Magnetos, Fuel Pumps etc - buy electrical parts new, exchange or overhaul."
/>

export const pageQuery = graphql`
    query Homepage{
        allSanityHomepage {
            nodes {
                hero_title
                intro_title
                intro_text {
                  _type
                  style
                  children {
                    text
                    _type
                  }
                }
                engineering_title
                engineering_text {
                  _type
                  style
                  children {
                    text
                    _type
                  }
                }
                electrical_title
                electrical_text {
                  _type
                  style
                  children {
                    text
                    _type
                  }
                }
            }
        }
    }
`
