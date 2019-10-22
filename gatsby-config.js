/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:300,400,500,700`,
          `Fira+Mono\:400`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-150763878-1`,
        head: false,
        anonymize: true,
      },
    },
  ],
}
