<template>
  <div class="pt-5 pb-5" style="height: 100vh;" :style="{ 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-image': 'url('+require(`~/assets/img/${image}`)+')' }">
    <div class="row pt-5">
      <div class="offset-md-2 col-md-6">
        <h3 class="text-white mb-4">{{title}}</h3> 
        <h5 style="font-weight: 200;" :style="{ color: `${color}`}">{{text}}.</h5> 
      </div>
      <div class="col-md-4">
        <div class="p-1 ml-md-5 m-3">
          <h5 class="small-caps-text" :style="{color: `${listColor}`}">{{listHeader}}</h5>
          <h3 class="item" style="color: white;">{{listTitle}}</h3>
          <div style="color: white">
            <div v-for="(item, index) in list" :key="index">{{item}}</div>
          </div>
          <hr class="separador" :style="{'background-color': `${listColor}`}" />
          <h5><router-link class="small-caps-text" :to="`${listLink}`" :style="{color: `${listColor}`}">{{listLinkText}} &gt;</router-link></h5> 
        </div>
      </div>
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
    listHeader: {
      type: String,
      required: true
    },
    listTitle: {
      type: String,
      required: true
    },
    listColor: {
      type: String,
      required: true
    },
    listLinkText: {
      type: String,
      required: true
    },
    listLink: {
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
