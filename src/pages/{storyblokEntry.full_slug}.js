import * as React from "react"
import { graphql } from "gatsby"

import { StoryblokComponent, storyblokEditable, useStoryblokState } from "gatsby-source-storyblok"

import Layout from "../components/layout"

export default function Page({ data, location }) {
  let story = data.storyblokEntry
  story = useStoryblokState(story)

  const Templates = () => {
    if (story.content.component === 'page') {
      return story.content.body.map(blok => <StoryblokComponent blok={blok} key={blok._uid} location={location} />)
    }

    // return (story.content.component !== 'page' ? <StoryblokComponent blok={blok} key={blok._uid} lang={blok.lang} /> : null)
    return (story.content.component !== 'page' ? <StoryblokComponent blok={story} key={story._uid} lang={story.lang} location={location} /> : null)
  }

  return (
    <Layout location={location}>
      <div {...storyblokEditable(story.content)}>
        <Templates blok={story.content} key={story.content._uid} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      content
      name
      full_slug
      uuid
      id
      internalId
      lang
    }
  }
`