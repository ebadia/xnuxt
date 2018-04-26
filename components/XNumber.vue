<template>
  <div>
    <div>
      <span  class="x-number-list-number" :style="{ color: `${color}` }">{{number}}</span>
      <span  class="x-number-list-border" :style="{ borderLeftColor: `${color}` }">&nbsp;</span>
    </div>
    <div class="x-number-list-title">
      <p>{{title}}</p>
    </div>
    <div>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-number',
  props: [ 'number', 'title', 'text', 'color' ],
}
</script>

<style scoped>

</style>
