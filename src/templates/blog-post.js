import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Wrapper = styled.div`
margin-top: 100px;
max-width: 900px;
margin: 200px auto;
`

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout invert={true} location={location} title={siteTitle}>
        <Wrapper>
        <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
            </header>
            <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            />
            <hr />
        </article>
        
        <nav className="blog-post-nav">
        Other Products
        <br/>
                {previous && (
                    <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
                )}
                <br/>
                {next && (
                    <Link to={next.fields.slug}>
                    {next.frontmatter.title}
                </Link>
                )}
        </nav>
      </Wrapper>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title

      }
    }
  }
`
