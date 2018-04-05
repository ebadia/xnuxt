<template>
  <div class="row mt-5 mb-5">
    <div class="offset-xl-2 offset-lg-2 offset-md-2 offset-sm-1 offset-1 col-md-9 col-sm-11 col-11">
      <div class="row mt-5 mb-5">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-9 pl-0">
          <h5 class="small-caps-text" :style="{color: `${color}`}">{{head}}</h5>
          <h1 class="item">{{title}}</h1>
          <h3 :style="{color: `${color}`}">{{text}}<br></h3> 
        </div>
      </div>
      <!-- cards -->
        <x-card-l imagen="consulting-lr-01.jpg" text="<p>Especificamos el tipo de software, características, comportamiento y funciones básicas que debe incluir, requerimientos de infraestructura y proceso de desarrollo para poder llevar a cabo el proyecto.</p><p>Describimos el tipo de interacciones que desarrollarán los usuarios con el software, de cara a lograr los mejores resultados en productividad, automatización, prioridades, consistencia e integración con otros programas.</p>" color="#DD3A85" title="Especificación" valign="top"/>

        <x-card-r imagen="consulting-lr-02.jpg" text="<p>Analizamos las necesidades de software de la empresa, qué es lo que se quiere hacer y cómo se ha hecho hasta ahora.</p><p>Examinamos los procesos de la compañía y le proporcionamos nuestras ideas, consejos y soluciones de software para resolver problemas que permitan a la empresa conseguir los mejores resultados.</p>" color="#DD3A85" title="Análisis previo" valign="bottom"/>

        <x-card-r imagen="consulting-lr-03.jpg" text="<p>En Xtremis somos expertos en el uso de las más variadas tecnologías, lenguajes de programación, bases de datosy uso de frameworks.</p><p>Trabajamos conJava, Ruby, JavaScript, HTML5, CSS3, mySQL, Oracle 9g y 10g y entornos de ejecución como Rails, Meteors o Groovy on Rails.</p>" color="#DD3A85" title="Uso de tecnologías" valign="top"/>

        <x-card-l imagen="consulting-lr-04.jpg" text="<p>Xtremis participa en la gestión de proyectos llevando a cabo el seguimiento y monitorización necesaria que te ayudará a reducir costes y aumentar las probabilidades de éxito de tu negocio.</p><p>Apostamos por la automatización de tests para garantizar la fiabilidad y seguridad de las aplicaciones creadas y recomendamos a nuestros clientes los mejores métodos de verificación.</p>" color="#DD3A85" title="Seguimiento" valign="top"/>
     </div>         
  </div>
</template>

<script>
import XCardL from "~/components/XCardL";
import XCardR from "~/components/XCardR";

export default {
  components: {
    XCardL,
    XCardR
  },
  props: {
    head: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
