<template>
  <div>
    <div class="no-gutters w-100 d-none d-md-block" style="height: auto;">
      <img :src="require(`~/assets/img/${imagen}`)" class="img-fluid" alt="xtremis">
    </div>
    <div v-if="cta" class="no-gutters w-100 d-md-none" style="height: auto;">
      <img :src="require(`~/assets/img/${cta}`)" class="img-fluid w-100" alt="xtremis">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["imagen", "cta"],
    methods: {}
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
