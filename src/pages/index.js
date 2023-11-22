import * as React from "react"
import { graphql } from "gatsby"

// import { StoryblokComponent, storyblokEditable, useStoryblokState } from "gatsby-source-storyblok"
import { StoryblokStory, useStoryblokState } from "gatsby-source-storyblok"

import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  if (typeof data.storyblokEntry.content === "string") data.storyblokEntry.content = JSON.parse(data.storyblokEntry.content);

  let story = data.storyblokEntry
  story = useStoryblokState(story, {
    resolveRelations: ["popular-articles.articles"],
  })

  // const components = story.content.body.map(blok => (<StoryblokComponent blok={blok} key={blok._uid} />))
  const components = story.content.body.map(blok => (<StoryblokStory story={blok} blok={blok} key={blok._uid} />))

  return (
    <Layout>
        {components}
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