import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok"
import { Link } from "gatsby"

const MenuLink = ({ blok }) => (
  <Link to={blok.link.url} {...storyblokEditable(blok)} className="text-base font-medium text-gray-500 hover:text-gray-900">
    {blok.name}
  </Link>
)

export default MenuLink