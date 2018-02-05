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
      { property: 'og:image', content: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/node-favicon.png' },
      { href: 'https://fonts.googleapis.com/css?family=Archivo+Black', rel: 'stylesheet'}
    ]
  },
// <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
// <meta property="og:type"               content="article" />
// <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
// <meta property="og:description"        content="How much does culture influence creative thinking?" />
// <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
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
