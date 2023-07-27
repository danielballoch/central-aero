import React from "react"
import Layout from "./layout"
// import Seo from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

const ContactWrapper = styled.div`
padding-top: 200px;
display: flex;
flex-direction: column;
/* font-family: 'Helvetica'; */
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
.button-div {
        height: 50px;
        margin-bottom: 50px;
        a {
            color: black;
            box-sizing: border-box;
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
    .intro-div {
        padding: 20px;
    }
}
@media(max-width:763px){
    h1 {
        font-size: 60px!important;
    }
    .links {
        display: flex;
        flex-direction: column;
        a {
            /* white-space: nowrap; */
            font-size: 22px!important;
            margin-right: 0!important;
            i {
                margin-left: 10px!important;
                margin-right: 0!important;
                transform: rotate(-45deg) scale(.8)!important;
            }
            @media(max-width:364px){
                font-size: 18px!important;
                i {
                    margin-left: 10px!important;
                }
            }
        }
        a:nth-of-type(2){
            margin-top: 20px;
        }
        
    }
}
@media(max-width:600px){
    .info-div {
        width: 100vw;
        padding: 20px;
    }
}
`

export default function ContactElectrical({title, body, links, children}){
  return (
    <Layout invert={true}>
        <ContactWrapper>
            <div className="intro-div">
                <h1>{title}</h1>
                <p>{body}</p>
                {links === "two" ? 
                <div className="links">
                    <Link to="/faq">Frequently Asked Questions <i class="arrow right"/></Link>
                    <Link to="/shop-parts">Shop Parts<i class="arrow right"/></Link>
                </div>
                :
                <div className="links">
                    <Link to="/faq">Frequently Asked Questions <i class="arrow right"/></Link>
                </div>
                }
                
            </div>
            {children}
        </ContactWrapper>
    </Layout>
  )
}