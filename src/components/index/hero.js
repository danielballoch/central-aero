import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import Video from "../../components/video"
import HeroVideo from "../../videos/CentralAeroHeroRerender.mp4"

const HeroWrapper = styled.div`
display: grid;
max-height: 100vh;
flex-direction: column;
background-color: black;
.br-hide {
    display: none;
}
.center-text {
    font-size: 18px;
    max-width: 1000px;
    padding-top: 50px;
    margin: auto;
    color: white;
    background-color: unset;
    /* font-family: "Helvetica"; */
    h1 {
        /* color: black; */
        color: white;
        /* font-size: 48px; */
        font-size: 100px;
        /* margin-right: 100px; */
        margin-top: 100px;
        margin-bottom: 40px;
        font-weight: 500;
        padding: 0;
    }
    .links {
        background-color: rgba(0,0,0,0);
        margin-bottom: 60px;
        a {
            font-size: 26px;
            /* color: #333; */
            color: white;
            margin-right: 20px;
            background-color: rgba(0,0,0,0);
            transition: .3s;
            text-decoration: none;
            /* border-bottom: 3px solid rgba(255,255,255,0); */
            .arrow {
                margin-left: 24px;
                margin-right: 76px; 
            }
            :hover {
                /* border-bottom: 3px solid white; */
                color: #fde027;
                cursor: pointer; 
                .arrow {
                    border-color: #fde027;
                    animation: bounce 1s infinite;
                }
            }
            :last-of-type {
                margin-right: 0;
            }
        }
        
    }         
}
@keyframes bounce {
    0%   { margin-left: 20px; 
        margin-right: 80px 
    }
    50%  { margin-left: 24px; 
        margin-right: 76px; 
    }
    100% { margin-left: 20px; 
        margin-right: 80px  
    }
}
div {
    /* max-height: 100vh; */
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    /* background-color: rgba(255,255,255,.9); */
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
  transition: .3s;
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
@media(max-width:1600px){
    .center-text {
        translate: .3s;
        max-width: 910px!important;
        h1 {
            font-size: 70px!important;
        }
        .links {
            a {
                font-size: 23px!important;
                .arrow {
                    transition: .3s;
                    margin-right: 40px;
                    margin-left: 10px;
                }
                :hover {
                    .arrow {
                        // margin-right: 36px!important;
                        // margin-left: 14px!important;
                        animation: bouncem 1s infinite;
                    }
                }
            }
        }
    }
}
@keyframes bouncem {
    0%   { margin-left: 10px; 
           margin-right: 40px
    }
    50%  { margin-left: 14px; 
           margin-right: 36px; 
    }
    100% { margin-left: 10px; 
           margin-right: 40px; 
    }
}
@media(max-width: 960px){
    .center-text {
        transform: scale(0.8);
    }
}
@media(max-width: 800px){
    height: 100vh;
    .center-text {
        transform: scale(0.8);
        .links {
            display: flex;
            flex-direction: column;
            a {
                font-size: 40px!important;
                margin-bottom: 20px;
            }
        }
    }
}
@media(max-width: 702px){
    .center-text{
        padding-top: 200px!important;
        .br-hide {
            display: block;
        }
        h1 {
        margin-top: 0!important;
        font-size: 50px!important;
        }
        .links {
            a {
                font-size: 20px!important;
                margin-bottom: 40px!important;
            }
            .br-hide {
                display: none;
            }
            .arrow {
                margin: 0!important;
            }
        }
    }
    .br-desktop {
        display: none;
    }
    
}
`

export default function Hero({heroTitle}){
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
                <h1>We make sure your<br className="br-desktop"/> Aircraft is Flying <br className="br-desktop"/> Fast, Efficiently,<br className="br-desktop"/> and Safely. </h1>
                <div className="links">
                    <Link to="/engineering">ENGINEERING<br className="br-hide"/> SERVICES <i class="arrow right"/></Link>
                    <Link to="/electrical">ELECTRICAL<br className="br-hide"/> PARTS/SERVICES <i class="arrow right"/></Link>
                </div>
            </div>
        </div>
    </HeroWrapper>
    )
}

