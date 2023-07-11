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
.form-div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #543C3C;
    height: 800px;
    background-image: url(${BackgroundImage});
    background-size: contain;
    background-position: center;
    background-filter: brightness(10%);
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
    width: 500px;
    h2 {
        margin: 0 0 20px 0;
        color: white;
        padding-bottom: 40px;
        border-bottom: 10px solid white;
    }
}
`

export default function ContactElectrical(){
  return (
    <Layout invert={true}>
        <ContactWrapper>
            <div className="intro-div">
                <h1>Contact Electrical</h1>
                <p>If you'd like to enquire about a specific part please use our shop parts form, we also have a frequently asked questions page which may answer any other questions. If not fill out our contact form or get in touch through the information listed below and we'll get back to you as soon as possible.</p>
                <div className="links">
                    <Link to="/faq">Frequently Asked Questions <i class="arrow right"/></Link>
                    <Link to="/shop-parts">Shop Parts<i class="arrow right"/></Link>
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
                    <h2><b>Electrical:</b> 07 843 2936</h2>
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

export const Head = () => <Seo title="Contact Electrical" />