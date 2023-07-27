import React from "react"
import ContactPage from "../components/contactPage.js"
import ContactForm from "../components/contactForm.js"



export default function Contact(){
    return(
        <ContactPage title={"Contact Us"} body={"To enquire about our electrical or engineering services please use the relevant contact form or information listed and we'll get back to you as soon as possible. We also have a frequently asked questions page which may answer any support related questions."} links={"two"}>
             <ContactForm title="Contact Engineering" formEmail={""} infoTitle={"Phone :"} infoNumber={"07 843 1200"} infoContacts={[{name: "Paul Waterhouse", position: "Engineering Director & Consultant", email: "paul@centralaero.nz", phone: "027 743 033"}, {name: "Stephen Grainger", position: "Chief Engineer", email: "stephen@centralaero.nz", phone: "027 278 8765"}, {name: "Maureen Griffiths", position: "Office Administration", email: "maureen@centralaero.nz", phone: "027 743 033"}]}/>
             <ContactForm title="Contact Electrical" formEmail={"electrical@centralaero.nz"} infoTitle={"Phone :"} infoNumber={"07 843 2936"} infoContacts={[{name: "Hamish Ross", position: "Electrical Director & Engineer", email: "hamish@centralaero.nz", phone: "027 4939975"}]} />
        </ContactPage>
    )
}
