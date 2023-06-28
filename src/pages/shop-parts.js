import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ElectricalProducts = styled.div`
padding-top: 140px;
font-family: 'segoe ui';
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
input {
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
    width: 1000px;
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
}
.content-left{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    /* background-color: lightblue; */
    position: sticky;
    top: 125px;
    max-height: 700px;
    margin: 10px 5px;
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
}
.content-right {
display: flex;
justify-content: space-between;
margin-left: 5px;
display: flex;
flex-wrap: wrap;
width: 50%;
}
.part-item{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    width: 47%;
    /* background-color: lightblue; */
    margin: 10px 5px;
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
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
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
            <div className="products-top">
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
            </div>
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
                {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const partnumber = post.frontmatter.partnumber
                    return (
                        <Link to={post.fields.slug} itemProp="url" className="part-item">
                                <img/>
                                <p>{title}</p>
                                <p>part#: {partnumber}</p>
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          partnumber
          description
        }
      }
    }
  }
`