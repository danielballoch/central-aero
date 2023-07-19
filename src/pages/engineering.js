import React from 'react'
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Plane from "../images/aircrafts/central-aero-planes.jpg"
import Helicopter from "../images/aircrafts/central-aero-helicopter2.jpg"
import { DrumstickBite } from '@styled-icons/fa-solid'
import HeroImage1 from "../images/engineering-images/EngineeringHero1.png" 
import HeroImage2 from "../images/engineering-images/EngineeringHero2.png"


const EngineeringWrapper = styled.div`
font-family: 'segoe ui';
/* padding-top: 100px; */
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
align-items: center;
min-height: 100vh;
#services {
    padding-top: 40px;
}
p {
    max-width: 500px;
    font-family: 'segoe ui';
}
.button1 { 
    width: fit-content;
    padding: 10px 20px;
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
}
.button2{
    width: fit-content;
    padding: 10px 20px;
    /* height: 60px; */
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    background-color: white;
    color: black;
    :hover {
        color: white;
        background-color: black;
    }
}
.products-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
    height: auto;
    
}

.stewart-systems {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    .content-wrapper {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content {
        width: 580px;
        h2 {
            margin-top: 0;
        }
        a {
            margin-right: 40px;
        }
        p {
            max-width: unset;
            margin-bottom: 5px;
        }
        div {
            /* height: 50px; */
            display: flex;
            margin-top: 40px;
        }
    }
    
    img {
        margin-left: 40px;
        width: 600px;
        height: 380px;
        
    }
}
`

