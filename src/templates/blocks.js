import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import ThreeCol from '../components/blocks/3col'
import Feature from '../components/blocks/feature'
import CTA from '../components/blocks/cta'
import Hero from '../components/blocks/hero'

class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {post.frontmatter.blocks.map(block => {
          const key = block.title
          switch (block.component) {
            case '3col':
              return <ThreeCol key={key} block={block} />
            case 'feature':
              return <Feature key={key} block={block} />
            case 'cta':
              return <CTA block={block} key={key} />
            case 'hero':
              return <Hero block={block} key={key} />
            default:
              return ''
          }
        })}
      </Layout>
    )
  }
}

export default BlocksTemplate

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        blocks {
          component
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          title
          subtitle
          content
          orientation
          background
          button {
            url
            text
          }
          col1 {
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  srcSet
                }
              }
            }
          }
          col2 {
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  srcSet
                }
              }
            }
          }
          col3 {
            title
            content
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
