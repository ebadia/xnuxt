<template>
    <div>
      <div style="padding: 0 20px;">
        <h4>{{title}}</h4>
        <p>{{address}}<br>{{contact}}</p>
      </div>
      <img :src="require(`~/assets/img/${imagen}`)" class="img-fluid mb-3">
      <img :src="require(`~/assets/img/${mapa}`)" class="img-fluid">
      </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["title", "address", "contact", "imagen", "mapa"],
    methods: {}
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
