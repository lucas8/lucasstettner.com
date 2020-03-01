module.exports = {
  siteMetadata: {
    siteName: `Lucas Stettner Personal Site`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        omitGoogleFont: true,
      },
    },
  ],
}
