<template>
  <div>
    <div class="x-number-list-number" :style="{ borderRightColor: `${color}` }">
      <span :style="{ color: `${color}` }">{{number}}&nbsp;</span>
    </div>
    <div class="x-number-list-title">
      <p>{{title}}</p>
    </div>
    <div>
      <p>{{text}}.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-number',
  props: [ 'number', 'title', 'text', 'color' ]
}
</script>

<style scoped>

</style>
