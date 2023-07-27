import React from "react"
import styled from "styled-components"
import BackgroundImage from "../images/engineering-images/Hero2Dark.png"

const FormDiv = styled.div`
padding: 100px 0;
display: flex;
justify-content: center;
align-items: center;
background-color: #543C3C;
/* height: 800px; */
background-image: url(${BackgroundImage});
background-size: contain;
background-position: center;
background-filter: brightness(10%);
form {
    width: 600px;
    min-height: 500px;
    height: 100%;
    max-height: 800px;
    background-color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    h2 {
        margin-top: 0;
    }
    label {
        margin-top: 10px;
        margin-bottom: 2px;
    }
    input,textarea {
        font-size: 16px;
        padding: 5px;
    }
    textarea {
        max-width: 100%;
        height: 100px;
    }
    button {
        margin-top: 20px;
        padding: 10px 20px;
        /* height: 60px; */
        border-radius: 8px;
        font-weight: 600;
        border: 3px solid black;
        background-color: black;
        color: white;
        text-decoration: none;
        transition: .3s;
        :hover {
            cursor: pointer;
            
        }
    }
}
.info-div {
    align-self: center;
    margin-left: 40px;
    color: white;
    width: 500px;
    h2 {
        margin: 0 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
    .contacts-div {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;

        div {
            max-width: 200px;
            margin-right: 20px;
        }
    }
}
@media(max-width:1200px){
    flex-direction: column;
    .info-div {
        margin-left: 0;
        padding: 20px;
        h2 {
            margin: 40px 0px 20px;
        }
    }

}
@media(max-width:763px){
    h1 {
        font-size: 60px!important;
    }
}
@media(max-width:600px){
    form {
        max-width: 600px!important;
        width: 100vw!important;
        padding: 40px!important;
    }
    .info-div {
        width: 100vw;
        padding: 20px;
    }
}
@media(max-width:380px){
    form {
        h2 {
            font-size: 28px; 
        }
    }
}
`

export default function ContactElectrical({formEmail,title, infoTitle, infoNumber, infoContacts}){
  return (
            <FormDiv>
                <form>
                    <h2>{title}</h2>
                    <label>Name:</label><input type="text"></input>
                    <label>Email:</label><input type="text"></input>
                    <label>Phone:</label><input type="text"></input>
                    <label>Message:</label><textarea></textarea>
                    <button>Send Message</button>
                </form>
                <div className="info-div">
                    <h2><b>{infoTitle}</b> {infoNumber}</h2>
                    <div className="contacts-div">
                        {infoContacts.map(contact => (
                            <div>
                            <p><b>{contact.name}</b><br/>{contact.position}<br/>{contact.email}<br/>{contact.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FormDiv>
  )
}