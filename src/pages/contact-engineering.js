import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

const ContactWrapper = styled.div`
padding-top: 200px;
display: flex;
flex-direction: column;
font-family: 'segoe ui';
.intro-div {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    h1 {
        font-size: 60px;
        color: #333;
    }
    p {
        max-width: 750px;
    }
    a {
        border: solid 1px black;
        padding: 14px;
        margin-right: 20px;
        :hover {
            cursor: pointer;
        }
    }
}
.form-div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #543C3C;
    height: 800px;
}
form {
    width: 600px;
    height: 500px;
    background-color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
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
.button-div {
        height: 50px;
        margin-bottom: 50px;
        a {
            color: black;
            box-sizing: border-box;
        }
    }
.info-div {
    margin-left: 40px;
    color: white;
    h2 {
        margin: 0 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
    
    .engineering-team {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;

        div {
            max-width: 200px;
            margin-right: 20px;
        }
    }
}
`

export default function ContactElectrical(){
  return (
    <Layout invert={true}>
        <ContactWrapper>
            <div className="intro-div">
                <h1>Contact Engineering</h1>
                <p>To enquire about our engineering services please fill out our contact form or get in touch through the information listed below and we'll get back to you as soon as possible. We also have a frequently asked questions page which may answer any support related questions.</p>
                <div className="button-div">
                    <Link>Frequently Asked Questions</Link>
                </div>
            </div>
            <div className="form-div">
                <form>
                    <label>Name:</label><input type="text"></input>
                    <label>Email:</label><input type="text"></input>
                    <label>Phone:</label><input type="text"></input>
                    <label>Message:</label><textarea></textarea>
                    <button>Send Message</button>
                </form>
                <div className="info-div">
                    <h2><b>Engineering:</b> 07 843 1200</h2>
                    <div className="engineering-team">
                        <div>
                            <p><b>Paul Waterhouse</b><br/>Engineering Director & Consultant <br/> paul@centralaero.nz<br/>027 743 033</p>
                        </div>
                        <div>
                            <p><b>Stephen Grainger</b><br/>Chief Engineer<br/> stephen@centralaero.nz<br/>027 278 8765</p>
                        </div>
                        <div>
                            <p><b>Maureen Griffiths</b><br/>Office Administration <br/> maureen@centralaero.nz<br/>027 743 033</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContactWrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Engineering | Central Aero" />