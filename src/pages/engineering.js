import React from 'react'
import Layout from "../components/layout.js"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Plane from "../images/aircrafts/central-aero-planes.jpg"
import Helicopter from "../images/aircrafts/central-aero-helicopter2.jpg"
import { DrumstickBite } from '@styled-icons/fa-solid'
import HeroImage1 from "../images/engineering-images/EngineeringHero1.png" 
import HeroImage2 from "../images/engineering-images/EngineeringHero2.png"
import { StaticImage } from 'gatsby-plugin-image'



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
    
    .img {
        margin-left: 40px;
        width: 600px;
        height: 380px;
        
    }
}
`

const EngineeringHero = styled.div`
display: grid;
flex-direction: column; 
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
position: relative;
.main-content {
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
    max-height: 100%;
    z-index: 300;
    margin-bottom: 20px;
}
.hero-bg-img {
    grid-area: 1/1;
    position: relative;
    placeItems: center;
    display: grid;
    height: 100%;
    img {
        height: 100%;
        background-color: black;
        filter: brightness(20%);
    }
}
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
/* :before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-position: 50% 50%;
  background-image: url(${HeroImage1});
  background-size: contain;
  filter: brightness(20%);
} */
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



export default function Electrical({data}){
    const services = data.services.nodes
    console.log(data)
    console.log(services)

    

    return (
        <Layout>
            <EngineeringWrapper>
                <EngineeringHero>
                    <div className='main-content'>
                        <div className='center-content'>
                            <h1>CENTRAL AERO ENGINEERING</h1>
                            <p>Supporting New Zealand Airports, Pilots, and Hobbyist flyers with everything from maintenance and airworthiness reviews to air accident investigation and consultancy. Whatever your aviation need Central Aero Engineering has the knowledge and expertise to keep you flying safely.</p>
                            <div className='button-div'>
                                <Link className="button1" to="#services">View Our Services</Link><Link className="button2" to="/contact-engineering">Contact Engineering</Link>
                            </div>
                        </div>
                    </div>
                    <StaticImage placeholder="blurred" className="hero-bg-img" src="../images/engineering-images/EngineeringHero1.png"/>
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
                        <StaticImage className="img" placeholder='blurred' src="../images/aircrafts/central-aero-helicopter2.jpg"/>
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
            </EngineeringWrapper>
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