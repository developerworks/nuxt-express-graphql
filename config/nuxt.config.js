import path from 'path';
import _ from 'lodash';

module.exports = {
  srcDir: "src/client/",
  head: {
    title: 'Trang chủ',
    titleTemplate: '%s - Vue.VN Nuxt + GraphQL',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~assets/css/main.css'],

  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {

      config = _.merge(config, require('../config/webpack.config').call(ctx));

      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },

  plugins: [
    // { path: '~plugins/apollo' }
  ]
}
