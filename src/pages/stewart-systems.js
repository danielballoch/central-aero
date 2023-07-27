import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import Seo from "../components/seo"


const Wrapper = styled.div`
/* padding-top: 200px; */
padding: 200px 20px 100px 20px;
font-family: 'segoe ui';
margin: auto;
max-width: 900px;
hr {
        margin: 50px 0;
    }
header {
    min-height: 300px;
    
}
.button-div {
    .button2 {
        margin-left: 40px;
    }
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
    border-radius: 8px;
    font-weight: 600;
    border: 3px solid black;
    text-decoration: none;
    transition: .3s;
    text-transform: uppercase;
    background-color: white;
    color: black;
    :hover {
        cursor: pointer;
        color: white;
        background-color: black;
    }
}
section {
    margin-top: 50px;
    .gatsby-resp-image-wrapper {
        margin: 0!important;
        max-width: 100%!important;
    }
    img {

    }
}
.video-sub-text {
    /* color: #888; */
    color: #a7a9ac;
    font-size: 14px;
    margin-top: 10px;

}
.iframe-container {
    position: relative;
    /* max-width: 860px;   */
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
}
@media(max-width: 500px){
    .button-div {
        display: flex;
        flex-direction: column;
        .button2 {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
`

const StewardSystems = () => {
  return (
    <Layout invert={true}>
        <Wrapper id="top">
        <article
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h1 itemProp="headline">New Zealand Stewart Systems Distributer</h1>
                <p>Central Aero is proud to be the only Stewart Systems Distributor in New Zealand. We stock a large range of their high quality, non-hazardous, waterborne products and materials for covering & painting aircrafts. Call today for all your aircraft covering and painting needs.</p>
                <hr></hr>
                <div className="button-div">
                    <Link to="/engineering#services" className="button1">View All Services</Link>
                    <Link to="/contact-engineering" className="button2">Contact Engineering</Link>
                </div>
            </header>
            <section
            itemProp="articleBody">
            <div className="iframe-container">
                <iframe className="iframe" width="860" height="484" src="https://www.youtube.com/embed/LxuXBozptsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <p className="video-sub-text">Watch: Mike Patey use Stewart Systems for the first time on his "Scrappy Build" Aircraft</p>
            <h2>Stewart Systems: Revolutionizing Aircraft Fabric Covering and Painting for the 21st Century</h2>
            <p>Stewart Systems is at the forefront of aircraft fabric covering and painting technology, setting a new standard for the industry. Gone are the days of using toxic and hazardous solvents for aircraft painting. With Stewart Systems' modern waterborne coatings technology, the process is now safe, non-hazardous, and environmentally friendly.</p>
            <h3>Advantages of Stewart Systems:</h3>
            <ol>
                <li><b>Safe to Use:</b> Unlike traditional methods, their fabric covering and painting products are non-toxic, non-flammable, and EPA compliant, ensuring the safety of both workers and the environment.</li>
                <li><b>Durable:</b> Thanks to their advanced waterborne coatings, the system boasts exceptional durability and longevity. Aircrafts treated with Stewart Systems have demonstrated over 20 years of service with no cracks and no loss of gloss.</li>
                <li><b>Lighter & More Flexible:</b> The waterborne technology allows for significant weight savings, making aircrafts up to 30% lighter than competitors using solvent-based systems. The thin coatings enhance flexibility without compromising overall durability.</li>
                <li><b>Fewer Materials Needed:</b> Though individual product costs may be slightly higher, the overall cost of the system is significantly reduced due to the need for fewer materials. This cost-effectiveness is further supported by standard quotes for various popular aircraft models, simplifying material estimation for projects.</li>
            </ol>
            <p>Despite the numerous benefits, some are still unaware of Stewart Systems' existence or are hesitant to break away from traditional solvent systems. However, embracing this 21st-century aircraft finishing technology offers superior results and a safer, eco-friendly approach.</p>
            <a href="https://stewartsystems.aero/" target="_blank">Check out more info on the official Stewart Systems Website</a>
            
            <p>Contact us today and join the aircraft engineering revolution with Stewart Systems!</p>
            
            
            </section>
        </article>
        <hr/>
        <div className="button-div">
                    <Link to="/engineering#services" className="button1">View all services</Link>
                    <Link to="/contact-engineering" className="button2">Contact Engineering</Link>
                </div>
      </Wrapper>
    </Layout>
  )
}

// export const Head = ({ data: { markdownRemark: post } }) => {
//   return (
//     <Seo
//       title={post.frontmatter.title}
//       description={post.frontmatter.description || post.excerpt}
//     />
//   )
// }

export default StewardSystems

