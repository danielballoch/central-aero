import React from "react"
import { graphql } from 'gatsby'
import ContactPage from "../components/contactPage"
import ContactForm from "../components/contactForm"
import Seo from "../components/seo"

export default function ContactElectrical({data}){
    let phone = data.contact.nodes[0].electrical_phone;
    let electrical_contacts = data.electrical.nodes
    return (
        <ContactPage title={"Contact Electrical"} body={"If you'd like to enquire about a specific part please use our shop parts form, we also have a frequently asked questions page which may answer any other questions. If not fill out our contact form or get in touch through the information listed below and we'll get back to you as soon as possible."} links={"two"}>
            <ContactForm formEmail={"electrical@centralaero.nz"} infoTitle={"Electrical"} infoNumber={phone} infoContacts={electrical_contacts} />
        </ContactPage>
        
    )
}

export const pageQuery = graphql`
  query Contact{
        contact: allSanityContactPhoneNumbers{
            nodes {
                electrical_phone
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
title="Contact Electrical | Central Aero"
description="We stock a large range of new electrical components and also offer exchange/overhaul services. Get in touch today and we'll help find what you need.”"

 />