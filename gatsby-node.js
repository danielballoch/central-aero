//Working create page

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
// const blogPost = path.resolve(`./src/templates/blog-post.js`)
const blogPost = path.resolve(`./src/templates/service-page-template.js`);
const productPage = path.resolve(`./src/templates/blog-post.js`);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      services: allMarkdownRemark(filter: { frontmatter: {type: {eq: "service"}}}, sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            path
          }
        }
      }
      products: allMarkdownRemark(filter: { frontmatter: {type: {in: ["order","repair"]}}}, sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.services.nodes
  const products = result.data.products.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
            createPage({
                path: post.frontmatter.path,
                component: blogPost,
                context: {
                  id: post.id,
                  previousPostId,
                  nextPostId,
                },
              })
    })
  }
  if (products.length > 0) {
    products.forEach((product, index) => {
      const previousProductId = index === 0 ? null : products[index - 1].id
      const nextProductId = index === products.length - 1 ? null : products[index + 1].id
            createPage({
                path: product.fields.slug,
                component: productPage,
                context: {
                  id: product.id,
                  previousProductId,
                  nextProductId,
                },
              })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}






// //Working create page

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// // Define the template for blog post
// const blogPost = path.resolve(`./src/templates/blog-post.js`)

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Get all markdown blog posts sorted by date
//   const result = await graphql(`
//     {
//       allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
//         nodes {
//           id
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       result.errors
//     )
//     return
//   }

//   const posts = result.data.allMarkdownRemark.nodes

//   // Create blog posts pages
//   // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   // `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostId = index === 0 ? null : posts[index - 1].id
//       const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
//             createPage({
//                 path: post.fields.slug,
//                 component: blogPost,
//                 context: {
//                   id: post.id,
//                   previousPostId,
//                   nextPostId,
//                 },
//               })
//     })
//   }
// }

// /**
//  * @type {import('gatsby').GatsbyNode['onCreateNode']}
//  */
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// /**
//  * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
//  */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       partnumber: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }

// //end












//Trying to join both

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// // Define the template for blog post
// const blogPost = path.resolve(`./src/templates/blog-post.js`)
// const servicePage = path.resolve(`./serc/templages/servicepage-template.js`)

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Get all markdown blog posts sorted by date
//   const result = await graphql(`
//     {
//       products: allMarkdownRemark(filter: { frontmatter: {type: {in: ["repair", "order"]}}},sort: { frontmatter: { date: ASC } }, limit: 1000) {
//         nodes {
//           id
//           fields {
//             slug
//           }
//         }
//       }
//       services: allMarkdownRemark(filter: { frontmatter: {type: {eq: "service"}}},sort: { frontmatter: { date: ASC } }, limit: 1000) {
//         nodes {
//           id
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       result.errors
//     )
//     return
//   }

//   const posts = result.data.products.nodes
//   const services = result.data.services.nodes

//   // Create blog posts pages
//   // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   // `context` is available in the template as a prop and as a variable in GraphQL

//     if (posts.length > 0) {
//         posts.forEach((post, index) => {
//         const previousPostId = index === 0 ? null : posts[index - 1].id
//         const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
//                 createPage({
//                     path: post.fields.slug,
//                     component: servicePage,
//                     context: {
//                     id: post.id,
//                     previousPostId,
//                     nextPostId,
//                     },
//                 })
//         })
//     }

//     // if (services.length > 0) {
//     //     services.forEach((service, index) => {
//     //     const previousServiceId = index === 0 ? null : services[index - 1].id
//     //     const nextServiceId = index === services.length - 1 ? null : services[index + 1].id
//     //     createPage({
//     //         path: service.fields.slug,
//     //         component: blogPost,
//     //         context: {
//     //         id: service.id,
//     //         previousServiceId,
//     //         nextServiceId,
//     //         },
//     //     })
//     //     })
//     // }


// /**
//  * @type {import('gatsby').GatsbyNode['onCreateNode']}
//  */
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// /**
//  * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
//  */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       partnumber: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
// }
