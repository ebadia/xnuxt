<template>
  <div class="w-100 pt-5 pb-5" :style="{ 'background-image': `url(${bgImg})`,
      'background-repeat': 'no-repeat',
      'background-position': 'left top',
      'background-size': 'inherit'}" style="display: flex; flex-direction: column; align-items: flex-end;">
    <!-- <div>  -->
      <div class="row" style="width: 75%;">
        <div class="col-8">
          <div class="p-1 ml-md-6 m-3">
            <h5 class="small-caps-text" style="color: #00bcd4;">{{header}}</h5>
            <h3 class="item">{{title}}</h3>
            <div style="font-size: 24px; font-weight: 200;">{{text}}<br></div>
            <hr class="separador" style="display: none;" />
            <h5><a class="small-caps-text" href="#" style="display: none;">resolvemos tus dudas &gt;</a></h5> 
          </div>             
        </div>
      </div>

      <div class="row" style="width: 75%;">
        <div class="col-12">
          <div class="row p-1 ml-md-6 m-3">
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
      required: false
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
      required: false
    }
  },
  data() {
    const imagen =
      this.imagen === undefined ? "" : require("~/assets/img/" + this.imagen);
    return {
      bgImg: imagen
    };
  }
};
</script>

<style scoped>
</style>
