const pkg = require('./package')
const { getConfigForKeys } = require('./src/lib/config.js')
const extendConfig = require('./webpack.config.extend');

const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CONTENT_TYPE'
])

const { createClient } = require('./src/plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  mode: 'universal',
  srcDir: './src',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    script: [
      { src: 'https://cdn.embedly.com/widgets/platform.js' }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    '~/assets/style/app.styl',
    '~/assets/style/app.scss'
  ],

  generate: {
    routes() {
      return cdaClient
        .getEntries(ctfConfig.CTF_BLOG_POST_TYPE_ID)
        .then(entries => {
          return [...entries.items.map(entry => `/blog/${entry.fields.permalink}`)]
        })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_CONTENT_TYPE: ctfConfig.CTF_CONTENT_TYPE
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/dotenv', {
      path: './'
    }],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      extendConfig(config)
      return
    }
  },

  /*
   ** Extensions
   */
  extensions: ['ts', 'js'],
}
