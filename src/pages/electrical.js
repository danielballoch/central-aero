import React from 'react'
import Layout from "../components/layout.js"
import styled from 'styled-components'
import FeaturedProducts from "../components/featured-products"
import Search from "../components/search"
import Image1 from "../images/electrical-images/Magneto.png"
import Image2 from "../images/electrical-images/AC-Generator.png"
import Image3 from "../images/electrical-images/DC-Starter.png"
import Image4 from "../images/electrical-images/Alternator.png"
import HeroImage from "../images/electrical-images/electrical-background-darker.png"
import Placeholder from "../images/index-images/central-aero-electrical.jpg"
import { I } from '@styled-icons/fa-solid'
const searchIndices = [{ name: `Pages`, title: `Pages` }]



const ElectricalHero = styled.div`
display: flex;
flex-direction: column; 
justify-content: space-between;
align-items: center;
background-image: url(${HeroImage});
height: 100vh;
background-position: 50% 50%;
.hero-center-content {
    
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 900px;
    h1 {
        margin-top: -100px;
        z-index: 100;
        font-weight: 600;
        font-size: 68px;
        font-family: 'segoe ui';
        color: white;
    }
    p {
        color: white;
        font-size: 18px;
    }
}
`

const ElectricalWrapper = styled.div`
font-family: 'segoe ui';
/* padding-top: 100px; */
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
align-items: center;
min-height: 100vh;

h1 {
    margin-top: 100px;
    font-size: 60px;
    font-weight: 500;
    color: white;
    font-family: 'segoe ui';
}
p {
    max-width: 700px;
    text-align: center;
    font-family: 'segoe ui';
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
`

const ComponentsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
justify-content: center;
.component {
    text-align: center;
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
.track {
    display: flex;
    align-items: center;
    border: 3px solid black;
    background-color: black;
    h4 {
        font-family: 'segoe ui';
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
`

const Services = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const ServiceWrapper = styled.div`
display: flex;
flex-direction: row;
img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    object-position: 30% 50%;
}
div {
    display: flex;
    width: 500px;
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
`

let components = ["Starter Generators","Magnetos","Fuel Pumps","Alternators","Generator Control Units", "Voltage Regulators"]

let services = [
    ["Buy Components New","We have brand new products stocked on shelves for small-large Planes, Helicopters and other Aircrafts. Give us a call/email or send a form including the components you need and we'll give you a fair quote or offer any relevant advice or recommendations  to get you up and flying again."],
    ["Repair/Overhaul","If you want to save some cash you can send in your part and we'll examine and repair to get it back up to a safe and reliable standard. This will mean a slightly longer wait time, generally blank - blank. Let us know your needed parts and we'll get back to you with a price and time estimate promptly."],
    ["Exchange Components","If you have a inspection due or need your parts quickly we offer component exchanges. Simply send in your component and we'll send a new or overhauled product back right away. This will be sligntly cheaper than buying a product new and just as fast!"],
    ["Custom Orders","If you need unique part or a component we don't have in stock we're happy to research what's needed and order on your behalf or advice on your options. If you don't see the product your looking for on our website simply give us a call/email or fill out a contact form with a description of the component you need."]]


export default function Electrical(){
    return (
        <Layout>
            <ElectricalWrapper>
                <ElectricalHero>
                <div/>
                <div className='hero-center-content'>
                    <h1>CENTRAL AERO ELECTRICAL</h1>
                    <p>Central Aero Electrical is a CAANZ Part 145 Approved Repair and Overhaul Facility. We have a large range of high quality components and offer quick turnarounds.<br/>Search Electrical Components for Exchange, Repair, or Overhaul.</p>
                    <p></p>
                    <Search indices={searchIndices}/>
                </div>
                    <Marquee>
                        <div className='track'>
                            <h4>CAANZ Part 145 Approved Repair and Overhaul Facility</h4>
                            <div className='dash'/>
                            <h4>1 YEAR WARRENTY ON ALL PRODUCTS/SERVICES</h4>
                            <div className='dash'/>
                            <h4>PROMPT TURNAROUND TIME FOR ALL REPAIRS AND OVERHAULS</h4>
                            <div className='dash'/>
                            <h4>CAANZ Part 145 Approved Repair and Overhaul Facility</h4>
                            <div className='dash'/>
                            <h4>1 YEAR WARRENTY ON ALL PRODUCTS/SERVICES</h4>
                            <div className='dash'/>
                            <h4>PROMPT TURNAROUND TIME FOR ALL REPAIRS AND OVERHAULS</h4>
                            <div className='dash'/>
                        </div>
                    </Marquee>
                </ElectricalHero>

                <div className='products-section'>
                    <h2>Electrical Products</h2>
                    <p>We stock the best electrical components from trusted brands such as SKURKA, Safran, Champion, Hartzell etc and also have a selection of specialty parts. If your fixed wing/touring planes, commercial planes, helicopters, or other aircrafts need new electrical components or existing components repaired/overhauled get in touch today.</p>
                    <ComponentsWrapper>
                        {components.map((component, i) => (
                            <div className='component'>
                            <img src={i === 0? Image1 : i === 1? Image2 : i === 2? Image3 : Image4}/>
                                <p><b>{component}</b></p>
                            </div>
                        ))}
                        
                    </ComponentsWrapper>
                    <div className="button-div">
                        <a href="/shop-parts">View All Products</a>
                        <a href="/contact-electrical">Contact Electrical</a>
                    </div>
                </div>

                <Services>
                {services.map(service => (
                    <ServiceWrapper>
                        <img src={Placeholder}/>
                        <div>
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