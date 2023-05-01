import React from 'react'
import styled from 'styled-components'
import Image1 from '../../images/index-images/central-aero-hanger.jpg'
import Image2 from '../../images/index-images/central-aero-heli.jpeg'

const Wrapper = styled.div`
height: 800px;
display: grid;
grid-template-columns: [column1-start] 35% [column1-end column2-start] 5% [column2-end] 60% [column3-end];
grid-template-rows: [row1-start] 0% [row1-end] 100%;
padding-top: 125px;
/* background-color: #f7faff; */
/* background-color: #F1F1F1; */
/* background-color: #006bff; */
.about-images {
    background-color: rgba(0,255,0, 1);
    display: flex;
    flex-direction: row;
    grid-column-start: column1-start;
    grid-column-end: column2-end;
    z-index: 100;
    margin-top: 25px;
    margin-left: 80px;
    img {
        object-fit: cover; 
        height: 500px;
        width: 370px;
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
        width: 640px;
        h2 {
            margin-top: 10px;
            font-size: 34px;
            font-weight: 700;
        }
        p {
            font-size: 18px;
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
                    <h2>Central Aero Electrical & Engineering</h2>
                    <p>Central Aero is made up of two sister companies in the Super Air Hanger, Hamilton, New Zealand. Electrical run by Hamish Ross, and Engineering run by Paul Waterhouse.</p>
                    <p>They've been providing quality parts and services to New Zealand and Overseas Pilots and Maintenance Facilities for over 17+ years. With knowledge and expertise in everything from Hot Air Balloons, Gliders, Microlights & Gyrocopters right through to Commercial Air transport Aircrafts & Helicopters Central Aero is ready to help keep you flying.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Wrapper>
    )
}