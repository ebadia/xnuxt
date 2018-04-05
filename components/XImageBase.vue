<template>
  <div class="card" style="border: none; padding: 15px; background-color: transparent;">
    <img class="card-img-top" :src="require(`~/assets/img/${image}`)" alt="xtremis">
    <div class="card-body">
      <h4 class="card-title small-caps-text" :style="{ color: `${color}`}">{{title}}</h4>
      <h6 class="card-subtitle mb-2 text-muted small-caps-text" style="color: #c8a42e !important;">{{subtitle}}</h6>
      <p class="card-text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>
