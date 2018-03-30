<template>
  <div>
    <Banner title="Desarrollo de software a medida" subtitle="Creamos software a medida" imagen="https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-cap.png" color="$medida" />

    <section>
      <div class="row mt-5 mb-5 pt-5 pb-5">
        <div class="offset-md-2 offset-1 col-10 offset-sm-1 col-sm-10 col-md-9">
          <div class="col-md-4">
            <XImage imagen="https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-1.png" text="Porque estás cansado de probar programas genéricos y enlatados que no te aportan soluciones concretas." color="$medida" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row mt-5 mb-5 pt-5 pb-5">
        <div class="col-md-3 offset-md-1">
          <XNumber number="01" title="Seguridad" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. Curabitur ac sagittis neque, vel egestas est. Aenean elementum, erat at aliquet hendrerit, elit nisl posuere tortor, id suscipit diam dui sed nisi. Morbi sollicitudin massa vel tortor consequat, eget semper nisl fringilla." color="$medida" />
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
import XImage from '~/components/XImage'

export default {

  components: {
    Banner,
    Form,
    XNumber,
    XImage
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
