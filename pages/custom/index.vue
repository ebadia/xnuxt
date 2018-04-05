<template>
	<div>
	  <section>
      <x-banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="medida-cap.jpg" color="#bbb53e" />
	  </section>

		<section>
			<x-cards head="5 Soluciones de desarrollo de software a medida" title="Adapta el software a tu empresa, no tu empresa al software" text="Software a medida, la solución más eficaz para cubrir las necesidades de tu negocio." color="#bbb53e" :cards="cards" />
		</section>

		<section>
      <x-cuadro imagen="medida-Fondo.jpg" head="perfecciona tus procesos " title="Diseño de software a la carta, la solución que estabas esperando." text="<p>En el mundo del software empresarial, una mala elección puede llevarte a perder muchísimo tiempo y dinero.</p><p>En cambio, un programa personalizado y a medida puede ayudarte a perfeccionar tus procesos y mejorar tu productividad a niveles como no habías imaginado.</p>" color="#bbb53e"  enlace="#" link="resolvemos tus dudas" />
    </section>

    <section>
      <x-two-images :cards="twoImageCards" title="Las ventajas del software a medida." subt="El software a medida ayuda a resolver problemas y optimizar las necesidades de software de nuestros clientes." text="Las organizaciones que ya han dado el paso han podido observar sus principales ventajas frente a los 'programas enlatados'." color="#bbb53e" imagen="medida-slice2.jpg" />
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
import XCards from "~/components/XCards";
import XCuadro from "~/components/XCuadro";
import XTwoImages from "~/components/XTwoImages";
import XForm from "~/components/XForm";
import XCta from "~/components/XCta";

export default {
	components: {
		XBanner,
		XCards,
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
					title: "Diseño exclusivo y personalizado.",
					text:
						"A diferencia de los programas genéricos, el software a medida se adapta a las necesidades específicas de tu organización."
				},
				{
					title: "Flexibilidad máxima.",
					text:
						"No te damos un software de código cerrado. Se pueden añadir mejoras, modificaciones y novedades para que tu programa crezca a la par de tu empresa."
				},
				{
					title: "Alto valor.",
					text:
						"Al ser un programa a medida, éste pasará a convertirse en un activo de altísimo valor dentro de tu organización."
				},
				{
					title: "Integración perfecta",
					text:
						"La aplicación estará plenamente integrada con la infraestructura TI de tu entidad comercial."
				},
				{
					title: "Fácil e intuitivo",
					text:
						"El programa es fácil de utilizar y no requiere de instalaciones innecesarias, ni períodos de formación largos y complejos."
				}
			],

			ctas: [
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
				{
					img: "cta-design.jpg",
					url: "/design"
				}
			]
		};
	}
};
</script>
