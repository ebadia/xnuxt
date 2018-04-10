<template>
  <div>
    <section>
      <router-link to="/custom">
        <x-city imagen="home-medida.jpg" />
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
      <x-form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?" imagen="home-form.jpg" area="contact" />
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

    data() {
      return {
        color: "#FF5252",
        ctas: [
          {
            img: "home-app.jpg",
            url: "/mobile"
          },
          {
            img: "home-web.jpg",
            url: "/webapps"
          },
          {
            img: "home-consultoria.jpg",
            url: "/consulting"
          },
          {
            img: "home-identitat.jpg",
            url: "/design"
          }
        ],

        list: [
          {
            title: "Originalidad.",
            text:
              "Tiene que transmitir confianza y llamar la atención por su originalidad y estilo, que ha de asociarse con tu marca.."
          },
          {
            title: "Adaptabilidad.",
            text:
              "Que se pueda adaptar fácilmente en tus canales online y comunicaciones impresas offline sin perder su identidad."
          },
          {
            title: "Versatilidad.",
            text:
              "Tu logotipo debe poder ser reescalable sin perder legiblidad y adaptarse a diferentes formatos de soporte por lo creamos diversas aplicaciones."
          }
        ],
      };
    }
  }
</script>

<style>

</style>
