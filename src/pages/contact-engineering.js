import React from "react"
import ContactPage from "../components/contactPage.js"
import ContactForm from "../components/contactForm.js"


export default function ContactElectrical(){
    return(
        <ContactPage title={"Contact Engineering"} body={"To enquire about our engineering services please fill out our contact form or get in touch through the information listed below and we'll get back to you as soon as possible. We also have a frequently asked questions page which may answer any support related questions."} links={"one"}>
             <ContactForm formEmail={""} infoTitle={"Engineering"} infoNumber={"07 843 1200"} infoContacts={[{name: "Paul Waterhouse", position: "Engineering Director & Consultant", email: "paul@centralaero.nz", phone: "027 743 033"}, {name: "Stephen Grainger", position: "Chief Engineer", email: "stephen@centralaero.nz", phone: "027 278 8765"}, {name: "Maureen Griffiths", position: "Office Administration", email: "maureen@centralaero.nz", phone: "027 743 033"}]}/>
        </ContactPage>
       
    )
}


// export const Head = () => <Seo title="Contact Engineering" />