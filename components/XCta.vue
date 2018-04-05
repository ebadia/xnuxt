<template>
  <div class="w-100 d-flex justify-content-center">
    <div class="row mt-5 mb-5 pt-5 pb-5 cta-container">
        <div class="col-md-6 p-md-1" v-for="(cta, index) in ctas" :key="index">
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
    }
  }
}
</script>
