<template>
  <div>
    <section>
      <x-city imagen="contact-bcn.jpg" />
    </section>
    <section>
      <x-city imagen="contact-bil.jpg" />
    </section>

    <section>
      <x-city-data-block :cities="cities" />
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de tus necesidades?" imagen="contact-form.jpg" area="contact" />
    </section>

  </div>
</template>

<script>
  import XCity from "~/components/XCity";
  import XCityDataBlock from "~/components/XCityDataBlock";
  import XForm from "~/components/XForm";

  export default {
    components: {
      XCity,
      XCityDataBlock,
      XForm,
    },

    data() {
      return {
        color: '#A2195B',

        cities: [
          {
            title: "Barcelona",
            address: "Av. Drassanes, 6-8 planta 13  08001 Barcelona",
            contact: "info@xtremis.com  +34 93 363 50 93",
            imagen: "contact-imgbcn.jpg",
            mapa: "contact-mapbcn.jpg"
          },
          {
            title: "Bilbao",
            address: "San Vicente 8, 6ª  48001 Bilbao",
            contact: "info@xtremis.com  +34 94 424 26 90",
            imagen: "contact-imgbil.jpg",
            mapa: "contact-mapbil.jpg"
          },
        ]
      }
    }
  }
</script>
