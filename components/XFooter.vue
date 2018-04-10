<template>
  <footer class="pt-5 pb-5">
    <div class="row item">
      <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-8">
        <h1>Hola</h1>
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
      <div class="col-lg-3 col-md-4">
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
        <p class="text-center">
          <a href="#">
            <img src="~/assets/img/facebook.png" alt="" class="ml-3">
          </a>
          <a href="#">
            <img src="~/assets/img/twitter.png" alt="" class="ml-3">
          </a>
          <a href="#">
            <img src="~/assets/img/instagram.png" alt="" class="ml-3">
          </a>
        </p>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-3 offset-md-1 col-md-4">
        <p class="footer-title">@ xtremis 2018</p>
      </div>
      <div class="col-lg-2 col-md-2">
        <p class="text-center"><img src="~/assets/img/logo-gris.png" width="120" height="auto" alt=""></p>
      </div>
      <div class="col-lg-3 col-md-4">
        <div class="text-right">
          <a href="#" class="footer-link">aviso legal</a>
          <a href="#" class="footer-link">política de cookies</a>
        </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
