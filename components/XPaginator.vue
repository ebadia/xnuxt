<template>
  <div class="pt-5 pb-5 mb-5">
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li @click="anterior" :class="{ disabled: aDisabled }" class="page-item"><a class="page-link">Anterior</a></li>

        <li @click="pagina(i)" v-for="i in 5*($store.state.salto+1)" :key="i" :class="{ disabled: pageDisabled(i), active: isActive(i) }" class="page-item"><a class="page-link">{{i}}</a></li>

        <li @click="siguiente" :class="{ disabled: sDisabled }" class="page-item"><a class="page-link">Siguiente</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
      name: "XPaginator",
      methods: {
        pageDisabled: function (i) {
          return ( (i - 1) * 5 > this.$store.state.totalArticles )
        },
        isActive: function (i) {
          return ( i === this.$store.state.pagina )
        },
        anterior () {
          if (  this.$store.state.salto > 0 ) {
            this.$store.commit('setSalto', -1)
          }
        },
        siguiente () {
          if (  this.$store.state.salto < this.$store.state.totalSaltos ) {
            this.$store.commit('setSalto', +1)
          }
        },
        pagina (i) {
          if (  !this.pageDisabled(i) ) {
            this.$store.commit('setPagina', i)
            this.$store.dispatch('setArticles').then(() => console.log('PAGINACION'))
          }
        }
      },
      computed: {
        aDisabled () {
          return ( this.$store.state.salto === 0 )
        },
        sDisabled () {
          return ( this.$store.state.totalPages > 0 )
        },
      }
    }
</script>

<style scoped>
  nav {
    font-size: 12px;
  }

  .page-item.active .page-link {
    background-color: black;
    border-color: black;
  }

  .page-item.disabled .page-link {
    color: #cccccc;
  }
</style>
