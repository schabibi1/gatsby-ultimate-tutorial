import * as React from "react"
import { graphql } from "gatsby"

import { StoryblokStory, useStoryblokState } from "gatsby-source-storyblok"

import Layout from "../components/layout"

export default function Home({ data }) {
  let story = data.storyblokEntry
  story = useStoryblokState(story, {
    resolveRelations: ["popular-articles.articles"]
  })

  const components = story.content.body.map(blok => (<StoryblokStory story={blok} blok={blok} key={blok._uid} />))

  return (
    <Layout>
      <div>
        {components}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`