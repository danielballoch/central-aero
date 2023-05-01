import React from 'react'
import styled from 'styled-components'
import Logo from '../images/CentralAeroTextOnlyLogo.png'
import FB from '../images/facebookSmall.png'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 600px;
display: flex;
align-items: center;
background-color: black;
font-family: 'Helvetica';
color: white;
.nav-main {
    height: 100%;
    align-items: center;
    display: flex;
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
        color: white;
        text-decoration: none;
    }
}
.bottom {
    padding: 10px;
    span, a {
        margin: 40px;
        text-decoration: none;
        color: white;
    }
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className='nav-main'>
                <div>
                    <img src={Logo} className="logo"/>
                    {/* <a href="#"><p>Connect with us <img src={FB}/></p></a> */}
                </div>
                <div>
                    <a href="#">HOME</a>
                    <a href="#">ENGINEERING</a>
                    <a href="#">ELECTRICAL</a>
                    <a href="#">GALLERY</a>
                    <a href="#">CONTACT</a>
                </div>
                <div>
                    <a href="#">Engineering:  07 843 1200 </a>
                    <a href="#">Electrical: 07 843 2936 </a>
                    <a href="#">Super Air Hanger, 1 Ingram rd,<br/>
                    Rukuhia, Hamilton, 3282,<br/>
                    New Zealand</a>
                </div>
            </div>
            <div className='bottom'><span>© Central Aero 2023</span><a href="#">Terms & Conditions</a></div>
        </Wrapper>
    )
}