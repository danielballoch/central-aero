import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrapper = styled.div`
padding-top: 200px;
display: flex;
flex-direction: column;
max-width: 1000px;
margin: auto;
`

const NotFoundPage = ({ data, location}) => {
  const siteTitle = data.site.siteMetadata.title
    console.log(data)
  return (
    <Layout location={location} title={siteTitle} invert={true}>
        <Wrapper>
            <h1>404: Page Not Found</h1>
            <p>Sorry, it looks like you've hit a route that doesn&#39;t exist.</p>
            <p>Please navigate to another page or contact us today on {data.contact.nodes[0].electrical_phone}.</p>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => <Seo 
title="404: Page Not Found | Central Aero" 
description="Lost in the clouds? Our apologies, but it seems the page you're looking for isn't on the radar. Navigate back to safety with Central Aero's 404 page, guiding you back to our aviation expertise and services in Hamilton, New Zealand."

/>

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    contact: allSanityContactPhoneNumbers{
        nodes {
            electrical_phone
        }
    }
  }
`