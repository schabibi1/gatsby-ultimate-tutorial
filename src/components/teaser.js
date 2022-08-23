import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok";

const Teaser = ({ blok }) => {
  console.log(blok)
  return (
    <div className="teaser" {...storyblokEditable(blok)}>
      <h2 className="text-2xl mb-10" >
        {blok.headline}
      </h2>
    </div>
  )
}

export default Teaser