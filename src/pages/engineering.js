import React from 'react'
import Layout from "../components/layout.js"
import { Link } from "gatsby"
import styled from 'styled-components'
import Plane from "../images/aircrafts/central-aero-planes.jpg"
import Helicopter from "../images/aircrafts/central-aero-helicopter2.jpg"
import { DrumstickBite } from '@styled-icons/fa-solid'


const EngineeringWrapper = styled.div`
font-family: 'segoe ui';
padding-top: 100px;
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
    font-family: 'segoe ui';
    color: white;
}
p {
    max-width: 500px;
    font-family: 'segoe ui';
}
a { 
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
            margin: 0;
        }
        a {
            margin-right: 40px;
        }
        p {
            max-width: unset;
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
justify-content: space-around;
align-items: center;
height: 400px;
width: 100%;
position: relative;

h1 {
    z-index: 100;
    color: white !important;
    margin: 0 !important;
}
:before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-position: 50% 50%;
  background-image: url(${Plane});
  filter: brightness(10%);
}
`




const ServicesSection = styled.div`
display:flex;
/* justify-content: center; */
align-items: center;
width: 100%;
img {
    width: 50%;
    height: auto;
}
.intro-content {
/* position: sticky; */
height: 500px;
/* background-color: red; */
top: 200px;
margin-left: 100px;
 a {
    margin-right: 20px;
 }   
}
`

const Services = styled.div`
display: flex;
justify-content: center;
width: 80vw;
margin-top: 40px;
flex-wrap: wrap;
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
}
button {
    margin: 0;
}
`

let components = ["Starter Generators","Magnetos","Fuel Pumps","Alternators","Generator Control Units", "Voltage Regulators"]

let services = [
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



export default function Electrical(){
    return (
        <Layout invert={true}>
            <EngineeringWrapper>
                {/* <EngineeringHero>
                    <h1>CENTRAL AERO ENGINEERING</h1>
                </EngineeringHero> */}

                <ServicesSection>
                    <img src={Helicopter}/>
                    <div className='intro-content'>
                        <h2>Central Aero Engineering</h2>
                        <p><b>Providing Aircraft Engineering services for over 17+ years</b></p>
                        <p>At Central Aero Engineering we take pride in our collective experience and knowledge of Airframes, engines, both piston and turbine, and electrical systems. Because of this we're able to offer a wide range of services to keep our customers flying with the confidence their aircrafts are operating safely and efficiently. </p>
                        <p>We work with Airports, Tour Operators, Maintenance Facilities, Military, and Hobby Pilots from New Zealand and across the globe. So whether you have a touring helicopter that needs repairs, a transport plane, or would just like advice on a custom personal project we can help with all your Aircraft Engineering needs.</p>
                        <div>
                            <Link>Contact Engineering</Link>
                            <Link>Read FAQ</Link>
                        </div>
                    </div>
                </ServicesSection>
                <div className='stewart-systems'>
                        <div className='content-wrapper'>
                            <div className='content'>
                                <h2>New Zealand Stewart Systems Distributer: Call us for all your fabric covering materials</h2>
                                <p>We're proud to be the only Stewart Systems Distributor in New Zealand. </p>
                                <p>What is Stewart Systems? They're a innovative company based in Ohio USA setting the standard for aircraft fabric covering and painting technology for the 21st century. They manufacture non-hazardous, waterborne products for covering & painting aircrafts.</p>
                                <div>
                                    <Link>Learn More</Link>
                                    <Link>Contact Engineering</Link>
                                </div>
                            </div>
                        </div>
                        <img src={Helicopter}/>
                </div>
                <Services>
                    {services.map(service => (
                        <ServiceWrapper>
                            <img/>
                            <div>
                                <h2>{service[0]}</h2>
                                <p>{service[1]}</p>
                                <a>Learn More</a>
                            </div>
                        </ServiceWrapper>
                    ))}
                </Services>
               
            </EngineeringWrapper>
            {/* <FeaturedProducts/> */}
        </Layout>
    )
}