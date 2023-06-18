export default {
  target: 'static', 
  // Global page headers: https://go.nuxtjs.dev/config-head

  // seo - lesson 10 assignment
  head: {
    title: '206 Musubi Shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A nuxt web application to shop for a hawaiian snack called musubi in the greater seattle area.' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: 'hawaii, hawaiian, hawaiian snack, hawaiian cuisine, guamanian cuisine, japanese-american cuisine, spam dishes spam, rice, nori, soy sauce, teriyaki, teriyaki musubi, teriyaki chicken, chicken, chicken katsu, katsu, spam musubi, 206 musubi shop, rice balls, onigiri, japanese snacks, nori wraps, seaweed snacks, japanese street food, rice delicacies, musubi fillings, musubi variations, musubi flavors, musubi menu, musubi catering, japanese convenience food, asian fusion snacks, rice treats, musubi restaurant, musubi takeaway',
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
     },
  }
}