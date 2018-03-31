<template>
  <div>
    <Banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-cap.png" color="#bbb53e" />

    <section>
      <XCards head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." color="#bbb53e" :cards="cards"/>
    </section>

    <section>
      <div class="row mt-5 mb-5 pt-5 pb-5">
        <div class="col-md-3 offset-md-1">
          <XNumber number="01" title="Seguridad" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est. Aenean elementum, erat at aliquet hendrerit, elit nisl posuere tortor, id suscipit diam dui sed nisi. Morbi sollicitudin massa vel tortor consequat, eget semper nisl fringilla." color="#bbb53e" />
        </div>
      </div>
    </section>

    <Form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de sus necesidades?" imagen="https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-form%20copia%202.png" />

  </div>

</template>

<script>
import Banner from '~/components/Banner'
import Form from '~/components/Form'
import XNumber from '~/components/XNumber'
import XCards from '~/components/XCards'

export default {

  components: {
    Banner,
    Form,
    XNumber,
    XCards
  },

  data () {
    return {
      cards: [
        {
          imagen: "https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-1.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-2.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-3.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-4.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-5.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
      ]
    } 
  }

}
</script>

<style>

</style>
