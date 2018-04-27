<template>
  <div>
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

  </div>
</template>

<script>
  import XForm from "~/components/XForm";

  export default {
  async asyncData({app, store, params}) {
      let article = await app.$axios.get(
        `${
          store.state.wordpressAPI
          }/wp/v2/posts/${params.id}?context=view`
      );

      store.commit("setArticle", article.data);

      let image = await app.$axios.get(`${store.state.article._links['wp:featuredmedia'][0].href}`);
      store.commit("setFeaturedImage", image.data)
  },
  components: {
    XForm,
  },

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
