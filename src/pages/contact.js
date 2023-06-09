import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "../images/engineering-images/Hero2Dark.png"

const ContactWrapper = styled.div`
padding-top: 200px;
display: flex;
flex-direction: column;
font-family: 'Helvetica';
div:nth-of-type(2){
    padding-top: 100px;
    padding-bottom: 25px;
}
div:nth-of-type(3){
    padding-top: 25px;
    padding-bottom: 100px;
}
.intro-div {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    h1 {
         /* margin-top: 10px; */
         margin-bottom: 20px;
        margin-left: -2px!important;
        font-size: 70px;
        font-weight: 700;
        /* font-size: 60px; */
        color: #333;
    }
    p {
        max-width: 800px;
        font-size: 18px;
    }
    a {
        margin-right: 20px;
        :hover {
            cursor: pointer;
        }
    }
    .links {
        background-color: rgba(0,0,0,0);
        margin-bottom: 100px;
        a {
            font-size: 26px;
            /* color: #333; */
            color: #333;
            margin-right: 20px;
            background-color: rgba(0,0,0,0);
            transition: .3s;
            text-decoration: none;
            /* border-bottom: 3px solid rgba(255,255,255,0); */
            :hover {
                /* border-bottom: 3px solid white; */
                /* color: #fde027; */
                cursor: pointer;
                .arrow {
                    /* border-color: #fde027; */
                    margin-left: 24px;
                    margin-right: 76px;
                }
            }
        }
         
    }
    .arrow {
    transition: .3s;
    border: solid black;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 8px;
    margin-right: 80px;
    margin-left: 20px;
    }
    .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    }
}
}
.form-div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #543C3C;
    /* height: 800px; */
    background-image: url(${BackgroundImage});
    background-size: contain;
    background-position: center;
    background-filter: brightness(10%);
}
form {
    width: 600px;
    min-height: 550px;
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
.button-div {
        height: 50px;
        margin-bottom: 50px;
        a {
            color: black;
            box-sizing: border-box;
        }
    }
.info-div {
    width: 500px;
    height: fit-content;
    margin-left: 40px;
    color: white;
    h2 {
        margin: 40px 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
    
    .engineering-team {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;

        div {
            padding-top: 0;
            padding-bottom: 0;
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
                <h1>Contact Us</h1>
                <p>To enquire about our electrical or engineering services please use the relevant contact form or information listed and we'll get back to you as soon as possible. We also have a frequently asked questions page which may answer any support related questions.</p>
                <div className="links">
                    <Link to="/faq">Frequently Asked Questions <i class="arrow right"/></Link>
                    <Link to="/shop-parts">Shop Parts<i class="arrow right"/></Link>
                </div>
            </div>
            <div className="form-div">
                <form>
                    <h2>Contact Engineering</h2>
                    <label>Name:</label><input type="text"></input>
                    <label>Email:</label><input type="text"></input>
                    <label>Phone:</label><input type="text"></input>
                    <label>Message:</label><textarea></textarea>
                    <button>Send Message</button>
                </form>
                <div className="info-div">
                    <h2><b>Phone:</b> 07 843 1200</h2>
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
            <div className="form-div">
                <form>
                    <h2>Contact Electrical</h2>
                    <label>Name:</label><input type="text"></input>
                    <label>Email:</label><input type="text"></input>
                    <label>Phone:</label><input type="text"></input>
                    <label>Message:</label><textarea></textarea>
                    <button>Send Message</button>
                </form>
                <div className="info-div">
                    <h2><b>Phone:</b> 07 843 2936</h2>
                    <div>
                        <div>
                            <p><b>Hamish Ross</b><br/>Electrical Director & Engineer <br/> hamish@centralaero.nz<br/>027 4939975</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </ContactWrapper>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />