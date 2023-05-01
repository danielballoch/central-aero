import React from "react"
import styled from 'styled-components'
import Video from "../../components/video"
// import LogoCover from "../images/cover.png"
import HeroVideo from "../../videos/central-aero-hero.mp4"

const HeroWrapper = styled.div`
display: grid;
max-height: 100vh;
flex-direction: column;
background-color: black;
.center-text {
    font-size: 18px;
    width: 1300px;
    margin: auto;
    color: white;
    background-color: unset;
    font-family: "Helvetica";
    h1 {
        
        color: white;
        font-size: 48px;
        margin-right: 100px;
        margin-bottom: 40px;
        font-weight: 500;
        padding: 0;
    }
    .links {
        background-color: rgba(0,0,0,0);
        margin-bottom: 60px;
        a {
            font-size: 24px;
            color: white;
            margin-right: 20px;
            background-color: rgba(0,0,0,0);
            transition: .3s;
            /* border-bottom: 3px solid rgba(255,255,255,0); */
            :hover {
                /* border-bottom: 3px solid white; */
                cursor: pointer;
            }
        }
         
    }
}
div {
    /* max-height: 100vh; */
    width: 100%;
    background-color: rgba(0,0,0,0.6);
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
.arrow {
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 8px;
  margin-right: 80px;
  margin-left: 20px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
`

export default function Hero(){
    return(
        <HeroWrapper id="home">
        <Video videoSrcURL={HeroVideo} videoTitle="Central Aero Compilation"/>
        <div style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    maxHeight: "100%"
                    }}>
            <div className="center-text">
                <h1>From minor maintenance to major refurbishment, as well as electrical component exchange and overhaul. We're a one stop shop for aircraft owners and maintenance facilities who want quality parts and service.</h1>
                <div className="links">
                <a>ENGINEERING SERVICES <i class="arrow right"/></a>
                <a>ELECTRICAL PARTS/SERVICES <i class="arrow right"/></a>
                </div>
            </div>
        </div>
    </HeroWrapper>
    )
}

