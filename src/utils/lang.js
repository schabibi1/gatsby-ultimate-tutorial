let languages = ['en', 'es']
function getTransLink(language, slug) {
  language = languages
  language.map((lang) => {
    console.log("lang:" + lang)
    console.log("slug:" + slug)
    return lang === 'en' ? slug : `/${lang}${slug}`
  })
  console.log("language:" + language)
  console.log(languages)
}
export { getTransLink, languages }