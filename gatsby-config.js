require("dotenv").config();
module.exports = {
  siteMetadata: {
    siteUrl: "https://dorianlatchague.com",
    title: "Dorian Latchague",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-recaptcha",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "278094664",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dorian Latchague Portfolio`,
        short_name: `Dorian Latchague`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#e8ebf7`,
        display: `standalone`,
        icon: "src/images/portfolio-logo.jpg"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          breakpoints: [320, 768, 992, 1200, 1500],
          backgroundColor: `transparent`
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    }
  ],
};
