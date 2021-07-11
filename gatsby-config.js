/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, '/.env.development')
      : path.join(__dirname, '/.env.production'),
})

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-playground',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    {
      /*
       * If you’re using this plugin together with gatsby-plugin-offline (recommended),
       * this plugin should be listed before the offline plugin so that it can cache the created manifest.webmanifest.
       */
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.APP_NAME,
        short_name: process.env.APP_NAME,
        start_url: '/',
        display: 'minimal-ui',
        icon: path.join(__dirname, '/static/logo.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          pretty: true,
          multipass: true,
          plugins: [
            { removeViewBox: false },
            { removeAttrs: { attrs: '(width|height)' } },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': path.join(__dirname, 'src'),
          '@components': path.join(__dirname, 'src/components'),
          '@layouts': path.join(__dirname, 'src/components/layouts'),
          '@pages': path.join(__dirname, 'src/pages'),
          '@styles': path.join(__dirname, 'src/styles'),
          '@static': path.join(__dirname, 'static'),
          '@store': path.join(__dirname, 'src/store'),
          '@providers': path.join(__dirname, 'src/components/providers'),
          '@common': path.join(__dirname, 'src/components/common'),
          '@containers': path.join(__dirname, 'src/components/containers'),
        },
      },
    },
  ],
}
