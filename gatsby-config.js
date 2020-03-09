module.exports = {
  siteMetadata: {
    siteName: `Lucas Stettner Personal Site`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: `XUERLOZP`,
      },
    },
  ],
}
