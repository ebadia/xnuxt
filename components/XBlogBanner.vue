<template>
  <div style="margin-top: 60px">
    <div :style="{ backgroundImage: `url(${image})`, backgroundPosition: 'right center' }" class="x-banner d-flex align-items-center x-banner-blog">
      <div class="row no-gutters d-flex flex-column align-items-center" style="width: 100%;">
        <div class="d-flex flex-column align-items-center">
          <h6 class="small-caps-text" :style="{ color: `${color}` }">{{categoria}}</h6>
          <h3 style="font-weight: 200; color: white;">{{title}}</h3>
          <hr style="border-bottom: 1px solid white; width: 100%;">
          <h6 class="small-caps-text" style="color: white;">{{fecha}}</h6>
        </div>
      </div>
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
      // console.log("TITLE", this.title)
    }
  };
</script>

<style scoped>
</style>
