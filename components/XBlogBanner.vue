<template>
  <div style="margin-top: 60px">
    <div :style="{ backgroundImage: `url(${image})`, backgroundPosition: 'right center' }" class="d-md-flex bg-secondary d-flex align-items-center x-banner">
    <h3 style="font-weight: 200; margin-top: 60px; clear: both;">{{title}}</h3>
    <h6 class="mb-2 small-caps-text" :style="{ color: `${color}` }">{{categoria}}</h6>
    <hr>
    <h6 class="mb-2 small-caps-text" :style="{ color: `${color}` }">{{fecha}}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      categoria: {
        type: String,
        required: false
      },
      fecha: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      color: {
        type: String,
        required: true
      }
    },
    created() {
      console.log("TITLE", this.title)
    }
  };
</script>

<style scoped>
</style>
