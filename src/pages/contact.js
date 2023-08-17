import React from "react"
import { graphql } from 'gatsby'
import ContactPage from "../components/contactPage.js"
import ContactForm from "../components/contactForm.js"
import Seo from "../components/seo"

export default function Contact({data}){
    console.log(data)
    let phones = data.contact.nodes[0]
    let electrical_contacts = data.electrical.nodes
    let engineering_contacts = data.engineering.nodes
    return(
        <ContactPage title={"Contact Us"} body={"To enquire about our electrical or engineering services please use the relevant contact form or information listed and we'll get back to you as soon as possible. We also have a frequently asked questions page which may answer any support related questions."} links={"two"}>
             <ContactForm title="Contact Engineering" formEmail={""} infoTitle={"Phone :"} infoNumber={phones.engineering_phone} infoContacts={engineering_contacts}/>
             <ContactForm title="Contact Electrical" formEmail={"electrical@centralaero.nz"} infoTitle={"Phone :"} infoNumber={phones.electrical_phone} infoContacts={electrical_contacts} />
        </ContactPage>
    )
}

export const pageQuery = graphql`
  query Contact{
        contact: allSanityContactPhoneNumbers{
            nodes {
                electrical_phone
                engineering_phone
            }
        }
        engineering: allSanityContactPeople(filter: {department: {eq:"engineering"}}){
            nodes {
                name
                title
                phone
                email
            }
        }
        electrical: allSanityContactPeople(filter: {department: {eq:"electrical"}}){
            nodes {
                name
                title
                phone
                email
            }
        }
    }
`

export const Head = () => <Seo 
title="Contact Us for all Aircraft Electrical & Engineering needs" 
description="Contact us today to discuss all you Electrical & Engineering aviation needs and we'll help make sure your aircraft is flying fast, efficiently, and safely. "
/>