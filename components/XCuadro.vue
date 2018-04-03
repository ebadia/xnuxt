<template>
  <div :style="{ height: '100vh', backgroundImage: `url('${bgImg}')`, backgroundSize: 'cover' }" class="bg-secondary d-md-flex d-flex align-items-center justify-content-end">
    <div class="row">
      <div class="w-100 d-flex d-md-flex justify-content-md-end justify-content-center">
        <div class="p-5 bg-semi-blanco mr-md-5 cuadro-blanco">
          <h5 class="small-caps-text">{{head}}</h5>
          <h1 class="h1-200">{{title}}</h1>
          <hr class="separador" :style="{backgroundColor: `${color}`}" />
          <div v-html="text">
          </div>
          <h5>
            <a class="small-caps-text" :href="`${enlace}`" :style="{ color: `${color}`}">{{link}} &gt;</a>
          </h5>
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
