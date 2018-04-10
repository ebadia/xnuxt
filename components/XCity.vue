<template>
    <div class="no-gutters w-100" style="height: auto;">
      <img :src="require(`~/assets/img/${imagen}`)" class="img-fluid" alt="xtremis">
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["imagen"],
    methods: {}
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
