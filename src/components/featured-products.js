import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Link} from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
max-width: 1200px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
background-color: rgba(255,0,0,0.3)
`

const ProductsWrapper = styled.div`
display: flex;
justify-content: center;
.product-div {
    width: 300px;
    margin: 40px;
    background-color: rgba(0,255,0,0.3)
}
`


export default function FeaturedProducts(){
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 3) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    `)
    const posts = data.allMarkdownRemark.nodes
    
    if (posts.length === 0) {
      return (
        <div>
          <p>
            No products found.
          </p>
        </div>
      )
    }
      return (
        <Wrapper>
            <h1>Featured Products:</h1>
            <ProductsWrapper>
                    {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    return (
                        <div key={post.fields.slug} className="product-div">
                        <article
                            className="post-list-item"
                            itemScope
                            itemType="http://schema.org/Article"
                        >
                            <header>
                            <h2>
                                <Link to={post.fields.slug} itemProp="url">
                                <span itemProp="headline">{title}</span>
                                </Link>
                            </h2>
                            <small>{post.frontmatter.date}</small>
                            </header>
                            <section>
                            <p
                                dangerouslySetInnerHTML={{
                                __html: post.frontmatter.description || post.excerpt,
                                }}
                                itemProp="description"
                            />
                            </section>
                        </article>
                        </div>
                    )
                    })}
            </ProductsWrapper>
            <Link to="/electrical-products"><button>View All</button></Link>
        </Wrapper>
      )
}