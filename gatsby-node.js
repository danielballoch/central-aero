//Working create page

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const serviceTemplate = path.resolve(`./src/templates/service-template-sanity.js`)
const productTemplate = path.resolve(`./src/templates/product-template-sanity.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      engineeringsanity: allSanityEngineeringServices {
        nodes {
            id
            service_title
            service_path
        }
      }
      electricalsanity: allSanityElectricalComponents {
        nodes {
            id
            component_title
            component_path
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
//   const services = result.data.services.nodes
//   const products = result.data.products.nodes
  const engineeringsanity = result.data.engineeringsanity.nodes
  const electricalsanity = result.data.electricalsanity.nodes

//   Create blog posts pages
//   But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   `context` is available in the template as a prop and as a variable in GraphQL
  if (electricalsanity.length > 0) {
    electricalsanity.forEach((post, index) => {

        //setup to either use the next three items or rotate to the first three
        let componentRecommend1 = null; 
        if (index + 1 < electricalsanity.length){componentRecommend1 = electricalsanity[index+1].id} else if (1 < electricalsanity.length){componentRecommend1 = electricalsanity[2].id}
        let componentRecommend2 = null;
        if (index + 2 < electricalsanity.length){componentRecommend2 = electricalsanity[index+2].id} else if (1 < electricalsanity.length){componentRecommend2 = electricalsanity[1].id}
        let componentRecommend3 = null;
        if (index + 3 < electricalsanity.length){componentRecommend3 = electricalsanity[index+3].id} else if (1 < electricalsanity.length){componentRecommend3 = electricalsanity[0].id}

            createPage({
                path: "shop-parts/"+post.component_path,
                component: productTemplate,
                context: {
                  id: post.id,
                  componentRecommend1,
                  componentRecommend2,
                  componentRecommend3
                },
              })
    })
  }
  if (engineeringsanity.length > 0) {
    engineeringsanity.forEach((post, index) => {
      const previousPostId = index === 0 ? null : engineeringsanity[index - 1].id
      const nextPostId = index === engineeringsanity.length - 1 ? null : engineeringsanity[index + 1].id
            createPage({
                path: post.service_path,
                component: serviceTemplate,
                context: {
                  id: post.id,
                  previousPostId,
                  nextPostId
                },
              })
    })
  }
}