import React from "react"
import styled from 'styled-components'
import Video from "../video"
// import LogoCover from "../images/cover.png"
import HeroVideo from "../../videos/central-aero-hero.mp4"

const HeroWrapper = styled.div`
display: grid;
max-height: 100vh;
flex-direction: column;
background-color: black;
.center-text {
    font-family: "Helvetica", Arial, sans-serif;
    h1,h2 {
        font-family: "Helvetica", Arial, sans-serif;
        margin-bottom: 10px;
    }
    p {
        margin: 0;
    }
    h1 {
        color: white;
        font-size: 120px;
        margin: 0;
        padding: 0;
    }
    h2 {
        color: white;
        font-size: 60px;
        margin-top: 0;
        margin-bottom: 60px;
        padding-top: 0;
    }
    font-size: 18px;
    width: 1000px;
    margin: auto;
    text-align: center;
    color: white;
    background-color: unset;
}
div {
    /* max-height: 100vh; */
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    /* background: radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,.9) 100%); */
    opacity: 1;
    img {
        mix-blend-mode: lighten;
        z-index: 10;
        opacity: 1;
        max-height: 100vh;
        /* width: 100%; */
    }
}
@media(max-width: 900px){
    div {
        height: 80vh;
        img {
            max-width: 90%;
        }
    }
}
`

export default function Hero(){
    return(
        <HeroWrapper id="home">
        <Video videoSrcURL={HeroVideo} videoTitle="Riverside Hero Video"/>
        <div style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    maxHeight: "100%"
                    }}>
            <div className="center-text">
            <p>- Providing Aviation Parts and Repair Since 2006 -</p>
            <h1>CENTRAL AERO</h1>
            <h2>ENGINEERING & ELECTRICAL</h2>
            {/* <h1>CENTRAL AERO ENGINEERING & ELECTRICAL</h1>
            <h2></h2>
            <p>Offering aviation services to New Zealand and Overseas customers since 2006. From minor maintenance to major refurbishment, as well as electrical component exchange and overhaul. We're a one stop shop for aircraft owners and maintenance facilities who want quality parts and service.</p> */}
            </div>
            {/* <img src={LogoCover} alt="Riverside Jiu Jitsu Logo"/> */}
        </div>
    </HeroWrapper>
    )
}

