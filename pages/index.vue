<template>
  <div>
    <banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="medida-cap.png" color="#bbb53e" />

    <section>
      <x-cards head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." color="#bbb53e" :cards="cards" />
    </section>

    <section>
      <x-number-list header="sistemas de comercio electrónico b2c" title="Necesitas un ecommerce que venda por sí solo y te permita realizar transacciones online." text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." :list="list" color="#bbb53e"/>
    </section>

    <!-- <section>
      <x-two-images :cards="twoImageCards" title="Las ventajas del software a medida." subt="El software a medida ayuda a resolver problemas y optimizar las necesidades de software de nuestros clientes." text="Las organizaciones que ya han dado el paso han podido observar sus principales ventajas frente a los 'programas enlatados'." color="#bbb53e" imageni="pantalla.jpg" imagend="pantalla.jpg"/>
    </section> -->

    <!-- <section>
      <x-cuadro imagen="pantalla.jpg" head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="              <p>En el mundo del software empresarial, una mala elección puede llevarte a perder muchísimo tiempo y dinero.</p><p>En cambio, un programa personalizado y a medida puede ayudarte a perfeccionar tus procesos y mejorar tu productividad a niveles como no habías imaginado.</p>
" color="#bbb53e"  enlace="#" link="resolvemos tus dudas" />
    </section> -->

    <!-- <section>
      <div class="row mt-5 mb-5 pt-5 pb-5">
        <div class="col-md-3 offset-md-1">
          <x-number number="01" title="Seguridad" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est. Aenean elementum, erat at aliquet hendrerit, elit nisl posuere tortor, id suscipit diam dui sed nisi. Morbi sollicitudin massa vel tortor consequat, eget semper nisl fringilla." color="#bbb53e" />
        </div>
      </div>
    </section> -->

    <section>
      <x-image-left imagen="pantalla.jpg" color="#bbb53e" header="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." enlace="#" link="resolvemos tus dudas" />
    </section>

    <x-form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de sus necesidades?" imagen="medida-form.png" area="amedida" />

    <section>
      <x-cta :ctas="ctas"/>
    </section>

  </div>

</template>

<script>
import Banner from '~/components/Banner'
import XForm from '~/components/XForm'
import XNumber from '~/components/XNumber'
import XCards from '~/components/XCards'
import XImageLeft from '~/components/XImageLeft'
import XCuadro from '~/components/XCuadro'
import XTwoImages from '~/components/XTwoImages'
import XNumberList from '~/components/XNumberList'
import XNumberListRight from '~/components/XNumberListRight'
import XCta from '~/components/XCta'

export default {

  components: {
    Banner,
    XForm,
    XNumber,
    XCards,
    XImageLeft,
    XCuadro,
    XTwoImages,
    XNumberList,
    XNumberListRight,
    XCta
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
      ],
      twoImageCards: [
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
      ],
      list: [
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text: "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización.",
        },
      ],
      ctas: [
        {
          img: 'pantalla.jpg',
          url: '/custom'
        },
        {
          img: 'pantalla.jpg',
          url: '/webapps'
        },
        {
          img: 'pantalla.jpg',
          url: '/custom'
        },
        {
          img: 'pantalla.jpg',
          url: '/webapps'
        },
      ]
    } 
  }

}
</script>

<style>

</style>
