import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

const Grid = ({ blok }) => (
  <ul className="grid grid-cols-3" {...storyblokEditable(blok)} key={blok._uid} data-test="grid">
    {blok.columns.map((blok) => (
      <li key={blok._uid} className="text-center flex-auto px-6">
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;