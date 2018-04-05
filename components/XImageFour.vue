<template>
  <div style="background-color: #EBEBEB;" class="pt-5 pb-5">
    <div class="row ml-md-5 mr-md-5 pl-5 pr-5">
      <div class="col-md-6 pt-md-2 pb-md-2" v-for="(img, index) in images" :key="index">
        <XImageBase :image="img.image" :title="img.title" :subtitle="img.subtitle" :text="img.text" :color="color"/>
      </div>
    </div>
  </div>
</template>

<script>
import XImageBase from "~/components/XImageBase";

export default {
  components: {
    XImageBase
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>
