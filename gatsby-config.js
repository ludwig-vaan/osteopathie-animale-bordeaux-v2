const adapter = require('gatsby-adapter-netlify').default;

module.exports = {
  headers: [
    {
      source: `/`,
      headers: [
        {
          key: `Referrer-Policy`,
          value: `strict-origin-when-cross-origin`,
        },
      ],
    },
  ],
  siteMetadata: {
    title: `Osteopathe Animalier Bordeaux - Agathe Lescout`,
    titleTemplate: 'A|O· osteopathie animale',
    description:
      "L'Ostéopathe animalier Agathe Lescout, intervenant sur Bordeaux et Gironde!",
    siteUrl: 'https://www.osteopathie-animale-bordeaux.fr', // No trailing slash allowed!
  },
  adapter: adapter({
    headers: [
      {
        key: `Referrer-Policy`,
        value: `strict-origin-when-cross-origin`,
      },
    ],
  }),
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KCM49LQ',

        // Include GTM in development.
        includeInDevelopment: false,

        // Specify where to place the tracking script
        // true in the head, false in the body
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Osteo Bordeaux`,
        lang: 'fr',
        orientation: 'portrait-primary',
        dir: 'rtl',
        short_name: `OsteoBDX`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c0823f`,
        display: `standalone`,
        legacy: true, // this will add apple-touch-icon links to <head>
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
