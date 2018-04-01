<template>
  <div class="row mt-5 mb-5 w-100 no-gutters">
    <div class="col-12 col-md-6" style="padding-right: 0px;">
      <div class="imagen-7-5" :style=" { backgroundImage: `url('${bgImg}')`, 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'left top', 
        backgroundSize: 'cover', 
        height: '400px', 
        maxHeight: '400px'
        }">
      </div>
    </div>
    <div class="col-12 d-flex col-md-6 col-lg-5 col-xl-5 flex-column justify-content-center">
      <div class="p-1 ml-md-5 m-3">
        <h5 class="small-caps-text" :style="{color: `${color}`}">{{header}}</h5>
        <h3 class="item">{{title}}</h3>
        <p>{{text}}<br></p>
        <hr class="separador" :style="{backgroundColor: `${color}`}" />
        <h5>
          <a class="small-caps-text" :href="`${enlace}`" :style="{color: `${color}`}">{{link}} &gt;</a>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imagen', 'header', 'title', 'text', 'color', 'enlace', 'link'],
  data() {
    return {
        bgImg: require(`~/assets/img/${this.imagen}`)
    }
  },
}
</script>

