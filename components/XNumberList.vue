<template>
  <div class="w-100 pt-1 pb-1" :style="{ 'background-image': `url(${bgImg})`,
      'background-repeat': 'no-repeat',
      'background-position': 'right center',
      'background-size': 'contain'}"
       style="display: flex; flex-direction: column; align-items: flex-start;">
    <!-- <div>  -->
      <div class="row">
        <div class="col-8 offset-lg-1">
          <div class="p-1 ml-md-5 m-3">
            <h5 class="small-caps-text" :style="{color: `${color}`}">{{header}}</h5>
            <div class="h3 item">{{title}}</div>
            <p style="display: none;">{{text}}<br></p>
            <hr class="separador" style="display: none;" />
            <h5><a class="small-caps-text" href="#" style="display: none;">resolvemos tus dudas &gt;</a></h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-9 offset-lg-1">
          <div class="row p-1 ml-md-5 m-3">
            <div class="col-md-4" v-for="(item, index) in list" :key="index">
              <XNumber :number="`0${index+1}`" :title="item.title" :text="item.text" :color="color"/>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import XNumber from "@/components/XNumber";

export default {
  name: "x-number",
  components: {
    XNumber
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    header: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bgImg: require(`~/assets/img/${this.imagen}`)
    };
  }
};
</script>

<style scoped>
  .h3 {
    font-size: 48px;
    font-weight: 200;
  }
  @media (max-width: 767px) {
    .h3 {
      font-size: 36px;
    }
  }
</style>
