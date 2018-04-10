<template>
  <div>
    <section>
      <x-banner title="Diseño de identidad corporativa" subtitle="Diseño Made in Barcelona" imagen="design-cap.jpg" :color="color" />
    </section>

    <section>
      <x-image-left imagen="design-left.jpg" :color="color" header="interpretamos los valores intangigles de tu empresa" title="Creamos tu imagen corporativa
on y offline." text="Por eso no nos quedamos solamente en el diseño web y la programación, como hacen muchas otras empresas. Además apostamos por el diseño gráfico para que todos los elementos de tu página web sean adecuados y te puedan ayudar a conseguir tus objetivos de marketing en Internet." enlace="#" link="conecta con tu público objetivo" />
    </section>

    <section>
      <x-cuadro imagen="design-cuadro.jpg" title="Una buena identidad deber ser sólida y coherente con el producto o empresa que se quiera comunicar. Tu nombre, tu logo, tu dominio web, y sobre todos tus valores va acabar formando tu identidad corporativa." :color="color"  enlace="#" link="actualiza tu identidad" />
    </section>

    <section>
      <x-two-images :cards="twoImageCards" title="Diseño gráfico Made in Barcelona para sitios web." subt="" text="Las imágenes forman una parte esencial de cada una de las páginas de tu web, ya estemos hablando de una tienda online, un blog o un sitio web corporativo." :color="color" imagen="design-2img.jpg"/>
    </section>

    <section>
      <x-list image="design-list.jpg" title="Eres lo que te hace diferente." text="No quieres sólo código, y no quieres tener un sitio web estándar que no se diferencie para nada de tu competencia." listHeader="diseño enfocado a resultados" listTitle="Logra tus objetivos" listLinkText="comunicamos para llegar" listLink="/" listColor="#ffffff" :color="color" :list="lista"/>
    </section>

    <section>
      <x-number-list header="Diseñamos logotipos exclusivos y atractivos" title="Haz de tus clientes embajadores de tu marca." text="" :list="list" :color="color" imagen="design-numbers.jpg"/>
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="Consigue tus objetivos de marketing en Internet apostando por el diseño profesional y el cuidado del aspecto visual de tu negocio" imagen="design-form.jpg" area="design" />
    </section>

    <section>
      <x-cta :ctas="ctas"/>
    </section>

  </div>

</template>

<script>
  import XBanner from "~/components/XBanner";
  import XImageLeft from "~/components/XImageLeft";
  import XCuadro from "~/components/XCuadro";
  import XTwoImages from "~/components/XTwoImages";
  import XList from "~/components/XList";
  import XNumberList from "~/components/XNumberList";
  import XForm from "~/components/XForm";
  import XCta from "~/components/XCta";

  export default {
    components: {
      XBanner,
      XImageLeft,
      XCuadro,
      XTwoImages,
      XList,
      XNumberList,
      XForm,
      XCta
    },
    data() {
      return {
        color: '#A2195B',
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
              "Porque te preocupa la productividad, la eficiencia, la competitividad y la calidad de tus sistemas.",
            color: "#bbb53e"
          },
          {
            imagen: "medida-3.png",
            texto:
              "Porque no quieres encontrarte incómodos “bugs” y necesitas un código fiable que seguirá funcionando de maravilla en las nuevas versiones.",
            color: "#bbb53e"
          },
          {
            imagen: "medida-4.png",
            texto:
              "Porque necesitas un programa a medida fácil e intuitivo, que no requiera una formación larga y costosa para su utilización.",
            color: "#bbb53e"
          },
          {
            imagen: "medida-5.png",
            texto:
              "Porque cada sector es diferente y no siempre existen las aplicaciones adecuadas en el mercado.",
            color: "#bbb53e"
          }
        ],

        twoImageCards: [
          {
            title: "Captación usuarios.",
            text:
              "Pueden marcar la diferencia a la hora de retener a los usuarios que llegan a tu sitio."
          },
          {
            title: "Empatía.",
            text:
              "Te ayudan a generar complicidad y confianza en el usuario."
          },
          {
            title: "Identidad social.",
            text:
              "Generar confianza cuando se comparte dicha página en Facebook, Twitter u otras redes sociales."
          },
        ],

        lista: [
          "Confianza",
          "Credibilidad",
          "Tasa de rebote",
          "Tasa de suscripciones a tu newsletter",
          "Tasa de conversión",
          "Rentabilidad",
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

        ctas: [
          {
            img: "cta-medida.jpg",
            url: "/custom"
          },
          {
            img: "cta-apps.jpg",
            url: "/mobile"
          },
          {
            img: "cta-web.jpg",
            url: "/webapps"
          },
          {
            img: "cta-consulting.jpg",
            url: "/consulting"
          },
        ]
      };
    }
  };
</script>
