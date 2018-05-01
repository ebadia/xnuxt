const webpack = require('webpack')

module.exports = {
  router: {
    base: '/xnuxt/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'xtremis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "description", content: "Desarrollo de software a medida, aplicaciones para teléfonos móviles, diseño de páginas web, e-business, B2B, consultoría de TI. En Barcelona y Bilbao" },
      { name: "keywords", content: "custom software,web design,apps for mobile phones,web,programm development,IT applications,programms,java,html,css,angular,jasmine,ruby,flex,air,flash,mysql,oracle,db2" },
      { name: "author", content: "Xtremis" },
      { content: "authenticity_token", name: "csrf-param"  },
    ],
    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon_xtremis-4bdbe28d8411c86797a05669a78e8a74.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' }
    ],
    script: [
      { src: "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    vendor: [
      'moment',
      'vue-mq',
      'vue-social-sharing'
    ]
  },
  css: ['~/assets/styles/main.css', '~/assets/styles/main.scss'],
  plugins: [
    { src: '~/plugins/mixins' },
    { src: '~/plugins/fa' },
    { src: '~/plugins/vue-social-sharing' },
    '~/plugins/mq',
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', '~/assets/styles/globals.scss'],
    ['@nuxtjs/google-analytics', { id: 'UA-41138665-1'}]
  ],
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
