<template>
  <div class="w-100 d-flex justify-content-center">
    <div class="row mb-5 pb-5" :class="{ 'cta-container': isNotFull, 'mt-5': isNotFull, 'mt-5': isNotFull }">
        <div class="col-md-6" :class="{ 'cta': isNotFull, 'p-md-1': isNotFull}" style="padding-top: 30px;" v-for="(cta, index) in ctas" :key="index">
          <router-link  :to="cta.url">
            <img :src="require('~/assets/img/' + `${cta.img}`)" class="img-fluid">
          </router-link >
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // ctas: [{ img, url }]
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
