module.exports = {
  siteMetadata: {
    title: `Team RACK`,
    description: `ExpeditionHacks Team RACK: Hotel Reporting Tool`,
    author: `@kimhart`,
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
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "RMAPI",
    //     fieldName: "rickAndMorty",
    //     url: "https://rickandmortyapi.com/graphql",
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RMAPI",
        fieldName: "rackAPI",
        url: "https://rack-api.herokuapp.com/",
      },
    },
  ],
}