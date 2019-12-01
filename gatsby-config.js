/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "CoderDojo Padova",
    desc:
      "Laboratorio di programmazione gratuito per bambini e ragazzi dai 5 anni a Padova",
    social: {
      facebook: "https://www.facebook.com/CoderdojoPadova/",
      twitter: "https://twitter.com/coderdojopd",
      github: "https://www.github.com/coderdojopd",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
    },
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
          "menu-highlight-color": "#fff",
          "menu-item-active-bg": "#fff",

          // footer
          "layout-footer-background": "#00171F",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          // "GA-TRACKING_ID", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "G-B67M9PZ055",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
