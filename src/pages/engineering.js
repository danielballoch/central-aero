import React, {useRef, useLayoutEffect} from 'react'
import Layout from "../components/layout.js"
import { Link, graphql} from "gatsby"
import styled from 'styled-components'
import Plane from "../images/aircrafts/central-aero-planes.jpg"
import { StaticImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const EngineeringWrapper = styled.div`
/* font-family: 'segoe ui';
font-family: "Helvetica"; */
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
    /* font-family: "Helvetica"; */
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
    min-height: 800px;
    .content-wrapper {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content {
        max-width: 600px;
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
@media(max-width: 1280px){
    .stewart-systems {
        flex-direction: column-reverse;
        margin-top: 0;
        .img {
            max-width: 100vw;
            margin-left: 0;
        }
        .content-wrapper {
            width: 100%;
        }
        .content {
            margin-top: 30px;
        }
    }
}
@media(max-width: 650px){
    #services {
        margin-bottom: 0;
        margin-top: 120px;
        padding: 0 20px;
    }
    .stewart-systems {
        max-width: 100vw;
        padding: 0 20px;
        .button-div {
            flex-direction: column;
            .button2 {
                margin-top: 30px;
            }
        }
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
    /* font-family: 'segoe ui', "Helvetica"; */
    color: white;
    }
    p {
        padding: 0 20px;
        max-width: unset;
        color: white;
        font-size: 19px;
        /* font-family: "Helvetica"; */
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
@media(max-width: 540px){
    .center-content {
        h1 {
            margin-top: 30px!important;
            font-size: 40px;
            padding: 0 20px;
        }
        p {
            font-size: 14px;
        }
        .button-div {
            flex-direction: column;
            align-items: center;
            font-size: 14px;
            .button2 {
                margin-top: 20px;
                margin-left: 0!important;
            }
        }
    }
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
@media(max-width: 540px){
    margin-top: 0;
    a:first-of-type {
        div {
            margin-top: 20px;
        }
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
    gsap.registerPlugin(ScrollTrigger);
    const engineeringRef = useRef(null);
        useLayoutEffect(() => {
            let ctx = gsap.context(() => {
                const element = engineeringRef.current;
                let scrollSettings1 = {
                    trigger: ".text-box3",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings2 = {
                    trigger: ".img-ani3",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings3 = {
                    trigger: ".header-ani",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                setTimeout(()=>{
                    gsap.fromTo(element.querySelector(".img-ani3"),{opacity: 0, x: -100},{opacity: 1, x: 0, scrollTrigger: scrollSettings2});
                    gsap.fromTo(element.querySelector(".text-box3"),{opacity: 0, x: -100},{opacity: 1, x: 0, scrollTrigger: scrollSettings1});
                    gsap.fromTo(element.querySelector(".header-ani"),{opacity: 0, y: 100},{opacity: 1, y: 0, scrollTrigger: scrollSettings3});
                    for (let i = 0; i < services.length; i++){
                        let className = ".service-ani"+i;
                        let scrollSettings = {
                            trigger: className,
                            start: "top bottom",
                            toggleActions: "play none none reverse",
                            // markers: true
                        };
                        gsap.fromTo(element.querySelector(className),{opacity: 0, y: 100,},{opacity: 1, y: 0, scrollTrigger: scrollSettings});
                    }
                    // gsap.fromTo(element.querySelector(".m2"),{opacity: 0, x: -10,},{opacity: 1, x: 0, scrollTrigger: scrollSettings4});
                    
                },100)
                
            });
            return () => ctx.revert(); // <- cleanup!
    }, []);
    return (
        <Layout >
            <EngineeringWrapper id="top" ref={engineeringRef}>
                <EngineeringHero>
                    <div className='main-content '>
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
                    <div className='content-wrapper text-box3'>
                        <div className='content'>
                            <h2>New Zealand Stewart Systems Distributer: Call us for all your fabric covering materials</h2>
                            {/* <hr/> */}
                            <p><b>We're proud to be the only Stewart Systems Distributor in New Zealand.</b></p>
                            <p>What is Stewart Systems? They're an innovative aircraft fabric covering and painting technology company setting the standard for the 21st century. Based in Ohio USA they manufacture non-hazardous, waterborne products for covering & painting aircrafts.</p>
                            <div className='button-div'>
                                <Link className="button1" to="/stewart-systems">Learn More</Link>
                                <Link className="button2" to="/contact-engineering">Contact Engineering</Link>
                            </div>
                        </div>
                    </div>
                    <StaticImage className="img img-ani3" placeholder='blurred' src="../images/aircrafts/central-aero-helicopter2.jpg"/>
                </div>
                <h2 id="services" className='header-ani'>Our Engineering Services</h2>
                <Services>
                    {services.map((service, i) => (
                        <Link className="no-style" to={"/"+service.frontmatter.path + "#top"}>
                            <ServiceWrapper className={"service-ani"+i}>
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