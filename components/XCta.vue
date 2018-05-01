<template>
  <div class="w-100 d-flex justify-content-center">
    <div class="row mb-5 pb-5" :class="{ 'cta-container': isNotFull, 'mt-5': isNotFull, 'mt-5': isNotFull }">
        <div class="col-md-6" :class="{ 'cta': isNotFull, 'p-md-1': isNotFull}" style="padding-top: 30px;" v-for="(cta, index) in ctas" :key="index">
          <router-link  :to="`/${$store.state.language}/${cta.url}`">
            <img :src="require('~/assets/img/' + `${cta.img}`)" class="img-fluid"  style="z-index: 10; position: relative;">
          </router-link >
          <div style="z-index: -999; margin-top: -200px; position: relative;">
            <h1>{{cta.title}}</h1>
            <h3>{{cta.subtitle}}</h3>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ctas: {
      type: Array,
      required: true
    },
    full: {
      type: Boolean,
      required: false
    },
  },

  computed: {
    isNotFull: function () {
      return (this.full? false : true)
    }
  }

};
</script>
