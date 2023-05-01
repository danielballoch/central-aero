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
            font-size: 34px;
            font-weight: 700;
        }
        p {
            font-size: 18px;
        }
        .button-div {
            display: flex;
            flex-direction: row;
            width: 100%;
            button { 
                width: fit-content;
                padding: 20px;
                height: 60px;
                border-radius: 8px;
                font-weight: 600;
                /* background-color: #006bff; */
                background-color: black;
                color: white;
                border: none;
                :hover {
                    cursor: pointer;
                }
                :nth-of-type(2){
                    margin-left: 40px;
                }
                :first-of-type{
                    /* border: 3px solid #006bff; */
                    border: 3px solid black;
                    background-color: rgba(0,0,0,0);
                    /* color: #006bff; */
                    color: black;
                    transition: .3s;
                    :hover {
                        /* background-color: #006bff; */
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
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div>
                <div className='text-content'>
                    <h2>Electrical: CAANZ Part 145 Approved Repair/Overhaul</h2>
                    <p>Central Aero Electrical is an A CAANZ Part 145 Approved Repair and Overhaul Facility stocked. We offer quick turnarounds for a large range of exchange and overhaul components - from small fixed wing/touring planes to commercial passenger planes, helicopters and other aircrafts.</p>
                    <p>We also do custom orders and can advice on other suppliers for any parts we don't stock. If you can't find something get in touch and we'll help you out.</p>
                    <div className='button-div'>
                        <button>View Electrical Parts/Services</button>
                        <button>Contact Electical</button>
                    </div>
                </div>
            </div>
            <img src={MainImage}/>
        </Wrapper>
    )
}