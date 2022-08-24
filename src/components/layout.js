import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './teaser'
import Grid from "./grid"
import Feature from "./feature"
import Navigation from "./navigation"
import Footer from "./footer"
import HeroSection from './hero-section';

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    'hero-section': HeroSection,
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
});

const Layout = ({ children }) => {
  return (
    <div className="text-center">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout