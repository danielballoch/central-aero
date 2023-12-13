import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'
import { graphql } from "gatsby"
import {PortableText} from '@portabletext/react'

const Wrapper = styled.div`
/* padding-top: 200px; */
padding: 200px 20px 100px 20px;
font-family: 'segoe ui';
margin: auto;
max-width: 900px;
.button-div {
    .button2 {
        margin-left: 40px;
    }
}
.button1 { 
    width: fit-content;
    padding: 10px 20px;
    /* height: 60px; */
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    background-color: black;
    color: white;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    :hover {
        cursor: pointer;
    }
}
.button2{
    width: fit-content;
    padding: 10px 20px;
    /* height: 60px; */
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    background-color: white;
    color: black;
    :hover {
        cursor: pointer;
        color: white;
        background-color: black;
    }
}
@media(max-width: 500px){
    .button-div {
        display: flex;
        flex-direction: column;
        .button2 {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
`

export default function TermsAndConditions({data}){
    console.log(data)
    let content = data.allSanityTermsAndConditions.nodes[0].terms_and_conditions_text
  return (
    <Layout invert="true">
        <Wrapper id="top">
            <PortableText value={content}/>
        </Wrapper>      
    </Layout>
  )
}

export const Head = () => <Seo 
title="Terms And Conditions | Central Aero" 
description="Read through our terms and conditions for information on our aircraft engineering and electrical component Warranties, product information, Privacy Policy, etc"    
/>


export const pageQuery = graphql`
    query Terms{
        allSanityTermsAndConditions {
            nodes {
                terms_and_conditions_text {
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
