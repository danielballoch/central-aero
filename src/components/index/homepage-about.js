import React from 'react'
import styled from 'styled-components'
import Image1 from '../../images/index-images/central-aero-hanger.jpg'
import Image2 from '../../images/index-images/central-aero-heli.jpeg'

const Wrapper = styled.div`
min-height: 800px;
display: flex;
justify-content: center;
align-items: center;
/* padding-top: 125px; */
/* background-color: #f7faff; */
/* background-color: #F1F1F1; */
@media(max-width:1280px){
    flex-direction: column;
}
.about-images {
    display: flex;
    flex-direction: row;
    grid-column-start: column1-start;
    grid-column-end: column2-end;
    z-index: 100;
    /* margin-top: 25px;
    margin-left: 80px; */
    img {
        object-fit: cover; 
        height: 500px;
        max-width: 370px;
        width: 100%;
        margin: 0 20px;
        background-color: rgba(0,0,0, 1);
        /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        :last-of-type {
            object-position: -80px center;
        }
    }
}
.about-text {
    display: flex;
    /* background-color: #F1F1F1; */
    /* background-color: rgba(0,20,40, 0.2); */
    /* background-color: white; */
    height: 550px;
    grid-column-start: column2-start;
    grid-column-end: column3-end;
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    font-family: 'Helvetica';
    /* width: 1200px; */
    div {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 100%;
        max-width: 640px;
        margin-right: 20px;
        h2 {
            margin-top: 10px;
            font-size: 34px;
            font-weight: 700;
        }
        p {
            font-size: 16px;
        }
        button {
            border-radius: 8px;
            font-weight: 600;
            width: 170px;
            height: 60px;
            background-color: black;
            /* background-color: #006bff; */
            /* background-color: #bc5b2f; */
            color: white;
            border: none;
            :hover {
                cursor: pointer;
            }
        }
    }
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className='about-images'>
                <img src={Image1}/>
                <img src={Image2}/>
            </div>
            <div className='about-text'>
                <div>
                    <h2>Engineering & Electrical <br/> Under One Roof</h2>
                    <p>Central Aero is made up of two sister companies, Electrical run by Hamish Ross, and Engineering run by Paul Waterhouse. Working out of the Super Air Hanger near Hamilton Airport, their teams have provided quality parts and services to New Zealand and Overseas Pilots for over 17+ years.</p>
                    <p>With knowledge and expertise in Commercial Air transport Aircrafts, Fixed Wing Planes, Helicopters right through to Hot Air Balloons, Gliders, Microlights & Gyrocopters - Central Aero is capable and ready to help with your engineering and electrical aviation needs.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Wrapper>
    )
}