import * as React from "react"
import { graphql } from "gatsby"

import { StoryblokStory } from "gatsby-source-storyblok"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  if (typeof data.storyblokEntry.content === "string") data.storyblokEntry.content = JSON.parse(data.storyblokEntry.content);

  const Templates = () => {
    if (data.storyblokEntry.content.component === "page") {
      return <StoryblokStory story={data.storyblokEntry}/>
    } 
      return (data.storyblokEntry.content.component !== "page" ? <StoryblokStory story={data.storyblokEntry.content} blok={data.storyblokEntry.content}/> : null)
  }

  return (
    <Layout>
      <Templates />
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