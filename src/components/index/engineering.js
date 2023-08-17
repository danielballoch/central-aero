import React, {useRef, useLayoutEffect} from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { gsap } from 'gsap';

const Wrapper = styled.div`
display: flex;
min-height: 100vh;
overflow: hidden; 
div {
    display: flex;
    flex-direction: column;
    width: 50%;
    .text-content {
        width: 100%;
        max-width: 600px;
        margin: auto;
        font-family: 'Helvetica';
        h2 {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 70px;
            font-weight: 700;
        }
        p {
            font-size: 16px;
        }
        .button-div {
            display: flex;
            flex-direction: row;
            width: 100%;
            a { 
                width: fit-content;
                padding: 20px;
                /* height: 60px; */
                border-radius: 8px;
                font-weight: 600;
                border: 3px solid black;
                background-color: rgba(0,0,0,0);
                color: black;
                text-decoration: none;
                transition: .3s;
                :hover {
                    cursor: pointer;
                    background-color: black;
                    color: white;
                }
                :nth-of-type(2){
                    margin-left: 40px;
                }
                :first-of-type{
                    background-color: black;
                    color: white;
                    border: 3px solid black;
                   
                    :hover {
                        background-color: black;
                        color: white;
                    }
                }

            }
        }
    }
}
.static-image {
    width: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    img {
        object-fit: cover; 
        object-position: left center;
    }
}
@media(max-width: 1240px){
flex-direction: column-reverse;
margin-bottom: 100px;
div, .static-image {
    width: 100%;
    margin: auto;
}
h2 {
    margin-top: 50px!important;
}
.text-content {
    padding: 0 20px !important;
}
}
@media(max-width: 700px){
    h2 {
        font-size: 40px!important;
        margin-top: 30px!important;
    }
    h3 {
        font-size: 20px!important;
        margin-top: 10px!important;
    }
    .button-div  {
        flex-direction: column!important;
        a {
            margin-bottom: 20px;
            margin-left: 0!important;
            padding: 20px 20px !important;
        }
        
    }
    .static-img {
        min-height: 400px!important;
        img {
            object-position: 0 50%!important;
        }
        /* img {
            height: 400px!important;
        } */
    }
}
`

export default function Hero(){
    const engineeringRef = useRef(null);
        useLayoutEffect(() => {
            let ctx = gsap.context(() => {
                const element = engineeringRef.current;
                let scrollSettings1 = {
                    trigger: ".text-box2",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings2 = {
                    trigger: ".img-ani2",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                setTimeout(()=>{
                    console.log("working?")
                    gsap.fromTo(element.querySelector(".img-ani2"),{opacity: 0, x: 100},{opacity: 1, x: 0, scrollTrigger: scrollSettings2});
                    gsap.fromTo(element.querySelector(".text-box2"),{opacity: 0, x: 100},{opacity: 1, x: 0, scrollTrigger: scrollSettings1});
                    // gsap.fromTo(element.querySelector(".m1"),{opacity: 0, x: -10,},{opacity: 1, x: 0, scrollTrigger: scrollSettings3});
                    // gsap.fromTo(element.querySelector(".m2"),{opacity: 0, x: -10,},{opacity: 1, x: 0, scrollTrigger: scrollSettings4});
                    
                },100)
            });
            return () => ctx.revert(); // <- cleanup!
    }, []);
    return(
        <Wrapper ref={engineeringRef}>
            <div className='text-box2'>
                <div className='text-content'>
                    <h2>Engineering</h2>
                    <h3>Maintenance, Refurbishment, Consultancy</h3>
                    <p>Central Aero Engineering takes pride in it's vast collective experience and knowledge in the aviation industry. The best solution in Hamilton for anything from minor maintenance to major refurbishment of your aircraft.</p>
                    <p>We support everything from Hot Air Balloons, Gliders, Microlights & Gyrocopters right through to Air transport aircrafts & helicopters and also offer consultancy services: Maintenance controllers, Air accident investigation, Auditing, and Airworthiness reviews.</p>
                    {/* <p>We also offer consultancy services to the industry as Maintenance controllers, Air accident investigation, Auditing, and Airworthiness reviews.</p>
                    <p>Whether you are a homebuilder, micro light owner or an air transport operator, fixed wing or helicopter, Central Aero Engineering can assist you with your aviation engineering requirements to get you flying and to keep you flying.</p> */}
                    <div className='button-div'>
                        <Link href="/contact-engineering">Contact Engineering</Link>
                        <Link href="/engineering">View Engineering Services</Link>
                    </div>
                </div>
            </div>
            <StaticImage className="static-img img-ani2" src="../../images/index-images/central-aero-engineering.jpg"/>
        </Wrapper>
    )
}