<template>
  <div class="d-flex justify-content-center">
    <div class="row mt-5 mb-5 pt-5 pb-5" style="width: 80%;">
      <div class="col-lg-6 mt-5" v-for="(city, index) in cities" :key="index">
        <x-city-data :title="city.title" :address="city.address"
                     :contact="city.contact" :imagen="city.imagen" :mapa="city.mapa"/>
      </div>
    </div>
  </div>
</template>

<script>
  import XCityData from "~/components/XCityData";

  export default {
    components: {
      XCityData
    },
    data() {
      return {};
    },
    props: {
      cities: {
        type: Array,
        required: true
      }
    },
    methods: {}
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
