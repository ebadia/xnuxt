<template>
  <section :style="{ backgroundImage: `url(${bgImg})` }" class="d-md-flex bg-secondary d-flex align-items-center x-banner">
    <div class="row no-gutters" style="width: 100%;">
      <div class="offset-1 col-10 offset-md-2 col-md-6">
        <h1 class="banner-title">{{title}}</h1>
        <h3 class="banner-subtitle" :style="{color: `${color}`}" v-html="subtitle"></h3>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
        bgImg: require(`~/assets/img/${this.imagen}`)
    }
  },
  props: ['title', 'subtitle', 'imagen', 'color'],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
