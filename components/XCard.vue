<template>
  <div class="card">
    <img class="card-img-top pt-4" :src="imagen" alt="xtremis">
    <div class="card-body border-card">
      <hr class="separador pt-0 mb-3 mt-0" :style="{backgroundColor: `${color}`}" />
      <h5 style="font-weight: 200;">{{text}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-number',
  props: [ 'imagen', 'text', 'color' ]
}
</script>

<style scoped>

</style>
