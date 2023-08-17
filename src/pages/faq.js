import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components" 
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { Link,graphql } from "gatsby"
import Seo from "../components/seo"


const Faq = styled.div`
margin: 100px auto;
height: auto;
color: black;
display: flex;
flex-direction: column;
h1 {
        font-size: 40px;
        font-weight: 500;
        color: #333;
        padding-bottom: 10px;
        border-bottom: 3px solid #333;
        margin-bottom: 40px;
        margin-top: 80px;
}
.subheading {
    max-width: 800px;
}
div {
    :hover {
        cursor: pointer ;
    }
}
.toggle {
    max-height: 0px !important;
    padding: 0 40px;
    /* background-color: #f8f8f8; */
    overflow: hidden;
}
.answer {
    transition: max-height 200ms ease-in-out 0s;
    overflow: hidden;
    padding: 0 10px;
    margin: 10px 0;
    max-height: 300px;
    /* background-color: #f8f8f8; */
}
@media(max-width: 940px){
    width: 80%;
    margin: 100px auto auto;
}
`
const ContentBox = styled.div`
width: 800px;
display: flex;
flex-direction: row;
margin-bottom: 10px;
/* border-radius: 10px; */
color: black;
img {
    border-radius: 2px;
}
div {
    transition: .3s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
h3 {
    font-size: 20px;
    margin: 0;
    font-weight: 400;
}
p {
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: space-between;
    /* align-items: center; */
    align-items: start;
}
.arrow {
  margin-top: 14px;
  transition: .2s;
  height: 3px;
  width: 3px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
@media(max-width: 1000px){
    flex-direction: column;
    div {
        width: auto;
    }
}
@media(max-width: 940px){
    width: 100%;
}
`



const Content = ({question, answer,i}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <ContentBox itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" onClick={() => {setToggle(!toggle)}}>
            <div key={"question " + i}>
                <h3 itemProp="name"><p>{question}<span className={toggle ? "arrow" : "arrow down"}/></p></h3>
                <div className={toggle ? "answer toggle" : "answer"}>
                    <p itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">{answer}</p>
                </div>
            </div>
        </ContentBox>
    )
} 

const FAQ = (data) => {
    console.log(data.data.allSanityFaq)
    let Questions = data.data.allSanityFaq.nodes;
    return(
        <Layout invert={true}>
            <div style={{ display: "grid"}} id="top" >
            <div
                style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    }}
                >
                <div>
                
                <Faq itemScope itemType="https://schema.org/FAQPage">
                <h1>Frequently Asked Questions</h1>
                <p className="subheading">Here's some answers to common questions we get at Central Aero. If you're still unsure of something give us a call or contact us via the <Link to="/contact-electrical">Contact Electrical</Link> or <Link to="/contact-engineering">Contact Engineering</Link> pages and we'll be in touch to help with your aviation needs, as soon as possible.</p>  
                {Questions.map((question, i) => (
                    <Content question={question.question} answer={question.answer} i={i}/>
                ))}
                </Faq>

                </div>
            </div>
        </div>
        </Layout>
    )
}

export default FAQ;

export const Head = () => <Seo 
title="Frequently Asked Questions | Central Aero"
description="Discover answers to your most common questions about aircraft engineering and electrical systems we get at Central Aero's FAQ page. Clear explanations and insights from experts in Hamilton, New Zealand, providing valuable information for aviation enthusiasts, professionals, and curious minds alike." 
/>

export const pageQuery = graphql`
    query FAQ{
        allSanityFaq {
            nodes {
                question
                answer
            }
        }
    }
`