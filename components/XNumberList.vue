<template>
  <div>
    <div class="row mt-5 mb-5 pt-5 pb-5">
      <div class="col-md-3 offset-md-1">
        <XNumber />
      </div>
      <div class="col-md-3">
      </div>
      <div class="col-md-3">
      </div>
      <div class="col-md-3">
      </div>
      <div class="col-md-3">
      </div>
    </div>
  </div>
</template>

<script>
import XNumber from '@/components/partials/XNumber'

export default {
  name: 'x-number',
  components: {
    XNumber
  },
  props: [ 'number', 'title', 'text' ]
}
</script>

<style scoped>

</style>
