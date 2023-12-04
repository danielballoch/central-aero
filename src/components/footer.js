import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from "../images/CentralAeroTextOnlyLogoBlack.png"
import WhiteLogo from "../images/CentralAeroTextOnlyLogo.png"
import FB from '../images/facebook-logo.png'
import Part145Logo from '../images/circletext-capital.png'


const Wrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 600px;
display: flex;
align-items: center;
justify-content: flex-end;
/* background-color: black; */
font-family: 'Helvetica';
/* color: white; */
color: #333;
@media(max-width: 1494px){
    div {
        margin: 25px!important;
    }
}
.br {
    display: none;
    /* @media(max-width: 1400px){
        display: block;
    } */
    
}
.footer-main {
    /* height: 100%; */
    margin-bottom: 30px;
    align-items: center;
    display: flex;
    @media(max-width: 1260px){
        flex-direction: column;
        margin-top: 100px;
    }
    a {
        transition: .3s;
        :hover{
            color: black;
            /* text-shadow: #FC0 1px 0 10px; */
        }
    }
    
    
    a {
        padding: 10px 0;
        font-size: 16px;
        /* color: white; */
        color: #333;
        text-decoration: none;
    }
}
p {
    margin: unset !important;
}
.footer1 {
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
            height: 80px;
            margin: 0 -8px;
            background-size: contain;
            background-image: url(${Logo});
            background-repeat: no-repeat;
            background-position: 0% 50%; 
        }
    div {
        display: flex;
        flex-direction: column;
        
        margin: 50px;
        p:first-of-type {
            font-size: 14px;
        }
        p:last-of-type {
            /* margin-top: 40px !important; */
            padding-bottom: 20px;
        }
    }
    .div1 {
        max-width: 400px;
        width: 100%;
        p {
            margin: auto;
            width: fit-content;
            display: flex;
            align-items: center;
            font-size: 16px;
            img {
                margin-left: 10px;
                width: 30px;
            }
        }
    }
    .div2 {
        width: fit-content;
    }
}
.footer2 {
    display: flex;
    justify-content: center;
    align-items: center;
    div:first-of-type {
        a {
            font-size: 14px;
        }
    }
    div:last-of-type {
        width: unset;
    }
    div {
        a {
            white-space: nowrap!important;
        }
        display: flex;
        flex-direction: column;
        margin: 50px;
        p:first-of-type {
            font-size: 18px;
            padding-bottom: 0!important;
            margin-bottom: 0!important;
        }
        p:last-of-type {
            /* margin-top: 40px !important; */
            padding-bottom: 20px;
        }
        
    }
}

.bottom {
    padding: 10px;
    display: flex;
    font-size: 14px;
    margin: 0!important;
    a {
        margin: 0 40px;
        text-decoration: none;
        /* color: white; */
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .fb-logo {
        height: 20px;
        margin-left: 10px;
    }
}
.rotate-logo {
height: 100px;
transform: rotate(90deg);
/* animation:spin 30s linear infinite; */
}

@keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(-360deg); 
    }
}

@media(max-width: 640px){
    background-color: black;
    color: white;
    .footer1 {
        flex-direction: column;
        margin-bottom: 0!important;
        .logo {
            background-image: url(${WhiteLogo});
            background-size: contain;
        }
        .div1 {
            margin: 20px;
            max-width: 90vw!important; 
        }
        .div2 {
            
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0!important;
            a { 
                margin: 10px;
                color: white;
            }
        }
    }
    .footer2 {
        display: grid;
        margin-top: 0!important;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        position: relative;
        .rotate-logo {
            filter: invert(100%);
        }
        div {
            margin: 0!important;
            position: relative;
            place-items: left;
            display: grid;
            z-index: 300;
            a {
                color: white;
            } 
        }
        div:nth-of-type(1) {
            grid-column-start: 0;
            grid-column-end: 1;
            grid-row-start: 1;
            grid-row-end:2;
        }
        div:nth-of-type(2) {
            grid-column-start: 0;
            grid-column-end: 1;
            grid-row-start: 2;
            grid-row-end:3;
        }
        div:last-of-type {
            grid-column-start: 0;
            grid-column-end: 1;
            grid-row-start: 1;
            grid-row-end:3;
            position: relative;
            placeItems: center;
            /* height: 100%; */
            img {
                height: 300px!important;
                width: 300px!important;
            }
            margin-top: 25px!important;
            height: 300px!important;
            width: 300px!important;
            opacity: .15;
        }
    }
    .bottom {
        font-size: 10px!important;
        a {
            margin: 10px;
            color: white;
        }
    }
}
`

export default function Footer({phones}){
    return(
        <Wrapper>
            <div className='footer-main'>
                <div className='footer1'>
                    <div className='div1'>
                        <span  className="logo"/>
                        <p>Providing professional Aircraft Engineering & Electrical services for over 17+ years. We're a New Zealand owned & operated company, and take pride in our collective knowledge and experience helping to keep the Aviation community flying safely.</p>
                        {/* <p>© Copyright 2023 Central Aero</p> */}

                        {/* <Link href="#"><p>Connect with us <img src={FB}/></p></Link> */}
                    </div>
                    <div className='div2'>
                        <Link to="/#home">HOME</Link>
                        <Link to="/shop-parts#top">SHOP PARTS</Link>
                        <Link to="/engineering#top">ENGINEERING</Link>
                        <Link to="/electrical#top">ELECTRICAL</Link>
                        <Link to="/contact#top">CONTACT</Link>
                        <Link to="/faq#top">FAQ</Link>
                        
                    </div>
                </div>
                <div className='footer2'>
                    <div>
                        <p><b>Our Hangar</b></p>
                        <a target="_blank" href="https://www.google.com/maps/place/Central+Aero/@-37.8652244,175.324915,18z/data=!3m1!4b1!4m6!3m5!1s0x6d6d1e388983f283:0x48747941afb9f05e!8m2!3d-37.8652265!4d175.3262025!16s%2Fg%2F11h52zksmv?entry=ttu">
                        Super Air Hanger,<br className='br'/> 1 Ingram rd,<br/>
                        Rukuhia, Hamilton,<br className='br'/> 3282,<br/>
                        New Zealand</a>
                    </div>
                    <div>
                        <Link href="tel:07-843-1200"><b>Engineering:</b><br className='br'/>  {phones.engineering_phone} </Link>
                        <Link href="tel:07-843-2936"><b>Electrical:</b><br className='br'/> {phones.electrical_phone} </Link>
                    </div>
                    <div>
                        <img alt="CAANZ Part 145 Approved badge with rotating animation" className="rotate-logo" src={Part145Logo}/>
                    </div>
                </div>
            </div>
            <div className='bottom'><Link to="/">© Central Aero 2023</Link><Link to="/terms-and-conditions#top">Terms & Conditions</Link><a target="_blank" href="https://www.facebook.com/profile.php?id=100054522066996">Connect with us <img alt="facebook logo" src={FB} className='fb-logo'/></a></div>
        </Wrapper>
    )
}


