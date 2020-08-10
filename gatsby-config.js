module.exports = {
  siteMetadata: {
    title: `NASA's Astronomy Picture of the Day`,
    description: `An app for viewing NASA's Astronomy Picture of the Day.`,
    author: `Ger Hynes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NASA APOD`,
        short_name: `NASA APOD`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#1a202c`,
        display: `minimal-ui`,
        icon: `src/images/nasa-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
