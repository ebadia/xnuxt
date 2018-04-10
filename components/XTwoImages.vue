<template>
  <div class="d-md-flex flex-md-column align-items-md-start mb-5">

    <div class="row">

      <div class="col-md-2">
        <img v-if="bgImg" :src="bgImg" style="max-width: 90%">
      </div>

      <div class="col-md-10">

        <div class="row mt-md-5">

          <div class="col-lg-10">
            <div class="row mt-md-5">
              <div class="offset-md-3 col-lg-6 offset-lg-3 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 p-0">
                <h1 class="item">{{title}}</h1>
                <h3 class="item claro">{{subt}}</h3>
                <h3 class="item" :style="{ color: `${color}`}">{{text}}</h3>
              </div>
            </div>
          </div>

          <div class="row no-gutters" style="width: 100%; margin-top: 40px; margin-bottom: 40px;">
            <div class="p-0 d-flex justify-content-end" style="overflow: hidden; width: 100%;">
              <img :src="img" class="imagen-7-5">
            </div>
          </div>

          <div class="row mt-md-5 mb-md-5">
            <div class="offset-md-3 col-lg-8 offset-lg-3 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 p-0">
              <div class="row">
                <XTwoImagesFoot v-for="card in cards" :key="card.title" :title="card.title" :text="card.text"/>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import XTwoImagesFoot from "~/components/XTwoImagesFoot";

  export default {
    components: {
      XTwoImagesFoot
    },
    props: {
      title: {
        type: String,
        required: true
      },
      subt: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      imagen: {
        type: String,
        required: true
      },
      bgImagen: {
        type: String,
        required: false
      },
      cards: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        img: require(`~/assets/img/${this.imagen}`),
      };
    },
    computed: {
      bgImg: function() {
        if (this.bgImagen) {
          return require(`~/assets/img/${this.bgImagen}`)
        } else {
          return null
        }
      }
    }
  };
</script>

<style scoped>
  .claro {
    font-weight: 300;
  }
</style>
