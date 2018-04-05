<template>
  <div class="col-md-4 mb-4">
      <h3 class="mb-2">{{title}}</h3>
      <div>{{text}}</div> 
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
