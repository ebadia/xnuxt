<template>
  <div>

    <section>
      <div class="pt-5 pb-5">
        <div class="row ml-md-5 mr-md-5 pl-5 pr-5">
              <div class="col-12">
                <XBlogBanner
                  :image="$store.state.articles[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
                  :categoria="$store.state.articles[0]._embedded['wp:term'][0][0].name"
                  :fecha="longTimestamp($store.state.articles[0].date)"
                  :title="$store.state.articles[0].title.rendered" :color="color"></XBlogBanner>
              </div>
        </div>
      </div>
    </section>

    <section>
      <div class="pt-5 pb-5">
        <div class="row ml-md-5 mr-md-5 pl-5 pr-5">
          <div class="col-md-6 pt-md-2 pb-md-2 pt-5" v-for="(article, index) in $store.state.articles" :key="index"
               v-if="index>0">
            <XBlogCard :image="article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url"
                       :categoria="article._embedded['wp:term'][0][0].name"
                       :fecha="longTimestamp(article.date)"
                       :title="article.title.rendered"
                       :color="color"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso"
              text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?"
              imagen="home-form.jpg" area="contact"/>
    </section>

  </div>
</template>

<script>
  import XForm from "~/components/XForm";
  import XBlogCard from "~/components/XBlogCard";
  import XBlogBanner from "~/components/XBlogBanner";

  export default {
    async asyncData({app, store, params}) {
      if (!store.state.articles.length) {
        let articles = await app.$axios.get(
          `${
            store.state.wordpressAPI
            }/wp/v2/posts?orderby=date&per_page=10&_embed`
        );
        store.commit("setArticles", articles.data);
      }
    },
    components: {
      XForm,
      XBlogCard,
      XBlogBanner
    },
    data() {
      return {
        color: "#FF5252"
      };
    },
    mixins: {
      shortTimestamp: Function,
      longTimestamp: Function
    }
  };
</script>
