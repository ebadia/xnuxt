<template>
  <div class="row w-100">
    <div class="col-md-6">
      <hr class="separador pt-0 mb-3 mt-0" :style="{backgroundColor: `${color}`}" />
      <h4 style="font-weight: 200;">{{title}}</h4>
      <div style="font-weight: 200; padding-bottom: 50px;" v-html="text"></div>
    </div>
    <div class="col-md-6">
      <div style="height: 300px; display: table-cell;" :style="{ verticalAlign: `${valign}`}">
        <img class="card-img-top img-lr" :src="bgImg" alt="xtremis">
      </div>
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
    valign: {
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
