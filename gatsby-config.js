/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "CoderDojo Padova",
    titleTemplate: "%s | CoderDojo Padova",
    image: "/img/Femo_166.jpg",
    twitterUsername: "@coderdojopd",
    url: "https://www.coderdojopadova.it",
    description:
      "Laboratorio di programmazione gratuito per bambini e ragazzi dai 5 anni in su a Padova",
    social: {
      facebook: "https://www.facebook.com/CoderdojoPadova/",
      twitter: "https://twitter.com/coderdojopd",
      github: "https://www.github.com/coderdojopd",
      newsletter: "http://eepurl.com/QaW9P",
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
      resolve: "gatsby-plugin-react-helmet",
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
          //"link-color": "#000",
          "link-decoration": "underline",
          "warning-color": "#642580",
          "heading-color": "#003459",

          // font
          // "font-family": `"Libre Franklin", sans- serif`,

          // Base background color for most components
          "component-background": "#fff",
          "layout-body-background": "#fff",

          // header menu
          // "menu-item-color": "#fff",
          "layout-header-background": "#642580",
          // "menu-bg": "#642580",
          // "menu-highlight-color": "#fff",
          // "menu-item-active-bg": "#fff",

          // footer
          "layout-footer-background": "#00171F",
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-153629843-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://www.coderdojopadova.it",
      },
    },
  ],
}
