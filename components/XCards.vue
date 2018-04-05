<template>
  <div class="row mt-5 mb-5">
    <div class="offset-xl-2 offset-lg-2 offset-md-2 offset-sm-1 offset-1 col-md-9 col-sm-11 col-11">
      <div class="row mt-5 mb-5">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-9 pl-0">
          <h5 class="small-caps-text" :style="{color: `${color}`}">{{head}}</h5>
          <h1 class="item">{{title}}</h1>
          <h3 :style="{color: `${color}`}">{{text}}<br></h3> 
        </div>
      </div>
      <!-- cards -->
      <div class="row mt-5 mb-5">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-11 col-11 pl-0 mt-5"
          :key="index"
          v-for="(card, index) in cardData" 
        >
          <XCard :imagen="card.imagen" :text="card.texto" :color="card.color" :title="card.title" />
        </div>
      </div>
    </div>         
  </div>
</template>

<script>
import XCard from "~/components/XCard";

export default {
  components: {
    XCard
  },
  props: {
    head: {
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
    cards: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cardData: this.cards
    };
  }
};
</script>
