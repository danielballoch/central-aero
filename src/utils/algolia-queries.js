const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `content`
const indexName = `Pages`

const pageQuery = `{
  pages: allSanityElectricalComponents{
    edges {
      node {
        id
        component_title
        component_subtext
        component_path
        blurb
        internal {
            contentDigest
            type
            owner
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, component_title, component_subtext,...rest } }) {
  return {
    objectID: id,
    title: component_title,
    excerpt: component_subtext,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
  },
]

module.exports = queries