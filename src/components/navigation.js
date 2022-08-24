import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { useState } from "react"
import { Link } from "gatsby"
// import HeaderMenu from "./headerMenu"

const Navigation = () => {
  const { config } = useStaticQuery(graphql`
    {
      config: allStoryblokEntry(filter: {field_component: {eq: "config"}}) {
        edges {
          node {
            name
            uuid
            content
          }
        }
      }
    }
  `)

  let thisConfig = config.edges.filter(({ node }) => node.uuid)
  let configContent = thisConfig.length ? JSON.parse(thisConfig[0].node.content) : {}
  let menu = configContent.header_menu.map(menu => menu.link.cached_url.split(','))
  const Nav = () => {
    for (const nav of menu) {
      return <a href={nav}>{nav}</a>
    }
  }

  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link to="/">
        <span className="sr-only">Storyblok</span>
        <img
          className="h-20 w-auto sm:h-10 hidden sm:block"
          src='https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png'
          alt="Storyblok"
        />
        <img
          className="h-20 w-auto sm:h-10 sm:hidden"
          src='https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png'
          alt="Storyblok"
        />
      </Link>
      <div>
        {console.log('menu😎: ', menu)}
        {console.log('<Nav menu={menu} />:💨 ', <Nav menu={menu} />)}
      </div>
      <nav>
        <ul className="flex space-x-8 text-lg font-bold">
          <li className="hover:text-[#50b0ae]">
            <Nav menu={menu} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;