/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
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
  siteMetadata: {
    title: "Jeroen van Meerendonk - UX Engineer in Barcelona",
    author: "Jeroen van Meerendonk",
    description:
      "UX Engineer and frontend developer in Barcelona focused on Design Systems with HTML, CSS (Sass + BEM), JavaScript (React + Storybook) and PHP (CodeIgniter).",
    url: "https://jeroen.wtf", // No trailing slash allowed!
    image: "/hero_bg--large.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jeroen_wtf",
  },
}
