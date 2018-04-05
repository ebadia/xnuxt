<template>
  <div class="pt-5 pb-5" :style="{ 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-image': 'url('+require(`~/assets/img/${image}`)+')' }">
    <div class="row pt-5">
      <div class="offset-5 offset-md-2 col-md-6">
        <h3 class="text-white mb-4">{{title}}</h3> 
        <h5 style="font-weight: 200;" :style="{ color: `${color}`}">{{text}}.</h5> 
      </div>
    </div>
    <div class="row pt-5">
      <div class="offset-6 offset-md-2 col-md-8">
        <div class="row w-100">
          <div class="col-md-4">
            <x-mini-list-item :items="list[0].items" :color="color"/>
            <x-mini-list-item :items="list[1].items" :color="color"/>
          </div>
          <div class="col-md-4">
            <x-mini-list-item :items="list[2].items" :color="color"/>
            <x-mini-list-item :items="list[3].items" :color="color"/>
          </div>
          <div class="col-md-4">
            <x-mini-list-item :items="list[4].items" :color="color"/>
            <x-mini-list-item :items="list[5].items" :color="color"/>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XMiniListItem from "@/components/XMiniListItem";

export default {
  components: {
    XMiniListItem
  },
  props: {
    image: {
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
    color: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  }
};
</script>
