import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import {PortableText} from '@portabletext/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
    /* display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start; */
}
.blog-post-nav {
    div {
        display: flex;
        justify-content: flex-start;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            text-decoration: none;
            flex: 1;
            max-width: 250px;
            margin: 0 10px;
            :first-of-type {
                margin-left: 0!important;
            }
            :last-of-type {
                margin-right: 0!important;
            }
            img {
                max-width: 250px;
                max-height: 200px;
                background-color: lightgrey;
                
            }
            p {
                padding: 0px 5px;
                color: #333;
                margin-top: 10px;
            }
        }
    }
}
@media(max-width: 800px){
    .blog-post-nav {
        div {
            align-items: flex-start;
            a {
                margin-right: 10px;
                img {
                    /* height: 100px;
                    width: 125px; */
                }
            }
            a:last-of-type {
                margin-right: 0;
            }
            
        }
    }
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
    .blog-post-nav {
        div {
            a {
                p {
                    font-size: 14px;
                    line-height: 20px;
                }
            }
        }
    }
}
`


const BlogPostTemplate = (data) => {
    
//   const siteTitle = site.siteMetadata?.title || `Title`
    let component = data.data.component
    let componentRecommend1 = data.data.one
    let componentRecommend2 = data.data.two
    let componentRecommend3 = data.data.three
    console.log("product data: ", data)
    console.log(data.pageContext.componentRecommend1, data.pageContext.componentRecommend2, data.pageContext.componentRecommend3)
    const image = getImage(component.component_image.asset.gatsbyImage)
    
  return (
    <Layout invert={true}>
        <Wrapper id="top">
        <article
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h1 itemProp="headline">{component.component_title}</h1>
                <p>{component.blurb}</p>
                <hr></hr>
                <div className="button-div">
                    <Link to="/shop-parts#top" className="button1">View All Products</Link>
                    <Link to="/contact-electrical" className="button2">Contact Electrical</Link>
                </div>
                
            </header>
            <section>
                {/* <img className="gatsby-resp-image-wrapper" src={service.service_image.asset.url}/> */}
                <GatsbyImage image={image} alt="alt"/>
                <PortableText value={component.component_content}/>
            </section>
        </article>
        <nav className="blog-post-nav">
            <h3>Related Products</h3>
            <div>
                {componentRecommend1 && (
                    <Link to={"/shop-parts/"+componentRecommend1.component_path}>
                        {/* <img src="../images/CA-Logo-Square-Black.png"/> */}
                        <GatsbyImage image={componentRecommend1.component_image.asset.gatsbyImage} alt="alt"/>
                        <p><b>{componentRecommend1.component_title}</b></p>
                    </Link>
                )}
                <br/>
                {componentRecommend2 && (
                    <Link to={"/shop-parts/"+componentRecommend2.component_path}>
                        {/* <img src="../images/CA-Logo-Square-Black.png"/> */}
                        <GatsbyImage image={componentRecommend2.component_image.asset.gatsbyImage} alt="alt"/>
                        <p><b>{componentRecommend2.component_title}</b></p>
                    </Link>
                )}
                <br/>
                {componentRecommend3 && (
                    <Link to={"/shop-parts/"+componentRecommend3.component_path}>
                        {/* <img src="../images/CA-Logo-Square-Black.png"/> */}
                        <GatsbyImage image={componentRecommend3.component_image.asset.gatsbyImage} alt="alt"/>
                        <p><b>{componentRecommend3.component_title}</b></p>
                </Link>
                )}
            </div>
        </nav>
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $componentRecommend1: String
    $componentRecommend2: String
    $componentRecommend3: String
  ) {
        component: sanityElectricalComponents(id: {eq: $id}) {
            id
            component_title
            component_type
            component_subtext
            blurb
            component_image {
                asset {
                    gatsbyImage(width:860)
                }
            }
            component_content {
                _type
                style
                children {
                    text
                    _type
                }
            }
            _type
        }
        one: sanityElectricalComponents(id: {eq: $componentRecommend1}) {
            component_path
            component_title
            component_image {
                asset {
                    gatsbyImage(width:250)
                }
            }
        }
        two: sanityElectricalComponents(id: {eq: $componentRecommend2}) {
            component_path
            component_title
            component_image {
                asset {
                    gatsbyImage(width:250)
                }
            }
        }
        three: sanityElectricalComponents(id: {eq: $componentRecommend3}) {
            component_path
            component_title
            component_image {
                asset {
                    gatsbyImage(width:250)
                }
            }
        }

    }
`