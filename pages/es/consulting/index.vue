<template>
	<div class="app">
	  <section>
      <x-banner title="Consultoría Informática" subtitle="Facilitamos tu integración tecnológica" imagen="consulting-cap.jpg" color="#DD3A85" />
	  </section>

    <section>
      <x-image-left imagen="consulting-left.jpg" color="#DD3A85" header="xpertos en consultoria de software made in barcelona" title="Software para empresas y organizaciones que necesiten solventar dudas y asegurar el éxito de sus programas." text="Con más de 25 años de experiencia en el sector de software a medida, Xtremis te acompaña en todas las fases del proceso de creación para que puedas ahorrar costes, mejorar la calidad  de los resultados y reducir el tiempo de desarrollo invertido en tu proyecto." enlace="#" link="asegura el éxito de tus programas" />
    </section>

    <section>
      <x-image-four :images="images" color="#DD3A85"/>
    </section>

    <section>
      <x-list-three image="consulting-list.jpg" title="Trabajamos para ayudarte a conseguir los mejores resultados" text="Eligiendo las tecnologías y utilizando los lenguajes de programación adecuados" color="#DD3A85" :list="list3"/>
    </section>

    <section>
      <x-cards head="conoce el método scrum" title="Método SCRUM." text="Mejora la flexibilidad de tu desarrollo y adapta el proyecto a los nuevos requisitos." color="#DD3A85" :cards="cards" />
    </section>

		<section>
      <x-cuadro imagen="consulting-cuadro.jpg" head="controla tus objetivos" title="Evita aumentos repentinos del presupuesto debido a imprevistos o dilatación de los tiempos de entrega." text="<p>Ajusta el desarrollo de tus proyectos a horarios pre-establecidos para que la puesta en marcha e implementación no se eternicen en el tiempo.</p><p></p><p>Asegura la calidad del proyecto, analizando y verificando previamente cuáles son las mejores tecnologías para conseguir los mejores resultados, para que después no tengas entre las manos un software deficiente.</p>" color="#DD3A85"  enlace="#" link="planificamos tu proyecto de software" />
    </section>

    <section>
      <x-cards-l-r head="4 puntos para mejorarár procesos de la organización" title="Planificamos para que tu objetivo no se vaya de las manos." text="Si estás planeando la creación de un proyecto de software, Xtremis te ayuda a llevar a cabo una adecuada planificación para que tu objetivo no se te vaya de las manos." color="#DD3A85" :cards="cards" />
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="Confía sólo en profesionales con dilatada experiencia y a la vanguardia en nuevas tecnologías web" imagen="consulting-form.jpg" area="webapps" />
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
import XForm from "~/components/XForm";
import XCta from "~/components/XCta";
import XImageFour from "~/components/XImageFour";
import XCards from "~/components/XCards";
import XCardsLR from "~/components/XCardsLR";
import XListThree from "~/components/XListThree";

export default {
	components: {
		XBanner,
		XImageLeft,
		XCuadro,
		XForm,
		XCta,
		XImageFour,
		XListThree,
		XCards,
		XCardsLR
	},
	data() {
		return {
			cards: [
				{
					imagen: "consulting-c01.jpg",
					title: "Creación del backlog",
					texto:
						"<p>Primero de todo elaboramos un documento en el que se contienen todos los requisitos del proyecto, definidos por nuestros clientes.</p><p>Trabajamos codo con codo con nuestros clientes para que el producto final se ajuste a sus necesidades y expectativas.</p>",
					color: "#DD3A85"
				},
				{
					imagen: "consulting-c02.jpg",
					title: "Reunión de planificación",
					texto:
						"<p>A continuación definimos las tareas que se van a realizar durante el sprint de trabajo diario.</p><p>Comprobamos que todo el mundo tenga su función asignada en el proyecto.</p>",
					color: "#DD3A85"
				},
				{
					imagen: "consulting-c03.jpg",
					title: "Coordinamos equipos",
					texto:
						"<p>Antes de iniciar cada tarea, cada responsable debe hacerse las tres preguntas básicas del método SCRUM.</p><p>¿Qué hiciste ayer?,</p><p>¿Qué harás hoy?</p>",
					color: "#DD3A85"
				},
				{
					imagen: "consulting-c04.jpg",
					title: "Gestión de entregas",
					texto:
						"<p>Cada dos semanas, gestionamos las entregas y se revisa el trabajo completado hasta el momento.</p>",
					color: "#DD3A85"
				},
				{
					imagen: "consulting-c05.jpg",
					title: "Exposición y mejora",
					texto:
						"<p>En la última fase del proyecto, cada uno de los miembros del equipo expone sus impresiones sobre el sprint con el objeto de mejorarlo y conseguir mejores resultados de cara a las dos próximas semanas.</p>",
					color: "#DD3A85"
				}
			],

			list3: [
				{
					items: ["MongoDB", "ProgreSQL", "MySQL", "MariaDB", "Firebase"]
				},
				{
					items: ["CSS ", "Wordpress", "Sass"]
				},
				{
					items: ["Angular5", "ReactJS", "VueJS", "PHP", "Python", "Java"]
				},
				{
					items: ["AWS ", "Heroku", "Google Cloud", "Azure"]
				},
				{
					items: ["Watson", "TensorFlow", "DialogFlow"]
				},
				{
					items: ["NodeJS ", "SpringBoot", "Maven", "Docker", "Meteor"]
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
					img: "cta-web.jpg",
					url: "/webapps"
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
					image: "consulting-01.jpg",
					title: "mejor calidad",
					text: "Alta calidad en tus desarrollos de software."
				},
				{
					image: "consulting-02.jpg",
					title: "planificación de los procesos",
					text: "Desarrollar una controlada planificación."
				},
				{
					image: "consulting-03.jpg",
					title: "lenguaje de programación",
					text: "Elegir las tecnologías y lenguajes de programación adecuados."
				},
				{
					image: "consulting-04.jpg",
					title: "desarrollo de software",
					text: "Reducir los tiempos invertidos en desarrollo de software."
				}
			]
		};
	},
  head () {
    return {
      title: 'Consultoría informática. Xtremis',
      meta: [
        { name: "description", content: "Consultoría informática. En Barcelona y Bilbao. Xtremis." },
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
