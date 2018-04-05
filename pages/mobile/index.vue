<template>
	<div class="app">
	  <section>
      <x-banner title="Desarrollo de aplicaciones para móvil" subtitle="Llevamos tu aplicación al móvil" imagen="app-cap.jpg" color="#FF5252" />
	  </section>

    <section>
      <x-two-images :cards="twoImageCards" title="Llega más y mejor a tus clientes." subt="En un mundo interconectado y dominado por los smartphones, las aplicaciones móviles son la herramienta básica para que puedas llegar a tus clientes." text="Casi la mitad de los clientes piensan que usar un dispositivo móvil en la tienda mejoraría su experiencia. La mejor forma de hacerlo es mediante una app móvil propia." color="#FF5252" imagen="app-slice2.jpg" />
    </section>

		<section>
      <x-cuadro imagen="app-cuadro.jpg" head="Xpertos en desarrollo de apps desde los inicios del smartphone" title="Profesionalidad, ingenio y perspicacia. Claves para una app de éxito." text="<p>La creación de una app móvil es un complemento con grandes posibilidades, que ofrece información al usuario y facilita la fidelización de tus clientes.</p>" color="#FF5252"  enlace="#" link="resolvemos tus dudas" />
    </section>

	  <section>
      <x-banner-right title="¿Qué tipo de app móvil necesita tu empresa?" subtitle="En Xtremis somos expertos en el desarrollo de aplicaciones móviles para Android, iOs o basadas en HTML5."  imagen="app-choose.jpg" color="#ffffff" />
	  </section>

    <section>
      <x-number-list-right :list="listNativas" title="Apliaciones Nativas." text="Los diferentes sistemas operativos utilizados en los dispositivos móviles tienen sus propios lenguajes nativos, bajo los cuales funcionan las aplicaciones que se pueden instalar en ellos." color="#FF5252" imagen="app-nativas.jpg"/>
    </section>

    <section>
      <x-number-list-right :list="listHibridas" title="Aplicaciones Hibridas." text="Este tipo de apps combina tecnologías web y tecnologías de las apps nativas para poder trabajar sobre ambas plataformas. Están escritas en HTML, JavaScript y CSS." color="#FF5252" />
    </section>

		<section>
      <x-cuadro imagen="app-cuadro-2.jpg" head="aumenta el valor de la marca" title="Fideliza tus clientes." text="<p>La creación de una app móvil es un complemento con grandes posibilidades, que ofrece información al usuario y facilita la fidelización de tus clientes.</p>" color="#FF5252"  enlace="#" link="fideliza tus clientes" />
    </section>

    <section>
      <x-form headline="solicita información y asesoramiento sin compromiso" text="Si quieres dar el paso, solicita ahora información sin compromiso sobre nuestros desarrollos de aplicaciones móviles" imagen="app-form.jpg" area="mobile" />
    </section>

    <section>
      <x-cta :ctas="ctas"/>
    </section>    

	</div>
</template>

<script>
import XBanner from "~/components/XBanner";
import XBannerRight from "~/components/XBannerRight";
import XCuadro from "~/components/XCuadro";
import XTwoImages from "~/components/XTwoImages";
import XForm from "~/components/XForm";
import XCta from "~/components/XCta";
import XNumberListRight from "~/components/XNumberListRight";

export default {
	components: {
		XBanner,
		XBannerRight,
		XNumberListRight,
		XCuadro,
		XTwoImages,
		XForm,
		XCta
	},
	data() {
		return {
			cards: [
				{
					imagen: "medida-1.png",
					texto:
						"Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas.",
					color: "#FF5252"
				},
				{
					imagen: "medida-2.png",
					texto:
						"Porque te preocupa la productividad, la eficiencia, la competitividad y la calidad de tus sistemas.",
					color: "#FF5252"
				},
				{
					imagen: "medida-3.png",
					texto:
						"Porque no quieres encontrarte incómodos “bugs” y necesitas un código fiable que seguirá funcionando de maravilla en las nuevas versiones.",
					color: "#FF5252"
				},
				{
					imagen: "medida-4.png",
					texto:
						"Porque necesitas un programa a medida fácil e intuitivo, que no requiera una formación larga y costosa para su utilización.",
					color: "#FF5252"
				},
				{
					imagen: "medida-5.png",
					texto:
						"Porque cada sector es diferente y no siempre existen las aplicaciones adecuadas en el mercado.",
					color: "#FF5252"
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
					img: "cta-web.jpg",
					url: "/webapps"
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

			listNativas: [
				{
					title: "Mayor rendimiento.",
					text:
						"La experiencia de usuario y la interfaz ofrecen un alto rendimiento, ya que estamos utilizando los elementos gráficos y funciones que ofrece el propio sistema."
				},
				{
					title: "Mayor integración.",
					text:
						"Si hacemos una app nativa, trabajamos con las funciones y el SDK (Software Developement Kit) propios de ese sistema operativo"
				},
				{
					title: "Mayor adaptabilidad.",
					text:
						"Las aplicaciones nativas se adaptan al 100% a las funcionalidades del dispositivo, lo que incluye el acceso al hardware y diferentes sensores propios de los dispositivos diseñados para trabajar con ese SO."
				}
			],

			listHibridas: [
				{
					title: "Menor esfuerzo.",
					text:
						"Tienes un solo código y por tanto la aplicación que requiere conocimientos en un solo lenguaje para su mantenimiento."
				},
				{
					title: "Menor coste.",
					text:
						"Suponen un coste menor, al no tener que desarrollar aplicaciones equivalentes en otro lenguaje de programación y para otros sistemas operativos."
				},
				{
					title: "Menor desarrollo.",
					text:
						"Este tipo de aplicaciones tampoco requiere conexiones a bases de datos externas complicadas. Son más sencillas y suponen también menos tiempo de desarrollo."
				}
			]
		};
	}
};
</script>

<style scoped>
.app {
	color: #4d5674;
}
</style>
