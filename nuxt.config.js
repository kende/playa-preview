module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Node NYC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A decentralized crypto lounge.' },
      { property: 'og:title', content: 'Node NYC' },
      { property: 'og:description', content: 'A decentralized crypto lounge.' },
      { property: 'og:image', content: 'https://node.nyc/_nuxt/img/node-fb-img.a9fc22d.png' },
      { property: 'og:url', content: 'https://node.nyc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/node-favicon.png' },
      { href: 'https://fonts.googleapis.com/css?family=Archivo+Black', rel: 'stylesheet'}
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
