<template>
  <div>

    <div v-if="loading">
      <i class="fa fa-spinner fa-spin" style="font-size:42px"></i>
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
      let loading = true;
      if (!store.state.articles.length) {
        let articles = await app.$axios.get(
          `${
            store.state.wordpressAPI
            }/wp/v2/posts?orderby=date&per_page=10&_embed`
        );

        const total = articles.headers['x-wp-total'];
        const totalPages = articles. headers['x-wp-totalpages'];

        store.commit("setArticles", articles.data);
        store.commit("setTotalArticles", total);
        store.commit("setTotalPages", totalPages);
      }
      loading = false;
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
