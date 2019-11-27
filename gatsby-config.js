/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "CoderDojo Padova",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "layout-footer-background": "#000",
          "primary-color": "#183C52",
          "heading-color": "#777777",
          "body-background": "#fff",
          // Base background color for most components
          "component-background": "#fff",
          // "layout-body-background": "#183C52",
          // "layout-header-background": "#fff",
        },
      },
    },
  ],
}
