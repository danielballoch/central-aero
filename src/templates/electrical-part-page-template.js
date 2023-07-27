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
        justify-content: space-between;
        
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
            text-decoration: none;
            flex: 1;
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

const BlogPostTemplate = ({
  data: { previous, next, third, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout invert={true} location={location} title={siteTitle}>
        <Wrapper id="top">
        <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p>{post.frontmatter.description}</p>
                <hr></hr>
                <div className="button-div">
                    <Link to="/shop-parts" className="button1">View All Products</Link>
                    <Link to="/contact-electrical" className="button2">Contact Electrical</Link>
                </div>
            </header>
            <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            />
            <hr />
        </article>
        
        <nav className="blog-post-nav">
        <h3>Related Products</h3>
        <div>
                {previous && (
                    <Link to={previous.fields.slug}>
                        <img src="../images/CA-Logo-Square-Black.png"/>
                        <p><b>{previous.frontmatter.title}</b></p>
                    </Link>
                )}
                <br/>
                {next && (
                    <Link to={next.fields.slug}>
                        <img src="../images/CA-Logo-Square-Black.png"/>
                        <p><b>{next.frontmatter.title}</b></p>
                    </Link>
                )}
                <br/>
                {third && (
                    <Link to={third.fields.slug}>
                        <img src="../images/CA-Logo-Square-Black.png"/>
                        <p><b>{third.frontmatter.title}</b></p>
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
    $previousProductId: String
    $nextProductId: String
    $thirdProductId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        partnumber
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousProductId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextProductId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    third: markdownRemark(id: { eq: $thirdProductId }) {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
  }
`
