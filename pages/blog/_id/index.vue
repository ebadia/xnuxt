<template>
  <div>
    <p>Entered id {{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  validate (data) {
    console.log(data.params.id)
    return /^\d+$/.test(data.params.id)
  }
}
</script>
