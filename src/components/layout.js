/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
"use client";
import React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './Teaser'
import Grid from './Grid'
import Page from './Page'
import Feature from './Feature'


storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    page: Page
  }
});

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout