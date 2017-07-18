import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges", [])


    posts.forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path
        const { subtitle, path, date } = post.node.frontmatter

        const formattedDate = new Date(Date.parse(date)).toLocaleDateString("en-US")

        pageLinks.push(
          <li key={path} style={{ marginBottom: rhythm(1 / 4), }}>
            <Link style={{ boxShadow: "none" }} to={path}> {title}</Link>
            - {formattedDate}
            <div>
              {subtitle}
            </div>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Bio />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            date
            subtitle
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
