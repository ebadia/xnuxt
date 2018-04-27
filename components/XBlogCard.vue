<template>
  <div class="card" style="">
    <div class="blog-img">
      <img class="card-img-top" :src="image" alt="xtremis">
    </div>
    <div class="card-body">
      <div>
        <h6 class="mb-2 small-caps-text" :style="{ color: `${color}`, float: 'left' }">{{categoria}}</h6>
        <h6 class="mb-2 small-caps-text" :style="{ color: `${color}`, float: 'right'}">{{fecha}}</h6>
      </div>
      <div class="h3 title">{{title}}</div>
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
  },
   created () {
    // console.log("TITLE", this.title)
   }
};
</script>

<style scoped>
  .title {
    font-weight: 200;
    margin-top: 30px;
    clear: both;
  }
  .card {
    background-color: #FAFAFA;
    display: block;
    cursor: pointer ;
    border: none;
    padding: 0px;
    min-height: 500px;
  }

  .blog-img {
    height: 250px;
    overflow: hidden;
  }

  .h3 {
    font-size: 38px;
    font-weight: 200;
  }
  @media (max-width: 960px) {
    .h3 {
      font-size: 24px;
      font-weight: 200;
    }

    .card {
      min-height: 400px;
    }


  }
</style>
