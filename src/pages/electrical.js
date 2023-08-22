import React, {useRef, useLayoutEffect} from 'react'
import Layout from "../components/layout.js"
import styled from 'styled-components'
import Search from "../components/search"
import Image1 from "../images/electrical-images/Magneto.png"
import Image2 from "../images/electrical-images/AC-Generator.png"
import Image3 from "../images/electrical-images/DC-Starter.png"
import Image4 from "../images/electrical-images/Alternator.png"
import HeroImage from "../images/electrical-images/electrical-background-darker.png"
import Placeholder from "../images/index-images/central-aero-electrical.jpg"
import { StaticImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Seo from "../components/seo"


const searchIndices = [{ name: `Pages`, title: `Pages` }]




const ElectricalHero = styled.div`
grid-area: 1/1;
    position: relative;
    place-items: end;
    justify-items: center;
    display: grid;
    max-height: 100%;
    z-index: 300;
    /* margin-bottom: 20px; */
/* display: flex;
flex-direction: column; 
justify-content: space-between;
align-items: center; */
/* background-image: url(${HeroImage}); */
height: 100vh;
background-position: 50% 50%;
.hero-center-content {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 900px;
    h1 {
        margin-top: -50px;
        z-index: 100;
        font-weight: 600;
        font-size: 68px;
        /* font-family: 'segoe ui'; */
        color: white;
    }
    p {
        color: white;
        font-size: 18px!important;
        margin-bottom: 0;
    }
}
@media(max-width: 750px){
    .hero-center-content {
        width: 98vw;
        h1 {
        font-size: 40px;
        }
        p {
            font-size: 14px!important;
            padding: 0 20px;
        }
        .SearchInput {
            max-width: 295px;
            min-width: 0;
        }
    }
   
}
@media(max-width: 545px){
    .herobr {
        display: none;
    }
}
`

const ElectricalWrapper = styled.div`
/* font-family: 'segoe ui'; */
/* padding-top: 100px; */
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
align-items: center;
min-height: 100vh;
.hero-wrap {
    display: grid;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    .hero-bg-img {
    grid-area: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    height: 100%;
    img {
        height: 100%;
        background-color: black;
        /* filter: brightness(20%); */
    }
}
}

h1 {
    margin-top: 100px;
    font-size: 60px;
    font-weight: 500;
    color: white;
    /* font-family: 'segoe ui'; */
}
p {
    max-width: 700px;
    text-align: center;
    /* font-family: 'segoe ui'; */
    font-size: 16px;
}
/* button {
    background-color: white;
    width: 200px;
    height: 60px;
    margin: 40px 80px 100px 100px;
    :hover {
        cursor: pointer;
    }
} */
.button-div {
    margin: 60px 0 20px 0;
    
}
a { 
    width: fit-content;
    padding: 10px 20px;
    margin: 0 20px;
    /* height: 60px; */
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    background-color: black;
    color: white;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    :hover {
        cursor: pointer;
    }
    :nth-of-type(2){
        background-color: white;
        color: black;
        :hover {
            color: white;
            background-color: black;
        }
    }

}
.products-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0 200px 0;
    height: auto;
}
@media(max-width: 500px){
    .button-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        a:nth-of-type(2) {
            margin-top: 30px;
        }
    }
    .products-section p {
        padding: 0 20px;
    }
        
}
`

const ComponentsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
justify-content: center;
.component {
    text-align: center;
    p {
        padding: 0;
    }
    img {
        /* width: 200px; */
        height: 100px;
        margin: 20px;
        /* background-color: lightgrey; */
    }
    
}
`

const Marquee = styled.div`
    display: flex;
    align-items: center;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 71px;
  overflow-x: hidden;
  /* border: 3px solid black; */
.marquee {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    background-color: black;
    width: 100%;
    br {
        display: none;
    }
    h4 {
        /* font-family: 'segoe ui'; */
        margin: 20px 40px;
        font-weight: 400;
        color: white;
    }
}
.track {
    display: flex;
    align-items: center;
    border: 3px solid black;
    background-color: black;
    br {
        display: none;
    }
    h4 {
        /* font-family: 'segoe ui'; */
        margin: 20px 40px;
        font-weight: 400;
        color: white;
    }
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 60s linear infinite;
}
.dash {
    width: 40px;
    height: 8px;
    background-color: white;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media(max-width: 750px){
    .track {
        text-align: center!important;
        animation: marquee 30s linear infinite;
        br {
            display: block;
        }
        h4 {
            text-align: center;
            font-size: 16px;
        }
    }
    .dash {
        transform: scale(.8);
    }
}
`

const Services = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
a {
    margin: 0;
}
`
const ServiceWrapper = styled.div`
display: flex;
flex-direction: row;
img {
    max-width: 500px;
    max-height: 500px;
    width: 100vw;
    height: 98vh;
    object-fit: cover;
    object-position: 30% 50%;
}
div {
    display: flex;
    max-width: 500px;
    justify-content: center;
    flex-direction: column;
    margin-left: 80px;
}
h2 {
    margin-top: 0;
}
p {
    text-align: left;
}
button {
    margin: 0;
}
@media(max-width:1080px){
    flex-direction: column;
    div {
        max-width: 100vw;
        padding: 20px;
        margin: 40px auto 80px auto;
    }
    img {
        margin: auto;
        max-width: 100vw;
}
}
`

let components = ["Starter Generators","Magnetos","Fuel Pumps","Alternators","Generator Control Units", "Voltage Regulators"]

let services = [
    ["Buy Components New","We have brand new products stocked on shelves for small-large Planes, Helicopters and other Aircrafts. Give us a call/email or send a form including the components you need and we'll give you a fair quote or offer any relevant advice or recommendations  to get you up and flying again."],
    ["Repair/Overhaul","If you want to save some cash you can send in your part and we'll examine and repair to get it back up to a safe and reliable standard. This will mean a slightly longer wait time, generally blank - blank. Let us know your needed parts and we'll get back to you with a price and time estimate promptly."],
    ["Exchange Components","If you have a inspection due or need your parts quickly we offer component exchanges. Simply send in your component and we'll send a new or overhauled product back right away. This will be sligntly cheaper than buying a product new and just as fast!"]]


export default function Electrical(){
    gsap.registerPlugin(ScrollTrigger);
    const electricalRef = useRef(null);
        useLayoutEffect(() => {
            let ctx = gsap.context(() => {
                const element = electricalRef.current;
                let scrollSettings1 = {
                    trigger: ".header-ani",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings2 = {
                    trigger: ".products-text-ani",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings3 = {
                    trigger: ".products-buttons-ani",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                // let scrollSettingsPin = {
                //     pin: ".pin",
                //     start: "top top",
                //     end: "+=1500"
                // };
                setTimeout(()=>{
                    // gsap.fromTo(element.querySelector(".img-ani3"),{opacity: 0, x: -100},{opacity: 1, x: 0, scrollTrigger: scrollSettings2});
                    // gsap.fromTo(element.querySelector(".text-box3"),{opacity: 0, x: -100},{opacity: 1, x: 0, scrollTrigger: scrollSettings1});
                    gsap.fromTo(element.querySelector(".header-ani"),{opacity: 0, y: 100},{opacity: 1, y: 0, scrollTrigger: scrollSettings1});
                    gsap.fromTo(element.querySelector(".products-text-ani"),{opacity: 0, y: 100},{opacity: 1, y: 0, scrollTrigger: scrollSettings2});
                    gsap.fromTo(element.querySelector(".products-buttons-ani"),{opacity: 0, y: 100},{opacity: 1, y: 0, scrollTrigger: scrollSettings3});
                    // gsap.fromTo(element.querySelector(".pin"),{opacity: 1, x: 0},{opacity: 1, x: 0, scrollTrigger: scrollSettingsPin});
                    for (let i = 0; i < components.length; i++){
                        let className = ".component-ani"+i;
                        let scrollSettings = {
                            trigger: className,
                            start: "top bottom",
                            toggleActions: "play none none reverse",
                            // markers: true
                        };
                        gsap.fromTo(element.querySelector(className),{opacity: 0, y: 100,},{opacity: 1, y: 0, scrollTrigger: scrollSettings});
                    }
                    for (let i = 0; i < services.length; i++){
                        let className = ".img"+i;
                        let scrollSettingsPin = {
                            trigger: className,
                            start: "center bottom",
                            toggleActions: "play none none reverse",
                            // markers: true
                        };
                        gsap.fromTo(element.querySelector(className),{opacity: 0, x:0},{opacity: 1, x:0, scrollTrigger: scrollSettingsPin});
                        let className2 = ".text"+i;
                        let scrollSettingsPin2 = {
                            trigger: className2,
                            start: "center bottom",
                            toggleActions: "play none none reverse",
                            // markers: true
                        };
                        gsap.fromTo(element.querySelector(className2),{opacity: 0, x:0},{opacity: 1, x:0, scrollTrigger: scrollSettingsPin2});
                    }
                    // gsap.fromTo(element.querySelector(".m2"),{opacity: 0, x: -10,},{opacity: 1, x: 0, scrollTrigger: scrollSettings4});
                    
                },100)
                
            });
            return () => ctx.revert(); // <- cleanup!
    }, []);
    return (
        <Layout>
            <ElectricalWrapper id="top" ref={electricalRef}>
                <div className='hero-wrap'>
                    <ElectricalHero>
                        <div className='hero-center-content'>
                            <h1>CENTRAL AERO ELECTRICAL</h1>
                            <p>Central Aero Electrical is a CAANZ Part 145 Approved Repair and Overhaul Facility.<br className='herobr'/> We have a large range of high quality components and offer quick turnarounds.<br/>Search Electrical Components for Exchange, Repair, or Overhaul.</p>
                            <p></p>
                            <Search indices={searchIndices}/>
                        </div>
                        <Marquee>
                                <div className='marquee'>
                                    <h4>PROMT TURNAROUND TIME FOR ALL REPAIRS AND OVERHAULS</h4>
                                </div>
                            {/* <div className='track'>
                                <h4>CAANZ PART 145 APPROVED<br/> REPAIR AND OVERHAUL FACILITY</h4>
                                <div className='dash'/>
                                <h4>1 YEAR WARRENTY ON<br/> ALL PRODUCTS/SERVICES</h4>
                                <div className='dash'/>
                                <h4>PROMPT TURNAROUND TIME<br/> FOR ALL REPAIRS AND OVERHAULS</h4>
                                <div className='dash'/>
                                <h4>CAANZ PART 145 APPROVED<br/> REPAIR AND OVERHAUL FACILITY</h4>
                                <div className='dash'/>
                                <h4>1 YEAR WARRENTY ON<br/> ALL PRODUCTS/SERVICES</h4>
                                <div className='dash'/>
                                <h4>PROMPT TURNAROUND TIME<br/> FOR ALL REPAIRS AND OVERHAULS</h4>
                                <div className='dash'/>
                            </div> */}
                        </Marquee>
                    </ElectricalHero>
                    <StaticImage className="hero-bg-img" src="../images/electrical-images/electrical-background-darker.png"/>
                </div>

                <div className='products-section'>
                    <h2 className='header-ani'>Electrical Products</h2>
                    <p className='products-text-ani'>We stock the best electrical components from trusted brands such as Skurka, Safran, Champion, Hartzell etc and also have a selection of specialty parts. If your fixed wing aircraft, commercial aircraft, helicopter, or other aircraft needs new electrical components or existing components repaired or overhauled get in touch today</p>
                    <ComponentsWrapper>
                        {components.map((component, i) => (
                            <div className={"component component-ani"+i}>
                                <img src={i === 0? Image3 : i === 1? Image1 : i === 3? Image4 : Image2}/>
                                <p><b>{component}</b></p>
                            </div>
                        ))}
                        
                    </ComponentsWrapper>
                    <div className="button-div products-buttons-ani">
                        <a href="/shop-parts">View All Products</a>
                        <a href="/contact-electrical">Contact Electrical</a>
                    </div>
                </div>

                <Services>
                {services.map((service, i) => (
                    <ServiceWrapper >
                        <img alt={service[0]+" featured image"} src={Placeholder} className={'img'+i}/>
                        <div className={'text'+i}>
                            <h2>{service[0]}</h2>
                            <p>{service[1]}</p>
                            <a href="/shop-parts">View All Products</a>
                        </div>
                    </ServiceWrapper>
                ))}
                </Services>
                
            </ElectricalWrapper>
            {/* <FeaturedProducts/> */}
        </Layout>
    )
}

export const Head = () => <Seo 
title="Electrical Parts New, Exchange or Overhaul | Central Aero" 
description="New Aircraft Parts from brands such as Skurka, Safran, Champion & Hartzell. We also offer repair/overhaul and exchange services on a large range of electrical components. "

/>