import * as React from "react"
import { graphql } from "gatsby"

import { StoryblokStory } from "gatsby-source-storyblok"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  if (typeof data.storyblokEntry.content === "string") data.storyblokEntry.content = JSON.parse(data.storyblokEntry.content);

  return (
    <Layout>
      <StoryblokStory story={data.storyblokEntry} />{/* ⬅️ */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($full_slug: String) {
    storyblokEntry(full_slug: { eq: $full_slug}) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`