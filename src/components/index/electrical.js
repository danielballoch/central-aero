import React from 'react'
import styled from 'styled-components'
import MainImage from '../../images/index-images/central-aero-electrical.jpg'
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
display: flex;
min-height: 100vh;
div {
    display: flex;
    flex-direction: column;
    width: 50%;
    .text-content {
        width: 100%;
        max-width: 600px;
        margin: auto;
        font-family: 'Helvetica';
        h2 {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 70px;
            font-weight: 700;
        }
        p {
            font-size: 16px;
        }
        .button-div {
            display: flex;
            flex-direction: row;
            width: 100%;
            a { 
                width: fit-content;
                padding: 20px;
                /* height: 60px; */
                border-radius: 8px;
                font-weight: 600;
                border: 3px solid black;
                background-color: rgba(0,0,0,0);
                color: black;
                text-decoration: none;
                transition: .3s;
                :hover {
                    cursor: pointer;
                    background-color: black;
                    color: white;
                }
                :nth-of-type(2){
                    margin-left: 40px;
                }
                :first-of-type{
                    background-color: black;
                    color: white;
                    border: 3px solid black;
                   
                    :hover {
                        background-color: black;
                        color: white;
                    }
                }

            }
        }
    }
}
.static-img {
    width: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    img {
        object-fit: cover; 
        object-position: -675px center;
    }
}
@media(max-width: 1240px){
flex-direction: column-reverse;
margin-bottom: 100px;
div, .static-image {
    width: 100%!important;
    margin: auto;
}
.text-content {
    padding: 0 20px !important;
}
}
@media(max-width: 700px){
    h2 {
        font-size: 40px!important;
        margin-top: 30px!important;
    }
    h3 {
        font-size: 20px!important;
        margin-top: 10px!important;
    }
    .button-div  {
        flex-direction: column!important;
        a {
            margin-bottom: 20px;
            margin-left: 0!important;
            padding: 20px 20px !important;
        }
        
    }
    .static-img {
        min-height: 400px!important;
        img {
            object-position: 31% 50%!important;
        }
        /* img {
            height: 400px!important;
        } */
    }
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div>
                <div className='text-content'>
                    <h2>Electrical</h2>
                    <h3>CAANZ Part 145 Approved Repair/Overhaul Facility</h3>
                    <p>Central Aero Electrical offer quick turnarounds for a large range of exchange and overhaul components - from small fixed wing/touring planes to commercial passenger planes, helicopters and other aircrafts.</p>
                    <p>We offer custom orders and can advice on other suppliers for any parts we don't stock. If you need an electrical part new, repaired, overhauled, or can't find a particular component get in touch today.</p>
                    <div className='button-div'>
                        <a href="/contact-electrical">Contact Electical</a>
                        <a href="/electrical">View Electrical Parts/Services</a>
                    </div>
                </div>
            </div>
            <StaticImage className="static-img" src="../../images/index-images/central-aero-electrical.jpg" placeholder="blurred"/>
        </Wrapper>
    )
}