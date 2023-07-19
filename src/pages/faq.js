import React, {useRef, useEffect, useState} from "react"
import styled from "styled-components" 
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { Link } from "gatsby"


const Faq = styled.div`
margin: 100px auto;
height: auto;
color: black;
display: flex;
flex-direction: column;
font-family: 'Segoe UI';
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
}
.arrow {
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
                <h3 itemProp="name"><p>Q{i+1}: {question}<span className={toggle ? "arrow" : "arrow down"}/></p></h3>
                <div className={toggle ? "answer toggle" : "answer"}>
                    <p itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">{answer}</p>
                </div>
            </div>
        </ContentBox>
    )
} 

const FAQ = () => {

    const Questions = [
        {question: "What services does Central Aero Electrical offer?", answer: "Central Aero Electrical offer new components, part exchange, and overhaul services on a large range of components and aircrafts/manufactures, as well as parts advisory and custom orders. We also offer electrical systems repair and installation services. Whether you have a small fixed wing/touring plane to commercial passenger plane, helicopter and other aircraft we can help with all your electrical aviation needs."},
        {question: "What services does Central Aero Engineering offer?", answer: "Central Aero Engineering offer a large range of services laid out on our services page. Please head here for more info or call Paul on 022 123 456"},
        {question: "What's the turn around time for a component overhaul?", answer: ""},
        {question: "How long will an Engineering project take?", answer: ""},
        {question: "Is there a warranty on parts and repairs?", answer: "Majority of new parts sold are covered by the OEM warranty. See terms and conditions on an individual product baisis. Concerning repairs and overhauls - although Central Aero Electrical is not Factory Authorized by brands such as Champion, Hartzel, Safran etc. We do hold a Safran technical data and subscription agreement, have all mandatory brush holder alignment tooling requirements for Skurka Starter Generators, and offer our own 1 year warrenty on all products repaired or overhauled. See terms and conditions here."},
        {question: "Why should I work with Central Aero?",answer: ""},
        {question: "How does a component exchange work?",answer: ""},
        {question: "Is Central Aero Certified?",answer: "Yes. Central Aero Electrical is a CAANZ Part 145 Approved Repair and Overhaul Facility. Central Aero Engineering holds an number of certifications including Part 43 organisation with capability on Group 1 and Group 2 Fixed Wing Aircraft, Group 1 and Group 2 Helicopters, Certificate of Airworthiness issue, Maintenance Control Services and more."},
        {question: "How can I get in touch?",answer: ""},
    ] 

    return(
        <Layout invert={true}>
            <div style={{ display: "grid"}} id="homeSection">
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

// export const Head = () => <Seo title="Frequently Asked Questions | Central Aero" />