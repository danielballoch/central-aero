import React from 'react'
import styled from 'styled-components'
import Logo from "../images/CentralAeroTextOnlyLogoBlack.png"
import FB from '../images/facebookSmall.png'
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

.nav-main {
    height: 100%;
    align-items: center;
    display: flex;
    a {
        transition: .3s;
        :hover{
            color: black;
            /* text-shadow: #FC0 1px 0 10px; */
        }
    }
    .logo {
            height: 80px;
        }
    div {
        display: flex;
        flex-direction: column;
        margin: 50px;
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
.div1 {
    display: flex;

    width: 400px;
    p:first-of-type {
        font-size: 14px;
    }
    p:last-of-type {
        margin-top: 40px !important;
        padding-bottom: 20px;
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
            <div className='nav-main'>
                <div className='div1'>
                    <img src={Logo} className="logo"/>
                    <p>Providing professional Aircraft Engineering & Electrical services for over 17+ years. We're a New Zealand owned & operated company, and take pride in our collective knowledge and experience helping to keep the Aciation community flying safely.</p>
                    <p>© Copyright 2023 Central Aero</p>

                    {/* <a href="#"><p>Connect with us <img src={FB}/></p></a> */}
                </div>
                <div>
                    <a href="#">HOME</a>
                    <a href="#">SHOP PARTS</a>
                    <a href="#">ENGINEERING</a>
                    <a href="#">ELECTRICAL</a>
                    <a href="#">FAQ</a>
                </div>
                <div>
                    <a href="#"><b>Engineering:</b>  07 843 1200 </a>
                    <a href="#"><b>Electrical:</b> 07 843 2936 </a>
                    <p>Open Hours: 7:00am - 5:00pm,<br/>
                    Monday - Friday</p>

                </div>
                <div>
                    <p href="#"><b>Our Hanger</b></p>
                    <a href="#">Super Air Hanger, 1 Ingram rd,<br/>
                    Rukuhia, Hamilton, 3282,<br/>
                    New Zealand</a>
                </div>
                <img className="rotate-logo" src={Part145Logo}/>
            </div>
            <div className='bottom'><a href="#">Terms & Conditions</a><a href="#">Connect with us <img src={FB} className='fb-logo'/></a></div>
        </Wrapper>
    )
}