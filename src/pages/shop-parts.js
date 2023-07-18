import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image1 from "../images/electrical-images/AC-Generator.png"

const ElectricalProducts = styled.div`
padding-top: 140px;
font-family: 'segoe ui';
p {
    font-size: 16px;
}

button {
    min-width: 180px;
    height: fit-content;
    /* width: fit-content; */
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
input,textarea {
    font-size: 16px;
    padding: 5px;
}
select {
    background-color: white;
    padding: 7px;
    border: solid 1px #333;
    border-radius: 5px;
}
.wrapper{
    width: 1280px;
    margin: auto;
    
}
.products-top{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    /* background-color: lightblue; */
    margin: 5px;
    h1 {
        
        font-weight: 600;
        margin: 5px 5px 20px 5px;
    }
}
.filters {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
.content-wrapper{
    display: flex;
    justify-content: center;
    max-width: 1280px;
    width: 98vw;
}
.content-left{
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    /* background-color: lightblue; */
    position: sticky;
    top: 130px;
    max-height: 700px;
    margin: 120px 5px;
    max-width: 480px; 
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    h2 {
        margin: 10px 0;
    }
    button {
        margin: 10px 0;
    }
    label {
        margin: 5px 0;
    }
    textarea {
        min-height: 100px;
        height: auto;
        max-width: 413px;
    }
    @media(max-height: 860px){
        /* padding: 0 40px; */
        hight: fit-content;
        top: 10px;
        /* padding: 0 40px; */
    }
}
.content-right {
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 5px;
display: flex;
/* margin-top: 80px; */
flex-wrap: wrap;
/* max-width: 50%; */
width: 100%;
box-sizing: border-box;
@media(max-width: 1170px){
    width: 260px!important;
    .title-div {
        width: 260px!important;

    }
}
@media(max-width: 1304px){
     width: 560px;
    .title-div {
        width: 554px!important;

    }
    h3 {
        font-size: 20px;
    }
}
h3 {
    box-sizing: border-box;
    text-align: center;
    /* width: 100%; */
    /* width: fit-content; */
    background-color: black;
    color: white;
    padding: 20px 40px;
    /* margin: auto; */
    margin-left: 10px;
    margin-bottom: 0;
    margin-right: 10px;
    margin-top: 120px;
    font-weight: 400;
    
    font-family: "segoe ui";
    border-radius: 5px;
}
.title-div {
    width: 100%;
    box-sizing: border-box;
}
}
.part-item{
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    max-width: 260px;
    /* width: 31%; */
    /* background-color: lightblue; */
    margin: 10px 7px;
    text-decoration: none;
    img {
        
        height: 200px;
        width: 100%;
        background-color: lightgrey;
    }
    p {
        margin: 0;
        padding: 0 10px;
        color: #333;
        text-decoration: none;
        :last-of-type{
            margin-bottom: 10px;
        }
    }
}

`

const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteTitle = `Title`
  const repairProducts = data.repair.nodes
  const orderProducts = data.order.nodes 
console.log(data)

  if (repairProducts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} invert={true}>
        <ElectricalProducts>
        <div className="wrapper">
            {/* <div className="products-top">
                <h1>Shop Electrical Components</h1>
                <div className="filters">
                    <label>search parts:
                    <input type="search"/>
                    </label>
                    <label>filter type:
                        <select>
                            <option value="Magneto">Magnetos</option>
                            <option value="AC Generator">AC Generators</option>
                            <option value="DC Starter Generator">DC Starter Generators</option>
                            <option value="Alternator">Alternators</option>
                        </select>
                    </label>
                    <label>filter brand:
                        <select>
                            <option value="Safran">Safran</option>
                            <option value="Skurka">Skurka</option>
                            <option value="Hartzell">Hartzell</option>
                        </select>
                    </label>
                    
                    <label>sort order:
                        <select>
                            <option value="A-Z">Alphabetical (A-Z)</option>
                            <option value="option2">Alphabetical (Z-A)</option>
                        </select>
                    </label>
                    
                    <button>apply filters</button>
                </div>
            </div> */}
            <div className="content-wrapper">
                <div className="content-left">
                    <h2>Searching for a part?</h2>
                    <h2>Need a repair?</h2>
                    <p>Let our electrical team help you find what you need, fill out the form below or call us at 07 843 2936.</p>
                    <label>Name:</label>
                    <input type="text"></input>
                    <label>Email:</label>
                    <input type="text"/>
                    <label>Phone:</label>
                    <input type="text"/>
                    <label>Part Number/Description</label>
                    <textarea></textarea>
                    <button>SEND ENQUIRY</button>
                </div>
                <div className="content-right">
                <div className="title-div"><h3>COMPONENTS WE REPAIR AND OVERHAUL</h3></div>
                {repairProducts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const partnumber = post.frontmatter.partnumber
                    return (
                        <Link to={post.fields.slug} itemProp="url" className="part-item">
                                <img src={Image1}/>
                                <p><b>{title}</b></p>
                                <p>Including: {partnumber}</p>
                        </Link>
                    )
                })}
                <div className="title-div"><h3>COMPONENTS AVAILIBLE FOR ORDER</h3></div>
                {orderProducts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const partnumber = post.frontmatter.partnumber
                    return (
                        <Link to={post.fields.slug} itemProp="url" className="part-item">
                                <img src={Image1}/>
                                <p><b>{title}</b></p>
                                <p>In Stock</p>
                        </Link>
                    )
                })}
                </div>
            </div>
        </div>
        </ElectricalProducts>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="SHOP PARTS | CENTRAL AERO ELECTRICAL" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    repair: allMarkdownRemark(filter: { frontmatter: {type: {eq: "repair"}}}, sort: { frontmatter: {title: ASC }}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          type
          date(formatString: "MMMM DD, YYYY")
          title
          partnumber
          description
        }
      }
    }
    order: allMarkdownRemark(filter: { frontmatter: {type: {ne: "repair"}}}, sort: { frontmatter: {title: ASC }}) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MMMM DD, YYYY")
            title
            partnumber
            description
          }
        }
      }
  }
`