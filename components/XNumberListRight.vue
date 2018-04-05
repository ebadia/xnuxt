<template>
  <div class="w-100 pt-5 pb-5" :style="{ 'background-image': `url(${bgImg})`,
      'background-repeat': 'no-repeat',
      'background-position': 'left center',
      'background-size': 'contain'}" style="display: flex; flex-direction: column; align-items: flex-end;">
    <!-- <div>  -->
      <div class="row" style="width: 75%;">
        <div class="col-8">
          <div class="p-1 ml-md-5 m-3">
            <h5 class="small-caps-text" style="color: #00bcd4;">{{header}}</h5>
            <h3 class="item">{{title}}</h3>
            <p style="display: none;">{{text}}<br></p>
            <hr class="separador" style="display: none;" />
            <h5><a class="small-caps-text" href="#" style="display: none;">resolvemos tus dudas &gt;</a></h5> 
          </div>             
        </div>
      </div>

      <div class="row" style="width: 75%;">
        <div class="col-12">
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
import XNumber from '@/components/XNumber'

export default {
  name: 'x-number',
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
  },
  data () {
    return {
      bgImg: require('~/assets/img/web-ecommerce.png'),
    }
  }
}
</script>

<style scoped>

</style>
