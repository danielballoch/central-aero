require("dotenv").config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Central Aero`,
    author: {
      name: `Daniel Balloch - Ordinary Digital`,
      summary: `Central Aero Website for Hamish Ross and Paul Waterhouse`,
    },
    description: `Central Aero is made up of two sister companies, Electrical run by Hamish Ross, and Engineering run by Paul Waterhouse. Working out of the Super Air Hanger near Hamilton Airport, their teams have provided quality parts and services to New Zealand and Overseas Pilots for over 17+ years.

    With knowledge and expertise in Commercial Air transport Aircrafts, Fixed Wing Planes, Helicopters right through to Hot Air Balloons, Gliders, Microlights & Gyrocopters - Central Aero is capable and ready to help with your engineering and electrical aviation needs.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      facebook: `https://www.facebook.com/profile.php?id=100054522066996`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: "wuqx5iz0",
          dataset: "production",
          // To enable preview of drafts, copy .env-example into .env,
          // and add a token with read permissions
          token: process.env.SANITY_TOKEN,
          watchMode: true,
          overlayDrafts: true
        }
    },
    {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_ADMIN_KEY,
          queries: require("./src/utils/algolia-queries")
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/service-pages`,
        name: `service-pages`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/products`,
          name: `products`,
        },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: [`auto`],
            placeholder: `blurred`,
            quality: 100,
            breakpoints: [750, 1080, 1366, 1920],
            backgroundColor: `transparent`,
          }
        }
      },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    
  ],
}
