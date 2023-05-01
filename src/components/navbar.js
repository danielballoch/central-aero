import React from 'react'
import styled from "styled-components"
import Logo from "../images/CentralAeroTextOnlyLogo.png"
import {Link} from "gatsby"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const NavWrapper = styled.div`
position: absolute;
display: flex;
width: 100%;
/* margin-left: 306px; */
z-index: 300;
background-color: rgba(255,255,255, 0);
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 140px;
img {
    margin-left: -148px;
    height: 50px;
    /* margin-right: 40px; */
}
a {
    font-family: Helvetica;
    padding: 10px;
    color: white;
    text-decoration: none;
    margin-left: -100px;
}
`

export default function Nav(){
    return (
        <NavWrapper>
            <img src={Logo}/>
            <div>
                {/* <Search indices={searchIndices}/> */}
                {/* <Link to="/">HOME</Link>
                <Link to="/">ENGINEERING</Link>
                <Link to="/electrical">ELECTRICAL</Link>
                <Link to="/">GALLERY</Link> 
                <Link to="/">CONTACT</Link> */}
                
            </div>
        </NavWrapper>
    )
}