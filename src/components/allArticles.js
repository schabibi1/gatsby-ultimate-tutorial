import * as React from "react"
import ArticleTeaser from "./articleTeaser";
import { storyblokEditable } from "gatsby-source-storyblok";
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react";

const AllArticles = ({ blok }) => {
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
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles[0] && articles.map((article) => {
          return (
            <ArticleTeaser
              article={article.node.content}
              key={article.node.uuid}
              slug={article.node.slug}
            />
          )
        }
        )}
      </div>
    </>
  );
};
export default AllArticles;