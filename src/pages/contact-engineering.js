import React from "react"
import { graphql } from 'gatsby'
import ContactPage from "../components/contactPage.js"
import ContactForm from "../components/contactForm.js"


export default function ContactElectrical({data}){
    let phone = data.contact.nodes[0].engineering_phone;
    let engineering_contacts = data.engineering.nodes
    return(
        <ContactPage title={"Contact Engineering"} body={"To enquire about our engineering services please fill out our contact form or get in touch through the information listed below and we'll get back to you as soon as possible. We also have a frequently asked questions page which may answer any support related questions."} links={"one"}>
             <ContactForm formEmail={""} infoTitle={"Engineering"} infoNumber={phone} infoContacts={engineering_contacts}/>
        </ContactPage>
       
    )
}


// export const Head = () => <Seo title="Contact Engineering" />

export const pageQuery = graphql`
  query Contact{
        contact: allSanityContactPhoneNumbers{
            nodes {
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
    }
`