const EngineeringHero = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
position: relative;
.center-content {
    text-align: center;
    max-width: 900px;
    z-index: 100;
    h1 {
    z-index: 100;
    font-weight: 600;
    color: white !important;
    margin-top: 0 !important;
    font-size: 68px;
    font-family: 'segoe ui';
    color: white;
    }
    p {
        padding: 0 20px;
        max-width: unset;
        color: white;
        font-size: 19px;
        width: 100%;
    }
    .button-div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            a { 
                scroll-behavior: smooth;
                width: fit-content;
                padding: 20px;
                /* height: 60px; */
                border-radius: 8px;
                font-weight: 600;
                border: 3px solid white;
                background-color: rgba(0,0,0,0);
                color: white;
                text-decoration: none;
                transition: .3s;
                :hover {
                    cursor: pointer;
                    background-color: white;
                    color: black;
                }
                :nth-of-type(2){
                    margin-left: 40px;
                }
                :first-of-type {
                    background-color: white;
                    color: black;
                }
            }
        }
}
:before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-position: 50% 50%;
  background-image: url(${HeroImage1});
  background-size: contain;
  filter: brightness(20%);
}
`

const Services = styled.div`
display: flex;
justify-content: left;
max-width: 1170px;
margin-top: 40px;
flex-wrap: wrap;
.no-style {
    text-decoration: none;
    p {
        color: #333;
    }
}
`
const ServiceWrapper = styled.div`
display: flex;
flex-direction: column;
width: 350px;
margin: 40px 20px;
img {
    width: 350px;
    height: 300px;
}
div {
    display: flex;
    width: 350px;
    justify-content: center;
    flex-direction: column;
}
h2 {
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 26px;
    /* font-weight: 500; */
    color: #333;
}
p {
    text-align: left;
    font-size: 16px;
}
button {
    margin: 0;
}
`

let components = ["Starter Generators","Magnetos","Fuel Pumps","Alternators","Generator Control Units", "Voltage Regulators"]

let oldServices = [
    ["Aeroplanes","Micro-light or GA – no problem, stressed skin, tubular, wood & fabric, composite, no matter what type you own, Private or Air transport operations, we can help you. "],
    ["Helicopters","Piston or Turbine, Robinson, Schwizer/Hughes, MD, Bell and Eurocopter, MBB BO105, Tracking and balancing, Central Aero Engineering has the experience you need. "],
    ["Aircraft import, assembly & C of A issue","Are you looking at purchasing an aeroplane or helicopter, use our experience to help you make an informed choice – our knowledge of helicopters in particular is of benefit to you, ALWAYS have a pre purchase inspection done when buying an aircraft. Call us for advice if you are considering buying an aeroplane or helicopter."],
    ["Airframe repairs","If you have damaged your aeroplane or helicopter we have the equipment and skills to put it right and get you flying again, no job too big or small."],
    ["Airworthiness reviews and conformity inspections","Annual review of airworthiness inspections for your aeroplane or helicopter are not a problem. Conformity inspections or modifications, we can help you with your certification needs. Talk with us about pre audit checks, and help avoid needless findings."],
    ["Amateur built and Experimental aircraft and helicopters","We offer assistance to amateur and experimental constructors in the form of technical advice, construction assistance, C of A issue, ongoing maintenance services, engineering services, rebuild, maintenance and repairs."],
    ["Aviation tooling supplies","If specialist aviation tooling is required, contact us for all you're tooling needs, from Clecos to test equipment, you name it, and we can find it."],
    ["Hot Air Baloons","We can service, maintain, inspect and repair all balloons. "],
    ["Electrical Systems","For installations, modifications, repairs and fault finding, talk to us."],
    ["Piston Engines","From the 0200 to the IO720 , Rotax, Lycoming, Continental, radials. Sound advice, engine maintenance and repairs are available. Give us a call."],
    ["Turbine Engines","Qualified and experienced maintenance for Allison 250 series C18 to C47, LT101 series and Arriel series from the 1 through to the 2B, Arrius 2F, PT6 services, scheduled maintenance, to module changes, we know what we are doing. Servicing for PT6 & Allison 250 fuel nozzles now available."],
    ["Gyrocopters ","Auto gyro annual condition inspections, maintenance and repairs can be carried out. Our decades of Rotor craft experience will be of huge benefit to you."],
    ["Independent maintenance auditing ","Central Aero Engineering can offer an independent audit service of your maintenance. This improves your safety and reliability by helping identify any deficiencies before a problem arises or CAA issue a finding. This can also help identify areas around compliance with AD's which are not applicable and are costing you money for nothing."],
    ["Maintenance controlling","We can give your machine and operation CAA approved experienced maintenance controlling and planning services for your private machine or Air Transport operation, our extensive knowledge is your gain."],
    ["Microlight-aircraft","Inspection authorisation for annual condition inspections and professional care and repairs for your micro-light and engines. Engine “on condition” programme entry inspections, today's high performance micro lights and you the operator deserve sound maintenance and sound advice."],
    ["Modifications (design changes)","If you have an idea come and see us – we can deal with your requirements from a concept right through to approval, our well equipped workshop enables us to fabricate almost anything at our Hamilton facility, the way you want it."],
    ["Pre-purchase inspections","Are you looking at purchasing an aeroplane, balloon or helicopter, use our experience to help you make an informed choice. Our knowledge of helicopters in particular is of benefit to you, ALWAYS have a pre-purchase inspection done when buying an aircraft."],
    ["Dynamic Propeller balancing services ","Static balancing is only half the story. Full propeller balancing services are available with highly experienced engineers and state of the art digital balancing gear. Sort your vibration problems out and be amazed how smooth your machine can be, this will be some of the cheapest and best maintenance you will ever do."],
    ["Welding services ","Central Aero Engineering offers an experienced welding service using Gas and TIG systems, specialising in light alloy welding, fabrication services and exhaust system repairs. Dropped your fertiliser bucket? We can help."],
    ["Accident and Incident investigation","Independent accident and incident investigation services. "]
]



export default function Electrical({data}){
    const services = data.services.nodes
    console.log(data)
    console.log(services)
    return (
        <Layout>
            <EngineeringWrapper>
                <EngineeringHero>
                    <div className='center-content'>
                        <h1>CENTRAL AERO ENGINEERING</h1>
                        <p>Supporting New Zealand Airports, Pilots, and Hobbyist flyers with everything from maintenance and airworthiness reviews to air accident investigation and consultancy. Whatever your aviation need Central Aero Engineering has the knowledge and expertise to keep you flying safely.</p>
                        <div className='button-div'>
                            <Link className="button1" to="#services">View Our Services</Link><Link className="button2" to="/contact-engineering">Contact Engineering</Link>
                        </div>
                    </div>
                    <div className='bottom-arrow'>Bottom Arrow</div>
                </EngineeringHero>

                <div className='stewart-systems'>
                        <div className='content-wrapper'>
                            <div className='content'>
                                <h2>New Zealand Stewart Systems Distributer: Call us for all your fabric covering materials</h2>
                                {/* <hr/> */}
                                <p><b>We're proud to be the only Stewart Systems Distributor in New Zealand.</b></p>
                                <p>What is Stewart Systems? They're a innovative company based in Ohio USA setting the standard for aircraft fabric covering and painting technology for the 21st century. They manufacture non-hazardous, waterborne products for covering & painting aircrafts.</p>
                                <div>
                                    <Link className="button1">Learn More</Link>
                                    <Link className="button2" to="/contact-engineering">Contact Engineering</Link>
                                </div>
                            </div>
                        </div>
                        <img src={Helicopter}/>
                </div>
                <h2 id="services">Our Engineering Services</h2>
                <Services >
                    {services.map(service => (
                        <Link className="no-style" to={"/"+service.frontmatter.path + "#top"}>
                            <ServiceWrapper>
                                <img src={Plane}/>
                                <div>
                                    <h2>{service.frontmatter.title}</h2>
                                    <p>{service.frontmatter.body}</p>
                                    <a className='button1'>Learn More</a>  
                                </div>
                            </ServiceWrapper>
                        </Link>
                    ))}
                </Services>
                {/* <Services >
                    {oldServiceservices.map(service => (
                        <ServiceWrapper>
                            <img src={Plane}/>
                            <div>
                                <h2>{service[0]}</h2>
                                <p>{service[1]}</p>
                                <a>Learn More</a>

                                
                            </div>
                        </ServiceWrapper>
                    ))}
                </Services> */}
               
            </EngineeringWrapper>
            {/* <FeaturedProducts/> */}
        </Layout>
    )
}




export const pageQuery = graphql`
  {
    services: allMarkdownRemark(filter: { frontmatter: {type: {eq: "service"}}}, sort: { frontmatter: {title: ASC }}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          type
          title
          body
          path
        }
      }
    }
  }
`