<template>
  <div>
    <section>
      <x-banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="medida-cap.png" color="#bbb53e" />
    </section>

    <section>
      <x-cards head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." color="#bbb53e" :cards="cards" />
    </section>

    <section>
      <x-number-list header="sistemas de comercio electrónico b2c" title="Necesitas un ecommerce que venda por sí solo y te permita realizar transacciones online." text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." :list="list" color="#bbb53e" imagen="web-ecommerce.jpg"/>
    </section>

    <section>
      <x-banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="medida-cap.png" color="#bbb53e" />
    </section>

    <section>
      <x-list image="web-tu-web.jpg" title="Encontramos la mejor manera de estar en Internet." text="En Xtremis somo expertos en desarrollo web a medida para todo tipo de empresas y organizaciones" listHeader="te acompañamos en el proceso" listTitle="Tu web será" listLinkText="resolvemos tus dudas" listLink="/" listColor="#00bcd4" color="#6c757d" :list="lista"/>
    </section>

    <section>
      <x-two-images :cards="twoImageCards" title="Las ventajas del software a medida." subt="El software a medida ayuda a resolver problemas y optimizar las necesidades de software de nuestros clientes." text="Las organizaciones que ya han dado el paso han podido observar sus principales ventajas frente a los 'programas enlatados'." color="#bbb53e" imagen="pantalla.jpg"/>
    </section>

    <section>
      <x-cuadro imagen="pantalla.jpg" head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="              <p>En el mundo del software empresarial, una mala elección puede llevarte a perder muchísimo tiempo y dinero.</p><p>En cambio, un programa personalizado y a medida puede ayudarte a perfeccionar tus procesos y mejorar tu productividad a niveles como no habías imaginado.</p>" color="#bbb53e"  enlace="#" link="resolvemos tus dudas" />
    </section>

    <section>
      <x-image-four :images="images" />
    </section>

    <section>
      <x-image-left imagen="pantalla.jpg" color="#bbb53e" header="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." enlace="#" link="resolvemos tus dudas" />
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de sus necesidades?" imagen="medida-form.png" area="amedida" />
    </section>

    <section>
      <x-cta :ctas="ctas"/>
    </section>

  </div>

</template>

<script>
import XBanner from "~/components/XBanner";
import XForm from "~/components/XForm";
import XNumber from "~/components/XNumber";
import XCards from "~/components/XCards";
import XImageLeft from "~/components/XImageLeft";
import XCuadro from "~/components/XCuadro";
import XTwoImages from "~/components/XTwoImages";
import XImageFour from "~/components/XImageFour";
import XNumberList from "~/components/XNumberList";
import XNumberListRight from "~/components/XNumberListRight";
import XCta from "~/components/XCta";
import XList from "~/components/XList";

export default {
  components: {
    XBanner,
    XForm,
    XNumber,
    XCards,
    XImageLeft,
    XCuadro,
    XTwoImages,
    XImageFour,
    XNumberList,
    XNumberListRight,
    XCta,
    XList
  },

  data() {
    return {
      cards: [
        {
          imagen: "medida-1.png",
          texto:
            "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e"
        },
        {
          imagen: "medida-2.png",
          texto:
            "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e"
        },
        {
          imagen: "medida-3.png",
          texto:
            "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e"
        },
        {
          imagen: "medida-4.png",
          texto:
            "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e"
        },
        {
          imagen: "medida-5.png",
          texto:
            "Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
          color: "#bbb53e"
        }
      ],
      twoImageCards: [
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        }
      ],
      list: [
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        },
        {
          title: "Diseño exclusivo y personalizado.",
          text:
            "A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
        }
      ],
      ctas: [
        {
          img: "pantalla.jpg",
          url: "/custom"
        },
        {
          img: "pantalla.jpg",
          url: "/webapps"
        },
        {
          img: "pantalla.jpg",
          url: "/custom"
        },
        {
          img: "pantalla.jpg",
          url: "/webapps"
        }
      ],
      lista: [
        "Responsive",
        "Intuitiva",
        "Atractiva",
        "Funcional",
        "Integrada",
        "Rápida",
        "Front/Back-end profesionales",
        "Fácil de visualizar en todo tipo de dispositivo",
        "Estándares W3"
      ],
      images: [
        {
          image: "pantalla.jpg",
          title: "Card title",
          subtitle: "Card subtitle",
          text: "This is the text in a card of four cards in the group"
        },
        {
          image: "pantalla.jpg",
          title: "Card title",
          subtitle: "Card subtitle",
          text: "This is the text in a card of four cards in the group"
        },
        {
          image: "pantalla.jpg",
          title: "Card title",
          subtitle: "Card subtitle",
          text: "This is the text in a card of four cards in the group"
        },
        {
          image: "pantalla.jpg",
          title: "Card title",
          subtitle: "Card subtitle",
          text: "This is the text in a card of four cards in the group"
        }
      ]
    };
  }
};
</script>

<style>
</style>
