<template>
  <div class="col-md-4 item">
      <h3>{{title}}</h3>
      <p>{{text}}</p> 
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
      },
    }
  }
</script>

