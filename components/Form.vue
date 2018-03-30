<template>
  <section class="d-md-flex bg-secondary d-flex align-items-center pt-5 pb-5 clearfix" data-pgc-define="form" data-pgc-edit="form-bg-image[no_content]" data-pgc-edit-bckimage :style="{ backgroundImage: `url(${imagen})`}">
    <div class="row w-100 pl-4 pl-sm-4">
      <div class="col-lg-2 d-none d-md-inline">
      </div>
      <div class="col-lg-5 mb-5 ">
        <h5 class="dorado small-caps-text" style="color: white;" data-pgc-edit="form-intro">{{headline}}<br></h5>
        <h3 style="color: white;" data-pgc-edit="form-text">{{text}}</h3>
      </div>
      <div class="col-lg-5">
        <div>
          <form>
            <div class="form-group">
              <label for="name" style="color: white;" id="name-label">Nombre</label>
              <input type="text" class="form-control item-formulario" id="name">
            </div>
            <div class="form-group">
              <label for="email" style="color: white;">Email</label>
              <input type="email" class="form-control item-formulario" id="email">
            </div>
            <div class="form-group">
              <label for="message" style="color: white;">Mensaje</label>
              <textarea class="form-control item-formulario" id="message" rows="3"></textarea>
            </div>
            <div class="form-group text-light">
              <input type="checkbox" value="yes"> He leído y acepto la política de privacidad.
            </div>
          </form>
          <button type="submit" class="btn btn-light btn-block" style="font-variant: small-caps;">enviar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'headline', 'text', 'imagen'
  ]
  // data() {
  //   return {
  //     headline: 'solicita información y asesoramiento sin compromiso',
  //     text: '¿Tu empresa necesita mejorar su tecnología con un software integral y personalizado, a la medida de sus necesidades?',
  //     imagen: 'https://s3-eu-west-1.amazonaws.com/ebp-myvue/medida-form%20copia%202.png'
  //   }
  // }
}
</script>

<style scoped>

</style>
