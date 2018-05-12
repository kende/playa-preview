module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Playa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A decentralized crypto game.' },
      { property: 'og:title', content: 'Playa' },
      { property: 'og:description', content: 'A decentralized crypto game.' },
      { property: 'og:image', content: 'https://playa.network/_nuxt/img/playa-fbimage.7372f13.png' },
      { property: 'og:url', content: 'https://playa.network' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/playa-favicon.png' },
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
