<script>
import { required } from "vuelidate/lib/validators";
import { UserService } from './../services/index';
/**
 * Forgot Password component
 */
export default {
  layout: "auth",
  middleware: 'notauth',
  head() {
    return {
      title: `Cambiar contraseña -`+this.nameProyect,
    };
  },
  data() {
    return {
      token: "",
      password:"",
      password2:"",
      submitted: false,
      error: null
    };
  },
  validations: {
    password: {
      required
    },
    password2: {
      required
    }
  },
  computed:{
    nameProyect(){
      return process.env.NAME_PROYECT;
    }
  },
  methods: {
    // Try to register the user in with the email, fullname
    // and password they provided.
   async Reset() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
          if(this.password!=this.password2){
                this.submitted=false;
                this.$swal({
                  icon: 'warning',
                  timer: 15000,
                  text: 'La contraseña no son iguales.',
              });
          }else{
              const data=await UserService.activePassword(this.password,this.$route.query.t);
              if(data.data.code==1){
                  this.password="";
                  this.password2="";
                  this.submitted=false;
                  this.$router.push("/login");
              }else{
                  this.submitted=false;
                  this.$swal({
                      icon: 'warning',
                      timerProgressBar: true,
                      text: data.data.message,
                  });
              }
          }

      }
    },
  },
};
</script>

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <nuxt-link to="/" class="text-dark">
        <i class="mdi mdi-home-variant h2"></i>
      </nuxt-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div>
              <nuxt-link to="/" class="mb-5 d-block auth-logo">
                <img
                  src="~/assets/images/logo-dark.png"
                  alt
                  height="22"
                  class="logo logo-dark"
                />
                <img
                  src="~/assets/images/logo-light.png"
                  alt
                  height="22"
                  class="logo logo-light"
                />
              </nuxt-link>
              <div class="card">
                <div class="card-body p-4">
                  <div class="text-center mt-2">
                    <h5 class="text-primary">Cambiar la contraseña</h5>
                    <p class="text-muted">Cambiar contraseña con {{nameProyect}}.</p>
                  </div>
                  <div class="p-2 mt-4">
                    <form @submit.prevent="Reset">
                      <div class="mb-1">
                        <label for="password">Contraseña:</label>
                        <input
                          type="password"
                          v-model="password"
                          class="form-control"
                          id="password"
                          placeholder="Ingrese Contraseña"
                          :class="{
                            'is-invalid': submitted && $v.password.$error,
                          }"
                        />
                        <div
                          v-if="submitted && $v.password.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.password.required"
                            >Contraseña es requerido.</span
                          >
                        </div>
                      </div>
                       <div class="mb-3">
                        <label for="password2">Verificar contraseña:</label>
                        <input
                          type="password"
                          v-model="password2"
                          class="form-control"
                          id="password2"
                          placeholder="Ingrese Verificar contraseña"
                          :class="{
                            'is-invalid': submitted && $v.password2.$error,
                          }"
                        />
                        <div
                          v-if="submitted && $v.password2.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.password2.required"
                            >Verificar contraseña es requerido.</span
                          >
                        </div>
                      </div>

                      <div class="form-group row mb-0">
                        <div class="col-12 text-end">
                          <button class="btn btn-primary w-sm" type="submit" :disabled="submitted">
                            <i class="fa fa-spinner fa-spin" v-if="submitted"></i>Enviar
                          </button>
                        </div>
                      </div>
                      <div class="mt-4 text-center">
                        <p class="mb-0">
                          Recuerdalo ?
                          <nuxt-link
                            to="/login"
                            class="fw-medium text-primary"
                            >Iniciar sesión</nuxt-link
                          >
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->

              <div class="mt-5 text-center">
                <p>
                  © {{ new Date().getFullYear() }} Minible. Crafted with
                  <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                </p>
              </div>
            </div>
            <!-- end col -->
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

<style lang="scss" module></style>
