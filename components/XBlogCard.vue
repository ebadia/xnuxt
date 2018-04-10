<template>
  <div class="card" style="border: none; padding: 0px; background-color: #EBEBEB; min-height: 525px;">
    <img class="card-img-top" :src="require(`~/assets/img/${image}`)" alt="xtremis">
    <div class="card-body">
      <div>
        <h6 class="mb-2 small-caps-text" :style="{ color: `${color}`, float: 'left' }">{{categoria}}</h6>
        <h6 class="mb-2 small-caps-text" :style="{ color: `${color}`, float: 'right'}">{{fecha}}</h6>
      </div>
      <h3 style="font-weight: 200; margin-top: 20px; clear: both;">{{title}}</h3>
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
    categoria: {
      type: String,
      required: false
    },
    fecha: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>
