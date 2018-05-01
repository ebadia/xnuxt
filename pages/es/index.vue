<template>
  <div>
    <section>
      <router-link :to="`/${$store.state.language}/custom`">
        <x-city imagen="home-medida.jpg" cta="cta-medida.jpg" />
      </router-link>
    </section>

    <section>
      <x-cta :ctas="ctas" :full="true"/>
    </section>

    <section>
      <x-number-list header="nuestros 3 must para el desarrollo de proyectos" title="Tecnología de calidad para que tu sistema te ayude ahora y en el futuro." text="" :list="list" :color="color" imagen="home-list.jpg"/>
    </section>

    <section>
      <x-banner-left title="" subtitle="Diseñamos y producimos el software que necesitas con más eficiencia, más productividad, menos costes y mejor capacidad de respuesta ante los cambios"  imagen="home-banner.jpg" subimagen="home-banner-text.png" color="#ffffff" />
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?" imagen="home-form.jpg" area="contact" color="#FF5252" />
    </section>

  </div>
</template>

<script>
  import XCity from "~/components/XCity";
  import XCta from "~/components/XCta";
  import XNumberList from "~/components/XNumberList";
  import XBannerLeft from "~/components/XBannerLeft";
  import XForm from "~/components/XForm";

  export default {
    components: {
      XCity,
      XCta,
      XNumberList,
      XBannerLeft,
      XForm,
    },

    computed: {
      lang () {
        return this.$store.getters.getLang
      }
    },

    data() {
      return {
        color: "#FF5252",
        ctas: [
          {
            img: "home-app.jpg",
            url: "/mobile",
            title: 'Desarrollo de aplicaciones para móvil',
            subtitle: 'Llevamos tu aplicación al móvil'
          },
          {
            img: "home-web.jpg",
            url: "/webapps",
            title: 'Desarrollo web',
            subtitle: 'UX, SEO, Conversión'
          },
          {
            img: "home-consultoria.jpg",
            url: "/consulting",
            title: 'Consultorí informática',
            subtitle: 'Facilitamos tu integración tecnológica'
          },
          {
            img: "home-identitat.jpg",
            url: "/design",
            title: 'Diseño de dentidad corporativa',
            subtitle: 'Diseño gráfico Made in Barcelona'
          }
        ],

        list: [
          {
            title: "Calidad de software",
            text:
              "Utilizamos la mejor tecnología de desarrollo de software para que tu sistema sea eficaz, potente, de calidad y verdaderamente útil"
          },
          {
            title: "Escalabilidad",
            text:
              "El futuro de tu proyecto es importante para nosotros. Facilitamos que tu programa pueda adaptarse y seguir creciendo en el futuro, acorde a las nuevas necesidades"
          },
          {
            title: "Mantenibilidad",
            text:
              "Desarrollamos un código resistente ante los cambios y tests automatizados para asegurar su mantenibilidad ante los siguientes evolutivos"
          }
        ],
      }
    },
    created () {
    }
  }
</script>

<style>

</style>
