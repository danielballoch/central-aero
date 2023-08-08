// import * as React from "react"
// import { Link, graphql } from "gatsby"
// import styled from "styled-components"
// import Layout from "../components/layout"
// // import Seo from "../components/seo"


// const Wrapper = styled.div`
// /* padding-top: 200px; */
// padding: 200px 20px 100px 20px;
// font-family: 'segoe ui';
// margin: auto;
// max-width: 900px;
// hr {
//         margin: 50px 0;
//     }
// header {
//     min-height: 300px;
    
// }
// .button-div {
//     .button2 {
//         margin-left: 40px;
//     }
// }
// .button1 { 
//     width: fit-content;
//     padding: 10px 20px;
//     /* height: 60px; */
//     border-radius: 8px;
//     font-weight: 600;
//     border: 3px solid black;
//     background-color: black;
//     color: white;
//     text-decoration: none;
//     transition: .3s;
//     text-transform: uppercase;
//     :hover {
//         cursor: pointer;
//     }
// }
// .button2{
//     width: fit-content;
//     padding: 10px 20px;
//     /* height: 60px; */
//     border-radius: 8px;
//     font-weight: 600;
//     border: 3px solid black;
//     text-decoration: none;
//     transition: .3s;
//     text-transform: uppercase;
//     background-color: white;
//     color: black;
//     :hover {
//         cursor: pointer;
//         color: white;
//         background-color: black;
//     }
// }
// section {
//     margin-top: 50px;
//     .gatsby-resp-image-wrapper {
//         margin: 0!important;
//         max-width: 100%!important;
//     }
//     img {

//     }
//     /* display: flex;
//     flex-direction: column;
//     justify-content: left;
//     align-items: flex-start; */
// }
// @media(max-width: 500px){
//     .button-div {
//         display: flex;
//         flex-direction: column;
//         .button2 {
//             margin-left: 0;
//             margin-top: 20px;
//         }
//     }
// }
// `

// const BlogPostTemplate = ({
//   data: { previous, next, site, markdownRemark: post },
//   location,
// }) => {
//   const siteTitle = site.siteMetadata?.title || `Title`

//   return (
//     <Layout invert={true} location={location} title={siteTitle}>
//         <Wrapper id="top">
//         <article
//             itemScope
//             itemType="http://schema.org/Article"
//         >
//             <header>
//                 <h1 itemProp="headline">{post.frontmatter.title} Service Page</h1>
//                 <p>{post.frontmatter.body}</p>
//                 <hr></hr>
//                 <div className="button-div">
//                     <Link to="/engineering#services" className="button1">View All Services</Link>
//                     <Link to="/contact-engineering" className="button2">Contact Engineering</Link>
//                 </div>
                
//             </header>
//             <section
//             dangerouslySetInnerHTML={{ __html: post.html }}
//             itemProp="articleBody"
//             />
//         </article>
//         <hr/>
//         <div className="button-div">
//                     <Link to="/engineering#services" className="button1">View all services</Link>
//                     <Link to="/contact-engineering" className="button2">Contact Engineering</Link>
//                 </div>
//       </Wrapper>
//     </Layout>
//   )
// }

// // export const Head = ({ data: { markdownRemark: post } }) => {
// //   return (
// //     <Seo
// //       title={post.frontmatter.title}
// //       description={post.frontmatter.description || post.excerpt}
// //     />
// //   )
// // }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         description
//         body
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title

//       }
//     }
//   }
// `
