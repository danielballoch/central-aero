import React from 'react'
import styled from 'styled-components'
import MainImage from '../../images/index-images/central-aero-engineering.jpg'

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
                    border: 3px solid black;
                    background-color: rgba(0,0,0,0);
                    color: black;
                    transition: .3s;
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
    object-position: left center;
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div>
                <div className='text-content'>
                    <h2>Engineering: Maintenance, Refurbishment, Consultancy</h2>
                    <p>Central Aero Engineering takes pride in it's vast collective experience and knowledge in the aviation industry. The best solution in Hamilton for anything from minor maintenance to major refurbishment of your aircraft.</p>
                    <p>We support everything from Hot Air Balloons, Gliders, Microlights & Gyrocopters right through to Air transport aircraft & helicopters and also offer consultancy services: Maintenance controllers, Air accident investigation, Auditing, and Airworthiness reviews.</p>
                    {/* <p>We also offer consultancy services to the industry as Maintenance controllers, Air accident investigation, Auditing, and Airworthiness reviews.</p>
                    <p>Whether you are a homebuilder, micro light owner or an air transport operator, fixed wing or helicopter, Central Aero Engineering can assist you with your aviation engineering requirements to get you flying and to keep you flying.</p> */}
                    <div className='button-div'>
                        <button>View Engineering Services</button>
                        <button>Contact Engineering</button>
                    </div>
                </div>
            </div>
            <img src={MainImage}/>
        </Wrapper>
    )
}