"use client";
import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './teaser'
import Grid from "./grid"
import Feature from "./feature"
import Header from "./header"
import Footer from "./footer"
import Config from "./config"
import MenuLink from "./menuLink"
import Hero from "./hero"
import Article from "./article"
import AllArticles from "./allArticles"
import PopularArticles from "./popularArticles"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    config: Config,
    hero: Hero,
    "menu_link": MenuLink,
    article: Article,
    "all-articles": AllArticles,
    "popular-articles": PopularArticles
  }
});

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout