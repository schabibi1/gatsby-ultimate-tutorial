import * as React from "react"
import { getTransLink } from '../utils/lang'
// const { language, article } = Astro.props

const ArticleTeaser = ({ blok, article, languages }) => {
  console.log(article)
  console.log(blok)
  console.log(languages)
  return (
    <div className="column feature">
      <div className="p-6">
        <img
          className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
          src={article.image.filename}
          alt="blog"
        />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {article.title}
        </h1>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {article.subtitle}
        </div>
        <div className="mt-4">
          {/* <a
            href={`/blog/${article.slug || slug}`}
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Read More »
          </a> */}
          <a  href={getTransLink(languages, `/blog/${article.slug}`)}
              class="font-semibold text-blue-600 hover:underline"
              title="read more"
          >
          Read More »
        </a>
        </div>
      </div>
    </div >
  )
};
export default ArticleTeaser;