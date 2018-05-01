<template>
  <div
    :style="fondo"
    class="d-flex pt-5 pb-5 clearfix">
    <div class="row w-100 pl-4">
      <div class="col-lg-2 d-none d-md-inline">
        &nbsp;
      </div>
      <div class="col-lg-5 mb-5">
        <h5
          class="dorado small-caps-text"
          style="color: white;">{{ headline }}<br></h5>
        <h3 style="color: white">{{ text }}</h3>
      </div>
      <div class="col-lg-5">
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            action="https://xtremis.us12.list-manage.com/subscribe/post?u=e090adf30b4d4dfff9793c5c0&amp;id=6eafa36ec0"
            method="post"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank">
            <input
              :value="`${area}`"
              type="hidden"
              name="area">
            <div class="form-group">
              <label
                id="name-label"
                for="mce-LNAME"
                style="color: white;">Nombre</label>
              <!--<input type="text" class="form-control item-formulario" id="name">-->
              <input
                id="mce-LNAME"
                type="text"
                value=""
                name="LNAME"
                class="form-control item-formulario"
                required>
            </div>
            <div class="form-group">
              <label
                for="mce-EMAIL"
                style="color: white;">Email</label>
              <!--<input type="email" class="form-control item-formulario" id="email">-->
              <input
                id="mce-EMAIL"
                type="email"
                value=""
                name="EMAIL"
                class="form-control item-formulario"
                required>
            </div>
            <div class="form-group">
              <label
                for="mce-MESSAGE"
                style="color: white;">Mensaje</label>
              <textarea
                id="mce-MESSAGE"
                class="form-control item-formulario"
                name="MESSAGE"
                rows="3"/>
            </div>
            <div class="form-group text-light">
              <input
                id="mce-group[12617]-12617-0"
                type="checkbox"
                name="group[12617][1]"
                value="1"
                required>&nbsp;<label>He leído y acepto la política de privacidad.</label>
            </div>
            <div id="wrapper">
              <div
                id="mce-responses"
                class="clear">
                <div
                  id="mce-error-response"
                  class="response"
                  style="display:none"/>
                <div
                  id="mce-success-response"
                  class="response"
                  style="display:none"/>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true">
                <input
                  type="text"
                  name="b_e090adf30b4d4dfff9793c5c0_6eafa36ec0"
                  tabindex="-1"
                  value="">
              </div>

              <!--<button type="submit" class="btn btn-light form-button" id="mc-embedded-subscribe">enviar</button>-->
              <input
                id="mc-embedded-subscribe"
                :style="{color: `${color}`}"
                type="submit"
                value="enviar"
                name="subscribe"
                class="btn btn-light form-button button">
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--<script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='AREA';ftypes[6]='text';fnames[7]='MESSAGE';ftypes[7]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>-->
    <!--End mc_embed_signup-->
  </div>
</template>

<script>
  export default {
    props: ["headline", "text", "imagen", "area", "color"],
    data() {
      return {
        bgImg: require(`~/assets/img/${this.imagen}`)
      };
    },
    computed: {
      fondo() {
          if (this.$mq === 'mobile' || this.$mq === 'tablet' || this.$mq === 'laptop') {
            return {backgroundImage: `url('${this.bgImg}')`, backgroundPosition: 'right center'}
          } else {
            return {backgroundImage: `url('${this.bgImg}')`, backgroundPosition: 'left center'}
          }
      }
    }
  };
</script>

<style scoped>
  label {
    font-size: 17px;
  }
  .form-button {
    margin-top: 30px;
    padding: 13px 0;
    width: 182px;
    border-radius: 10px;
    letter-spacing: 0.08em;
    font-weight: bold;
    font-variant: small-caps;
  }
  #wrapper {
    display: flex;
    justify-content: center;
  }
</style>
