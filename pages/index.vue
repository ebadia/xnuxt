<template>
  <div>
    <Banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="medida-cap.png" color="#bbb53e" />

    <section>
      <XCards head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." color="#bbb53e" :cards="cards" />
    </section>

    <section>
      <XCuadro imagen="pantalla.jpg" head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="              <p>En el mundo del software empresarial, una mala elección puede llevarte a perder muchísimo tiempo y dinero.</p><p>En cambio, un programa personalizado y a medida puede ayudarte a perfeccionar tus procesos y mejorar tu productividad a niveles como no habías imaginado.</p>
" color="#bbb53e"  enlace="#" link="resolvemos tus dudas" />
    </section>

    <!-- <section>
      <div class="row mt-5 mb-5 pt-5 pb-5">
        <div class="col-md-3 offset-md-1">
          <XNumber number="01" title="Seguridad" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est. Aenean elementum, erat at aliquet hendrerit, elit nisl posuere tortor, id suscipit diam dui sed nisi. Morbi sollicitudin massa vel tortor consequat, eget semper nisl fringilla." color="#bbb53e" />
        </div>
      </div>
    </section> -->

    <section>
      <XImageLeft imagen="pantalla.jpg" color="#bbb53e" header="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." enlace="#" link="resolvemos tus dudas" />
    </section>

    <Form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de sus necesidades?" imagen="medida-form.png" area="amedida" />

  </div>

</template>

<script>
import Banner from '~/components/Banner'
import Form from '~/components/Form'
import XNumber from '~/components/XNumber'
import XCards from '~/components/XCards'
import XImageLeft from '~/components/XImageLeft'
import XCuadro from '~/components/XCuadro'

export default {

  components: {
    Banner,
    Form,
    XNumber,
    XCards,
    XImageLeft,
    XCuadro
  },

  data () {
    return {
      cards: [
        {
          imagen: "medida-1.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "medida-2.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "medida-3.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "medida-4.png",
          texto: "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e",
        },
        {
          imagen: "medida-5.png",
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
