<template>
  <div :style="{ height: '100vh', backgroundImage: `url('${bgImg}')`, backgroundSize: 'cover' }" class="d-md-flex align-items-md-center bg-secondary align-items-center d-flex">
    <div class="row">
      <div class="offset-xl-6 col-xl-5 offset-md-5 col-md-6  offset-sm-3 col-sm-7 offset-0 col-12">
        <div class="p-5 bg-semi-blanco">
          <h5 class="small-caps-text">{{head}}</h5>
          <h1 class="h1-200">{{title}}</h1>
          <hr class="separador" :style="{backgroundColor: `${color}`}" />
          <div v-html="text">
          </div>
          <h5><a class="small-caps-text" :href="`${enlace}`" :style="{ color: `${color}`}">{{link}} &gt;</a></h5> 
        </div>             
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-number',
  props: [ 'imagen', 'head', 'title', 'text', 'color', 'enlace', 'link' ],
    data () {
      return {
        bgImg: require(`~/assets/img/${this.imagen}`)
      }
    }
}
</script>

<style scoped>

</style>
