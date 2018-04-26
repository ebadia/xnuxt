<template>
  <footer class="pt-5 pb-5">
    <div class="row item">
      <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-8">
        <div class="h1">Hola</div>
      </div>
    </div>
    <div class="row item">
      <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-8">
        <p><img src="~/assets/img/logo-gris.png" width="112" height="auto" alt=""></p>
      </div>
    </div>
    <div class="row item">
      <div class="offset-lg-2 col-lg-1 offset-md-1 col-md-2">
        <p>
          <a href="#" class="footer-link">inicio</a>
        </p>
        <p>
          <a href="#" class="footer-link">equipo</a>
        </p>
        <p>
          <a href="#" class="footer-link">actualidad</a>
        </p>
        <p>
          <a href="#" class="footer-link">contacto</a>
        </p>
      </div>
      <div class="col-lg-3 col-md-3">
        <p>
          <router-link to="/custom" class="footer-link">desarrollo de software a medida</router-link>
        </p>
        <p>
          <router-link to="/mobile" class="footer-link">desarrollo de aplicaciones</router-link>
        </p>
        <p>
          <router-link to="/webapps" class="footer-link">desarrollo web</router-link>
        </p>
        <p>
          <router-link to="/consulting" class="footer-link">consultoría informática</router-link>
        </p>
        <p>
          <router-link to="/design" class="footer-link">diseño gráfico</router-link>
        </p>
      </div>
      <div class="col-lg-2 col-md-2">
        <p class="footer-title">barcelona</p>
        <p class="footer-text">Avenida Diagonal 449, 4º<br>08036 - Barcelona<br>ES</p>
        <p class="footer-text">info@xtremis.com</p>
        <p class="footer-text">+34 93 363 50 93</p>
      </div>
      <div class="col-lg-2 col-md-2">
        <p class="footer-title">bilbao</p>
        <p class="footer-text">C/San Vicente nº 8 – 6ª <br>48001 - Bilbao - VIzcaya <br>ES</p>
        <p class="footer-text">info@xtremis.com</p>
        <p class="footer-text">+34 94 424 26 90</p>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10">
        <div class="text-center">
          <div @click="goto('facebook')" class="facebook">
          </div>
          <div @click="goto('twitter')" class="twitter">
          </div>
          <div @click="goto('instagram')" class="instagram">
          </div>
        </div>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="offset-md-2 col-md-4">
        <p class="footer-title">@ xtremis 2018</p>
      </div>
      <div class="col-md-4">
        <span class="text-right">
          <a href="#" class="footer-link">aviso legal</a>
          <a href="#" class="footer-link">política de cookies</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    }
  },
  methods: {
    goto (location) {
      console.log(location)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h1 {
    font-size: 60px;
    font-weight: 200;
  }
.twitter {
  width: 40px;
  height: 30px;
  background: url("~/assets/img/twitter.png") no-repeat;
  display: inline-block;
}
.twitter:hover {
  background: url("~/assets/img/twitter-black.png") no-repeat;
}
.facebook {
  width: 30px;
  height: 30px;
  background: url("~/assets/img/facebook.png") no-repeat;
  display: inline-block;
}
.facebook:hover {
  background: url("~/assets/img/facebook-black.png") no-repeat;
}
.instagram {
  width: 30px;
  height: 30px;
  background: url("~/assets/img/instagram.png") no-repeat;
  display: inline-block;
}
.instagram:hover {
  background: url("~/assets/img/instagram-black.png") no-repeat;
}
</style>
