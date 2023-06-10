import React from 'react'
import styled from 'styled-components'
import MainImage from '../../images/index-images/central-aero-electrical.jpg'

const Wrapper = styled.div`
display: flex;
height: 100vh;
div {
    display: flex;
    flex-direction: column;
    width: 50%;
    .text-content {
        width: 600px;
        margin: auto;
        font-family: 'Helvetica';
        h2 {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 70px;
            font-weight: 700;
        }
        p {
            font-size: 18px;
        }
        .button-div {
            display: flex;
            flex-direction: row;
            width: 100%;
            a { 
                width: fit-content;
                padding: 10px 20px;
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
img {
    width: 50%;
    object-fit: cover; 
    object-position: -675px center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
                        <a href="/contact">Contact Electical</a>
                        <a href="/electrical">View Electrical Parts/Services</a>
                    </div>
                </div>
            </div>
            <img src={MainImage}/>
        </Wrapper>
    )
}