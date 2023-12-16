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
    siteUrl: `https://www.centralaero.co.nz`,
    social: {
      facebook: `https://www.facebook.com/profile.php?id=100054522066996`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WK9G68CZ",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,

      },
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-PH5ZE0DVQ0", // Google Analytics / GA
            "AW-CONVERSION_ID", // Google Ads / Adwords / AW
            "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {
            optimize_id: "OPT_CONTAINER_ID",
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Delays processing pageview events on route update (in milliseconds)
            delayOnRouteUpdate: 0,
          },
        }
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Central Aero",
          short_name: "Central Aero",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/icon.png", // This path is relative to the root of the site.
          // An optional attribute which provides support for CORS check.
          // If you do not provide a crossOrigin option, it will skip CORS for manifest.
          // Any invalid keyword or empty string defaults to `anonymous`
          crossOrigin: `use-credentials`,
        },
      },
    {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: "wuqx5iz0",
          dataset: "production",
          // To enable preview of drafts, copy .env-example into .env,
          // and add a token with read permissions
          token: process.env.SANITY_TOKEN,
          watchMode: true,
          overlayDrafts: false
        }
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.centralaero.co.nz',
        sitemap: 'https://www.centralaero.com/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    // {
    //     resolve: `gatsby-plugin-algolia`,
    //     options: {
    //       appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //       apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //       queries: require("./src/utils/algolia-queries")
    //     },
    // },
  ],
}
