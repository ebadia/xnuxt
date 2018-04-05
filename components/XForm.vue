∫ <template>
  <div class="d-flex pt-5 pb-5 clearfix" :style="{ backgroundImage: `url('${bgImg}')`, backgroundPosition: 'left center'}">
    <div class="row w-100 pl-4">
      <div class="col-lg-2 d-none d-md-inline">
        &nbsp;
      </div>
      <div class="col-lg-5 mb-5">
          <h5 class="dorado small-caps-text" style="color: white;">{{headline}}<br></h5>
          <h3 style="color: white;">{{text}}</h3> 
      </div>
      <div class="col-lg-5">
        <form>
          <input type="hidden" name="area" :value="`${area}`">
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
          <button type="submit" class="btn btn-light btn-block" style="font-variant: small-caps;">enviar</button>                 
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headline", "text", "imagen", "area"],
  data() {
    return {
      bgImg: require(`~/assets/img/${this.imagen}`)
    };
  }
};
</script>

<style scoped>
</style>
