import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const SEO = () => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const { title, titleTemplate, description, siteUrl } = site.siteMetadata
  const seo = {
    title: title,
    description: description,
    siteUrl: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "fr",
      }}
    >
      <script src="https://www.google.com/recaptcha/api.js?render=6LfWZ7YfAAAAAPD7Q4zlI2TZU_mYatG48lJ97JzM"></script>
      <script>
        grecaptcha.ready(function(){" "}
        {grecaptcha
          .execute("6LfWZ7YfAAAAAPD7Q4zlI2TZU_mYatG48lJ97JzM", {
            action: "homepage",
          })
          .then(function (token) {
            document.getElementById("captchaResponse").value = token
          })}
        )
      </script>
      <meta name="description" content={seo.description} />
      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
      }
    }
  }
`
