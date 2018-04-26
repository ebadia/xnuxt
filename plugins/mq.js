import Vue from 'vue'
import VueMq from 'vue-mq'

if (process.browser) {

  Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity,
    }
  })

}
