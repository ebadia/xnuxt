<template>
  <header style="padding-left: 10%; padding-right: 10%;" class="x-navbar fixed-top">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="navbarToggler-menu"></b-navbar-toggle>
      <b-navbar-brand :to="`${langPath}`"><img src="~/assets/img/xtremislogo-W.png" width="120" height="auto" alt=""></b-navbar-brand>
      <b-collapse is-nav id="navbarToggler-menu">
        <b-navbar-nav class="ml-auto">

          <b-nav-item :to="`${langPath}`" class="header-link">inicio</b-nav-item>

          <b-nav-item-dropdown id="dd-servicios" text="servicios" class="header-link">
            <b-dropdown-item class="dropdown-item header-drop-link" :to="`${langPath}/custom`">desarrollo de software a medida</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" :to="`${langPath}/mobile`">desarrollo de aplicaciones móviles</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" :to="`${langPath}/webapps`">desarrollo web</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" :to="`${langPath}/consulting`">consultoría informática</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" :to="`${langPath}/design`">diseño gráfico</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="`${langPath}/contact`" class="header-link">contacto</b-nav-item>
          <b-nav-item :to="`${langPath}/blog`" class="header-link">blog</b-nav-item>

          <b-nav-item-dropdown id="dd-idioma" text="idioma" class="header-link">
            <b-dropdown-item class="dropdown-item header-drop-link" v-for="lang in langs" :key="lang.short" @click="changeLang(lang.short)">{{lang.long}}</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
      }
    },

    methods: {
      changeLang (lang) {
        // console.log('DEFAULT LANG', this.langs[0]['short'])
        // console.log('THIS BEFORE LANG', this.lang)
        //
        // set lang only if is different from current one
        if ( lang !== this.lang ){
          // console.log('CHANGING LANG', lang)

          this.$store.dispatch('changeLanguage', lang)

          // const computedRoute = (lang===this.langs[0]['short'])?`${this.$route.path.substring(3)}`:`/${lang}${this.$route.path.substring(0)}`
          const computedRoute = `/${lang}${this.$route.path.substring(3)}`
          this.$router.push(computedRoute)
        }

        // console.log('THIS IS NOW LANG', this.lang)
      }
    },

    computed: {
      langs () {
        return this.$store.state.langs
      },

      lang () {
        return this.$store.getters.getLang
      },

      langPath () {
        // if (this.lang===this.langs[0]['short']) {
        //   return ''
        // }
        return '/' + this.lang
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
