import React from "react"
import ContactPage from "../components/contactPage"
import ContactForm from "../components/contactForm"

export default function ContactElectrical(){
    return (
        <ContactPage title={"Contact Electrical"} body={"If you'd like to enquire about a specific part please use our shop parts form, we also have a frequently asked questions page which may answer any other questions. If not fill out our contact form or get in touch through the information listed below and we'll get back to you as soon as possible."} links={"two"}>
            <ContactForm formEmail={"electrical@centralaero.nz"} infoTitle={"Electrical"} infoNumber={"07 843 2936"} infoContacts={[{name: "Hamish Ross", position: "Electrical Director & Engineer", email: "hamish@centralaero.nz", phone: "027 4939975"}]} />
        </ContactPage>
        
    )
}