<template>
  <div :style="{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }" class="d-md-flex bg-secondary d-flex align-items-center">
    <div class="row no-gutters">
      <div class="offset-1 col-10 offset-md-4 col-md-4 w-100">
        <h1 class="banner-title">{{title}}</h1>
        <h3 class="banner-subtitle" :style="{color: `${color}`}" v-html="subtitle"></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: require(`~/assets/img/${this.imagen}`)
    };
  },
  props: ["title", "subtitle", "imagen", "color"],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
