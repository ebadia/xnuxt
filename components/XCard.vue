<template>
  <div class="card">
    <img class="card-img-top pt-4" :src="bgImg" alt="xtremis">
    <div class="card-body border-card">
      <hr class="separador pt-0 mb-3 mt-0" :style="{backgroundColor: `${color}`}" />
      <h5 style="font-weight: 400;">{{title}}</h5>
      <div style="font-weight: 200;" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "x-number",
  props: {
    imagen: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bgImg: require(`~/assets/img/${this.imagen}`)
    };
  }
};
</script>

<style scoped>
</style>
