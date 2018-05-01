<template>
	<div class="app">
	  <section>
      <x-banner title="Desarrollo web" subtitle="UX<br>SEO<br>Conversión" imagen="web-cap.jpg" color="#5DA1AC" />
	  </section>

    <section>
      <x-image-left imagen="web-tel.jpg" color="#5DA1AC" header="sistema de gestión empresarial made in barcelona" title="Tu imagen en Internet lo es todo. Ya no basta ya con estar en la red." text="Es necesario que tu web sea una inversión realmente útil, que contribuya a generar leads, interacciones, conversiones… y que todo tu negocio online esté plenamente integrado con tu sistema de gestión empresarial." enlace="#" link="tenemos un sistema para tu empresa" />
    </section>

		<section>
      <x-cuadro imagen="web-mundo.jpg" title="Consigue mejorar tu presencia en Internet con una página web corporativa con todas las ventajas de diseño web moderno y depurado, con un estilo y una estructura atractiva para el usuario y para los motores de búsqueda, afin de que puedas conseguir tus objetivos de marketing en Internet" color="#5DA1AC"  enlace="#" link="consigue tus objetivos" />
    </section>

    <section>
      <x-list image="web-tu-web.jpg" title="Encontramos la mejor manera de estar en Internet." text="En Xtremis somo expertos en desarrollo web a medida para todo tipo de empresas y organizaciones" listHeader="te acompañamos en el proceso" listTitle="Tu web será" listLinkText="resolvemos tus dudas" listLink="/" listColor="#00bcd4" color="#6c757d" :list="lista"/>
    </section>

    <section>
      <x-number-list header="sistemas de comercio electrónico b2c" title="Necesitas un ecommerce que venda por sí solo y te permita realizar transacciones online." text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." :list="list" color="#5DA1AC" imagen="web-ecommerce.jpg"/>
    </section>

    <section>
      <x-image-four :images="images" color="#5DA1AC"/>
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="Confía sólo en profesionales con dilatada experiencia y a la vanguardia en nuevas tecnologías web" imagen="web-form.jpg" area="webapps" />
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
import XForm from "~/components/XForm";
import XCta from "~/components/XCta";
import XNumberList from "~/components/XNumberList";
import XList from "~/components/XList";
import XImageFour from "~/components/XImageFour";

export default {
	components: {
		XBanner,
		XImageLeft,
		XNumberList,
		XCuadro,
		XTwoImages,
		XForm,
		XCta,
		XList,
		XImageFour
	},
	data() {
		return {
			cards: [
				{
					imagen: "medida-1.png",
					texto:
						"Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
					color: "#5DA1AC"
				},
				{
					imagen: "medida-2.png",
					texto:
						"Porque te preocupa la productividad, la eficiencia, la competitividad y la calidad de tus sistemas.",
					color: "#5DA1AC"
				},
				{
					imagen: "medida-3.png",
					texto:
						"Porque no quieres encontrarte incómodos “bugs” y necesitas un código fiable que seguirá funcionando de maravilla en las nuevas versiones.",
					color: "#5DA1AC"
				},
				{
					imagen: "medida-4.png",
					texto:
						"Porque necesitas un programa a medida fácil e intuitivo, que no requiera una formación larga y costosa para su utilización.",
					color: "#5DA1AC"
				},
				{
					imagen: "medida-5.png",
					texto:
						"Porque cada sector es diferente y no siempre existen las aplicaciones adecuadas en el mercado.",
					color: "#5DA1AC"
				}
			],

			twoImageCards: [
				{
					title: "Mayor competitividad.",
					text:
						"Gracias a las apps móviles, puedes mejorar las ventas de tu empresa, obtener una mayor competitividad en el comercio móvil y aumentar la satisfacción de los clientes con tu marca."
				},
				{
					title: "LLega a tus clientes.",
					text:
						"Es esencial contar con la experiencia de expertos desarrolladores, que te proporcionen la mejor solución y desarrollen una app basada en los principios de calidad, elegancia, usabilidad y adaptabilidad."
				},
				{
					title: "Mejor experiencia de usuario.",
					text:
						"Proporcionas a tus clientes una experiencia de usuario de un nivel superior que puede incrementar tus ventas y conversiones de manera sorprendente."
				}
			],

			ctas: [
				{
					img: "cta-medida.jpg",
					url: "/medida"
				},
				{
					img: "cta-apps.jpg",
					url: "/mobile"
				},
				{
					img: "cta-consulting.jpg",
					url: "/consulting"
				},
				{
					img: "cta-design.jpg",
					url: "/design"
				}
			],

			list: [
				{
					title: "Seguridad.",
					text:
						"Desarrollamos sitios web 100% seguros, concertificados SSL y pasarelas de pago seguras para que puedas realizar tus operaciones de forma segura."
				},
				{
					title: "Gestión integral.",
					text:
						"Nuestras aplicaciones pueden estar integradas con un sistema ERP (Enterprise Resource Planning) que permita la gestión integral de las operaciones y la sincronización de datos en tiempo real."
				},
				{
					title: "Adaptabilidad.",
					text:
						"Podemos crear un ecommerce a medida, o bien adaptar, optimizar y mejorar un comercio electrónico basado en herramientas como Magento, Prestashop, WooCommerce…"
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
					image: "web-01.jpg",
					title: "Xpertise",
					text:
						"Somos profesionales con más de 20 años de experiencia y estamos en el mundo del diseño web desde sus inicios."
				},
				{
					image: "web-02.jpg",
					title: "la mejor fórmula",
					text:
						"Conocemos y dominamos todas las tecnologías y lenguajes de programación, por lo que siempre encontraremos la mejor solución para tu web."
				},
				{
					image: "web-03.jpg",
					title: "tu proyecto es único",
					text:
						"Estudiamos tu proyecto y te ayudamos a entender lo que necesitas con los estándares y lenguajes hoy existentes."
				},
				{
					image: "web-04.jpg",
					title: "timing",
					text:
						"Cumplimos con los plazos para que la puesta en marcha de tu web pueda llevarse a cabo a tiempo y dentro del calendario de tu empresa."
				}
			]
		};
	},
  head () {
    return {
      title: 'Diseño de páginas web, e-business, B2B. Xtremis',
      meta: [
        { name: "description", content: "Diseño de páginas web, e-business, B2B. En Barcelona y Bilbao. Xtremis." },
      ]
    }
  }
};
</script>

<style scoped>
.app {
	color: #4d5674;
}
</style>
