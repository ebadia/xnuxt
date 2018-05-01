<template>
  <div>
    <no-ssr>
    <section>
      <div class="row mt-5 pt-5">
        <div class="col-md-10 offset-md-1">
          <div class="h3 mb-5">{{$store.state.article.title.rendered}}</div>
          <img width="100%" height="auto" :src="$store.state.featuredImage.source_url" alt="">
          <div class="row">
            <div class="col-md-4 d-none d-lg-block">

              <div class="row mt-5">
                <div class="col-4"><img src="~/assets/img/blog-custom.png" alt=""></div>
                <div class="col-8 pl-4">
                  <div class="h5">Desarrollo de software a medida</div>
                  <router-link class="link" :to="`/${$store.state.language}/custom`">ver más</router-link>
                </div>
              </div>
              <hr>
              <div class="row mt-5">
                <div class="col-4"><img src="~/assets/img/blog-mobile.png" alt=""></div>
                <div class="col-8 pl-4">
                  <div class="h5">Desarrollo de aplicaciones para móvil</div>
                  <router-link class="link" :to="`/${$store.state.language}/mobile`">ver más</router-link>
                </div>
              </div>
              <hr>
              <div class="row mt-5">
                <div class="col-4"><img src="~/assets/img/blog-web.png" alt=""></div>
                <div class="col-8 pl-4">
                  <div class="h5">Desarrollo de aplicaciones web</div>
                  <router-link class="link" :to="`/${$store.state.language}/webapps`">ver más</router-link>
                </div>
              </div>
              <hr>
              <div class="row mt-5">
                <div class="col-4"><img src="~/assets/img/blog-consulting.png" alt=""></div>
                <div class="col-8 pl-4">
                  <div class="h5">Consultoría informática</div>
                  <router-link class="link" :to="`/${$store.state.language}/consulting`">ver más</router-link>
                </div>
              </div>
              <hr>
              <div class="row mt-5">
                <div class="col-4"><img src="~/assets/img/blog-design.png" alt=""></div>
                <div class="col-8 pl-4">
                  <div class="h5">Diseño de identidad corporativa</div>
                  <router-link class="link" :to="`/${$store.state.language}/design`">ver más</router-link>
                </div>
              </div>
              <hr>
            </div>

            <div class="col-md-8">
              <div class="mt-5" v-html="$store.state.article.content.rendered"></div>
              <div class="float-right">
                <div class="mt-5">Compartir</div>
                <!--<social-sharing :url="`https://ebadia.github.io/xnuxt${this.$nuxt.$route.fullPath}`"-->
                <social-sharing :url="`https://ebadia.com/xnuxt${$nuxt.$route.fullPath}`"
                                :title="`${$store.state.article.title.rendered}`"
                                :description="`${$store.state.article.excerpt.rendered}`"
                                hashtags="xtremis"
                                twitter-user="xtremis"
                                inline-template>
                  <div class="mb-5">
                    <network network="facebook">
                      <span class="mr-3"><font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" style="color: #3B5998;" /></span>
                    </network>
                    <network network="twitter">
                      <span class="mr-3"><font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" style="color: #1dcaff;" /></span>
                    </network>
                    <network network="linkedin">
                      <span class="mr-3"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" style="color: #0077B5;" /></span>
                    </network>
                    <network network="email">
                      <span class="mr-3"><font-awesome-icon :icon="['fas', 'envelope-square']" size="2x" style="color: #FF5252;" /></span>
                    </network>
                  </div>
                </social-sharing>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso"
              text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?"
              imagen="home-form.jpg" area="contact"/>
    </section>

    </no-ssr>
  </div>
</template>

<script>
  import XForm from "~/components/XForm";

  export default {
  async asyncData({app, store, params, req}) {
    let article = await app.$axios.get(
      `${
        store.state.wordpressAPI
        }/wp/v2/posts/${params.id}?context=view`
    );

    store.commit("setArticle", article.data);

    let image = await app.$axios.get(`${store.state.article._links['wp:featuredmedia'][0].href}`);
    store.commit("setFeaturedImage", image.data)

    return {
      loading: false,
    }

  },

  created () {

  },

  components: {
    XForm,
  },

  head () {
    return {
      meta: [
        { property: 'og:url', content: `https://ebadia.com/xnuxt${this.$nuxt.$route.fullPath}` },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: `${this.$store.state.article.title.rendered}` },
        { property: 'og:description', content: `${this.$store.state.article.excerpt.rendered}` },
        { property: 'og:image', content: `${this.$store.state.featuredImage.source_url}` },
      ]
    }
  }
}
</script>

<style scoped>
  .link {
    font-size: 12px;
    font-variant: small-caps;
    font-weight: 400;
    color: #FF5252;
  }
  .h3 {
    font-size: 42px;
    font-weight: 400;
    text-align: center;
  }
  .h5 {
    font-size: 18px;
    font-weight: 400;
  }
</style>
