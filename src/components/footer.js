import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from "../images/CentralAeroTextOnlyLogoBlack.png"
import FB from '../images/facebook-logo.png'
import Part145Logo from '../images/circletext-capital.png'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 600px;
display: flex;
align-items: center;
/* background-color: black; */
font-family: 'Helvetica';
/* color: white; */
color: #333;
.br {
    display: none;
    @media(max-width: 1588px){
        display: block;
    }
    
}
.footer-main {
    height: 100%;
    align-items: center;
    display: flex;
    @media(max-width: 1390px){
        flex-direction: column;
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
        font-size: 18px;
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
        width: 400px;
        p {
            margin: auto;
            width: fit-content;
            display: flex;
            align-items: center;
            font-size: 18px;
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
    div:last-of-type {
        width: unset;
    }
    div {
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
/* filter: invert(100%); */
animation:spin 30s linear infinite;
}

@keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(-360deg); 
    }
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className='footer-main'>
                <div className='footer1'>
                    <div className='div1'>
                        <img src={Logo} className="logo"/>
                        <p>Providing professional Aircraft Engineering & Electrical services for over 17+ years. We're a New Zealand owned & operated company, and take pride in our collective knowledge and experience helping to keep the Aviation community flying safely.</p>
                        {/* <p>© Copyright 2023 Central Aero</p> */}

                        {/* <Link href="#"><p>Connect with us <img src={FB}/></p></Link> */}
                    </div>
                    <div className='div2'>
                        <Link to="/">HOME</Link>
                        <Link to="/shop-parts">SHOP PARTS</Link>
                        <Link to="/engineering">ENGINEERING</Link>
                        <Link to="/electrical">ELECTRICAL</Link>
                        <Link to="/contact">CONTACT</Link>
                        <Link to="/faq">FAQ</Link>
                        
                    </div>
                </div>
                <div className='footer2'>
                    <div>
                        <p><b>Our Hanger</b></p>
                        <a target="_blank" href="https://www.google.com/maps/place/Central+Aero/@-37.8652244,175.324915,18z/data=!3m1!4b1!4m6!3m5!1s0x6d6d1e388983f283:0x48747941afb9f05e!8m2!3d-37.8652265!4d175.3262025!16s%2Fg%2F11h52zksmv?entry=ttu">
                        Super Air Hanger,<br className='br'/> 1 Ingram rd,<br/>
                        Rukuhia, Hamilton,<br className='br'/> 3282,<br/>
                        New Zealand</a>
                    </div>
                    <div>
                        <Link href="tel:07-843-1200"><b>Engineering:</b><br className='br'/>  07 843 1200 </Link>
                        <Link href="tel:07-843-2936"><b>Electrical:</b><br className='br'/> 07 843 2936 </Link>
                        {/* <p>Open Hours: 7:00am - 5:00pm,<br/>
                        Monday - Friday</p> */}

                    </div>
                    <div>
                        <img className="rotate-logo" src={Part145Logo}/>
                    </div>
                </div>
            </div>
            <div className='bottom'><Link to="/">©Central Aero 2023</Link><Link to="/terms-and-conditions">Terms & Conditions</Link><a target="_blank" href="https://www.facebook.com/profile.php?id=100054522066996">Connect with us <img src={FB} className='fb-logo'/></a></div>
        </Wrapper>
    )
}