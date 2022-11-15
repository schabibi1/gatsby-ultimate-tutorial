import * as React from "react";
import ArticleTeaser from "./articleTeaser";
import { storyblokEditable } from "gatsby-source-storyblok";
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react";

const PopularArtices = ({ blok }) => {
  const data = useStaticQuery(graphql`
    {
      posts: allStoryblokEntry(
        filter: {field_component: {eq: "article"}}
      ) {
        edges {
          node {
            id
            uuid
            name
            slug
            full_slug
            content
            created_at
          }
        }
      }
    }
  `)

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const filteredArticles = data.posts.edges.filter(edge => edge)
      setArticles(() => filteredArticles.map(article => article));
    };
    getArticles();
  }, []);

  return (
    <>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles.map(singleArticle => {
          const uuid = blok.articles.filter(uuid => uuid === singleArticle.node.uuid ? singleArticle.node.uuid : null)

          const article = singleArticle.node.uuid == uuid ? singleArticle.node.content : null
          const uuidKey = singleArticle.node.uuid == uuid ? singleArticle.node.uuid : null
          const slug = singleArticle.node.uuid == uuid ? singleArticle.node.slug : null
          return (
            <ArticleTeaser
              article={article}
              key={uuidKey}
              slug={slug}
            />
          )
        })}
      </div>
    </>
  );
};
export default PopularArtices;