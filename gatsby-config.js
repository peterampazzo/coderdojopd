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
          // default colors
          "primary-color": "#41BAC1",
          "heading-color": "#003459",
          // font
          // "font-family": `"Libre Franklin", sans- serif`,

          // Base background color for most components
          "component-background": "#fff",
          "layout-body-background": "#fff",

          // header menu
          "menu-item-color": "#fff",
          "layout-header-background": "#642580",
          "menu-bg": "#642580",
          "menu-highlight-color": "#000",

          // footer
          "layout-footer-background": "#00171F",
        },
      },
    },
  ],
}
