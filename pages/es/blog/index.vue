<template>
  <div>

    <div v-if="loading" class="mt-5 pt-5" style="text-align: center;">
      <img src="~/assets/img/loading_icon.gif" />
    </div>

    <div v-else>
      <section>
        <div class="row ml-md-5 mr-md-5 pl-5 pr-5">
          <div class="col-12" @click="goto($store.state.articles[0].id)">
            <XBlogBanner
              :image="$store.state.articles[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
              :categoria="$store.state.articles[0]._embedded['wp:term'][0][0].name"
              :fecha="longTimestamp($store.state.articles[0].date)"
              :title="$store.state.articles[0].title.rendered" :color="color"
            />
          </div>
        </div>
      </section>

      <section>
        <div class="pt-5 pb-5">
          <div class="row ml-md-5 mr-md-5 pl-5 pr-5">
            <div class="col-md-6 pt-md-2 pb-md-2 pt-5" v-for="(article, index) in $store.state.articles" :key="index"
                 v-if="index>0" @click="goto(article.id)">
              <XBlogCard :image="article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url"
                         :categoria="article._embedded['wp:term'][0][0].name"
                         :fecha="longTimestamp(article.date)"
                         :title="article.title.rendered"
                         :color="color"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <XPaginator></XPaginator>
      </section>

      <section>
        <x-form headline="solicita información y asesoramiento sin compromiso"
                text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?"
                imagen="home-form.jpg" area="contact"/>
      </section>

    </div>


  </div>
</template>

<script>
  import XForm from "~/components/XForm";
  import XBlogCard from "~/components/XBlogCard";
  import XBlogBanner from "~/components/XBlogBanner";
  import XPaginator from "~/components/XPaginator";

  export default {
    async asyncData({app, store, params}) {
      return {
        loading: false
      }
    },
    created () {
      this.loading = true
      // if (!this.$store.state.articles.length) {
        this.$store.dispatch('setArticles').then( () => {
          console.log('FROM DISPATCH')
          this.loading = false
        })
      // }
    },
    components: {
      XForm,
      XBlogCard,
      XBlogBanner,
      XPaginator,
    },
    data() {
      return {
        color: "#FF5252",
      };
    },
    mixins: {
      shortTimestamp: Function,
      longTimestamp: Function
    },
    methods: {
      goto(id) {
        this.$router.push({ path: `/${this.$store.state.language}/blog/${id}`});
      }
    }
  };
</script>

<style scoped>

</style>
