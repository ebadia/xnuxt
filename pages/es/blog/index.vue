<template>
  <div>

    <section>
      <div class="pt-5 pb-5">
        <div class="row ml-md-5 mr-md-5 pl-5 pr-5">
          <div class="col-md-6 pt-md-2 pb-md-2" v-for="(img, index) in images" :key="index">
            <XBlogCard :image="img.image"
                       :categoria="img.categoria"
                       :fecha="img.fecha"
                       :title="img.title"
                       :color="color"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?" imagen="home-form.jpg" area="contact" />
    </section>

  </div>
</template>



<script>
  import XForm from "~/components/XForm";
  import XBlogCard from "~/components/XBlogCard";

  export default {
    components: {
      XForm,
      XBlogCard,
    },
    data () {

      return {
        color: "#FF5252",
        images: [
          {
            image: "consulting-01.jpg",
            categoria: "desarrollo web",
            fecha: "Ene 2018",
            title: "mejor calidad",
            text: "Alta calidad en tus desarrollos de software."
          },
          {
            image: "consulting-02.jpg",
            categoria: "desarrollo web",
            fecha: "Ene 2018",
            title: "planificación de los procesos de seguridad tecnológica",
            text: "Desarrollar una controlada planificación."
          },
          {
            image: "consulting-03.jpg",
            categoria: "desarrollo web",
            fecha: "Ene 2018",
            title: "lenguaje de programación",
            text: "Elegir las tecnologías y lenguajes de programación adecuados."
          },
          {
            image: "consulting-04.jpg",
            categoria: "desarrollo web",
            fecha: "Ene 2018",
            title: "desarrollo de software",
            text: "Reducir los tiempos invertidos en desarrollo de software."
          },
          {
            image: "consulting-04.jpg",
            categoria: "desarrollo web",
            fecha: "Ene 2018",
            title: "desarrollo de software",
            text: "Reducir los tiempos invertidos en desarrollo de software."
          },
        ]
      }


    }
  };
</script>
