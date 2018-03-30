<template>
  <div class="container">
    <div>
      <input type="text" v-model="blogId">
      <button @click="onLoadBlog">Load</button>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogId: ''
    }
  },
  methods: {
    onLoadBlog() {
      this.$router.push(`/blog/${this.blogId}`)
    }
  }
}
</script>