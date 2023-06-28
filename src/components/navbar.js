import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Logo from "../images/CentralAeroTextOnlyLogo.png"
import InvertLogo from "../images/CentralAeroTextOnlyLogoBlack.png"
import MenuImage from "../images/aircrafts/central-aero-helicopter.jpg"
import FB from '../images/facebook-logo.png'
import { Link } from "gatsby"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]


const Navbar = styled.div`
position: fixed;
width: 100%;
z-index: 500;
.menu {
    /* transition: .3s; */
transition: transform .3s;
opacity: 0;
font-family: 'segoe ui';
transform: translateX(100%);
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: black;
z-index: 100;
/* opacity: 1; */

display: flex;
flex-direction: column;
justify-content: center;
.menu-content {
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: center;
    align-items: space-around;
}
.menu-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    a {
        transition: .3s;
        color: white;
        font-size: 60px;
        margin-left: 380px;
        padding: 5px;
        z-index: 200;
        text-decoration: none;
        text-transform: uppercase;
        width: fit-content;
    }
}
.menu-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    a {
        color: white;
    }
    .contact {
        font-size: 30px;
    }
    .address {
        font-size: 20px;
        margin-top: 10px;
    }
    img {
        width: 60%;
        height: 300px;
        margin: 30px 0;
        background-color: lightgrey;
        filter: grayscale(100%);
        border-radius: 2px;
        object-fit: cover;
        object-position: 50% 50%;
    }
}
.lower-menu {
    position: absolute;
    display: flex;
    bottom: 10px;
    left: calc(50% - 300px);
    margin: 0 auto;
    a {
        color: white;
        text-decoration: none;
        margin: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        height: 20px;
        margin-left: 10px;
    }
}


}
.menu-open {
transition: opacity .3s;
opacity: 1;
transform: translateX(0);
background-color: rgba(0,0,0,0.6);
backdrop-filter: blur(18px);
}


.NavBar {
    z-index: 300;
    position: fixed;
    transform: translateY(-100px);
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: .3s;
}
.Scroll {
    transform: translateY(0);
    @media(min-width: 900px){
        background-color: rgba(255,255,255,0.98);
    }
}
.Initial {
    background-color: rgba(255,255,255,0);
}


`

const NavWrapper = styled.div`
position: absolute;
display: flex;
width: 100%;
/* width: 1200px; */
/* left: 310px; */
/* margin-left: 306px; */
padding: 0 50px;
z-index: 300;
background-color: rgba(255,255,255, 0);
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 120px;
.invert-logo {
    background-image: url(${InvertLogo})!important;
    background-position: 50% 50%;
    text-decoration: none;
    height: 50px;
    width: 400px;
}
.image {
    background-image: url(${Logo});
    background-position: 50% 50%;
    text-decoration: none;
    height: 50px;
    width: 400px;
}
a {
    font-family: Helvetica;
    /* padding: 10px; */
    color: white;
    text-decoration: none;
}
.invert {
    .hamburger-inner {
            background-color: black!important;
        }
    .hamburger-inner:after {
        background-color: black!important;
    }
}
.hamburger {
    display: block;
    padding: 15px;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    /* :hover {
        .hamburger-inner {
            background-color: #fde027;
        }
        .hamburger-inner:after {
            background-color: #fde027;
        }
    } */
}
.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}
.hamburger-inner {
        transition: .3s;
        display: block;
        top: 70%;
        ${'' /* margin-top: 4px; */}
        width: 40px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;

        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);    
}

.hamburger-inner:after {
        transition: .3s;
        transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        content: "";
        left: 0;
        bottom: 10px;
        width: 40px;
        height: 3px;
        background-color: white;
        border-radius: 4px;
        position: absolute;
}
.hamburger-inner-active {
        top: 50%;
        transform: rotate(45deg);
        ${'' /* transition-delay: 0.12s; */}
        transition: top 0.075s ease,
        transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        ${'' /* transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); */}
        background-color: white!important;
        transition: .3s;
      } 
.hamburger-inner-active::after {
    content: "";
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease,
    transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: white!important;
    transition: .3s;
}
`

export default function Nav({invert}){
    const [menuOpen, setMenuOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [initial, setInitial] = useState(true);
    const [scrollUp, setScrollUp] = useState(true);


        useEffect(() => {
        if (typeof window !== `undefined` && window.onscroll !== offset) {
            console.log("running")
            window.onscroll = () => {
                setOffset(window.scrollY);
                console.log(offset)
                if (offset > window.scrollY && scrollUp !== true && !menuOpen){
                    console.log("hello1");
                    setScrollUp(true);
                } else if (offset < window.scrollY && scrollUp !== false && window.scrollY > 100 && !menuOpen) {
                    setScrollUp(false);     
                    console.log("hello2");
                }
                if (offset <= 100){
                    setInitial(true)
                } else if (offset !== 0 && initial !== false && !menuOpen){
                    setInitial(false)
                } 
                // if (menuOpen){
                //     setInitial(false);
                //     setScrollUp(false);
                // }
            }
        }
        })

    return (
        <Navbar>
        {/* src={invert? InvertLogo : menuOpen? Logo : Logo} */}
        <NavWrapper className={menuOpen? "NavBar Scroll Initial" : scrollUp && initial? "NavBar Scroll Initial" : scrollUp? "NavBar Scroll" : "NavBar"}>
            <Link to="/"><div className={menuOpen? "image" : invert && !menuOpen? "invert-logo" : scrollUp & initial? "image" : scrollUp? "invert-logo" : "image"}/></Link>
            <div>
                <button className={invert? "hamburger invert": menuOpen? "hamburger" : scrollUp && !initial ? "hamburger invert" : "hamburger"} onClick={() => {setMenuOpen(!menuOpen)}} aria-label="Navigation menu toggle">
                    <span className="hamburger-box">
                        <span className={menuOpen? "hamburger-inner hamburger-inner-active" : "hamburger-inner"}></span>
                    </span>
                </button>
            </div>
        </NavWrapper>
            <div className={menuOpen? "menu menu-open":"menu"}>
                <div className="menu-content">
                    <div className='menu-left'>
                        <Link to="/">Home</Link>
                        <Link to="/shop-parts">Shop Parts</Link>
                        <Link to="/electrical">Electrical</Link>
                        <Link to="/engineering">Engineering</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='menu-right'>
                        <img src={MenuImage}/>
                        <Link className='contact'><b>Engineering:</b>  07 843 1200 </Link>
                        <Link className='contact'><b>Electrical:</b> 07 843 2936 </Link>
                        <Link className='address'>Super Air Hanger, 1 Ingram rd,<br/>
                        Rukuhia, Hamilton, 3282,<br/>
                        New Zealand</Link>
                    </div>
                    
                </div>
                <div className='lower-menu'>
                    <Link to="/">©Central Aero 2023</Link>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100054522066996">Connect with us <img src={FB} className='fb-logo'/></a>
                </div>
            </div>
        </Navbar>
    )
}