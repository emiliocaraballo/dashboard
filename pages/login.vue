<script>
import { required, email } from "vuelidate/lib/validators";
import { UserService } from './../services/index'
/**
 * Login component
*/
export default {
  head() {
      return {
        title: `Login -`+this.nameProyect
      };
  },
  layout: "auth",
  middleware: 'notauth',
  created(){

  },
  data() {
    return {
      email: "",
      password: "123456",
      code:"",
      messagecode:"",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      isPassword:false,
      isCode:false,
      required:false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    },
     code: {

    }
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
    notificationAutoCloseDuration() {
      return this.$store && this.$store.state.notification ? 5 : 0;
    },
    nameProyect(){
      return process.env.NAME_PROYECT;
    }
  },
  methods: {
    swalmenssage(data){
         this.$swal({
          icon: 'warning',
          timer: 5000,
          text:data
         });
    },
   async validateUser(email){
        const data=await UserService.validateUser(email);
        return {status:data.data.code>0,message:data.data.message};
    },
    // Try to log the user in with the username
    // and password they provided.
  async LogIn() {
      this.submitted = true;
      // deténgase aquí si el formulario no es válido
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {

        if(this.isCode){
            if(this.code.length==0){
              this.required=true;
              this.submitted=false;
              return;
            }
        }

        if(!this.isPassword){
          // validar el usuario
          const validateUser=await this.validateUser(this.email).catch((error)=>{});
          this.submitted=false;
          if(!validateUser.status){
              this.swalmenssage(validateUser.message);
              return;
          }else{
            // activar campo de password
              this.isPassword=true;
              this.password="";
          }
        }else{
          const result=await UserService.login(this.email,this.password,this.code);

          if(result.data.code==1){
            // ya esta logiado
              localStorage.setItem('token',result.data.token);
              localStorage.setItem('user',JSON.stringify(result.data.user));
              localStorage.setItem('id',result.data.id);
              window.location.reload();
          }else if(result.data.code==2){
            this.submitted=false;
            // factor de auteticación
                this.isCode=!this.isCode;
                this.messagecode=result.data.message;
          }else{
            this.submitted=false;
            // ocurrio algo.
            this.swalmenssage(result.data.message);
          }
        }
      }
    }
  }
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
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
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
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Bienvenido de nuevo !</h5>
                  <p class="text-muted">Inicia sesión para continuar con Minible.</p>
                </div>
                <div class="p-2 mt-4">
                  <b-alert
                    v-model="isAuthError"
                    variant="danger"
                    class="mt-3"
                    dismissible
                    >{{ authError }}</b-alert
                  >

                  <div
                    v-if="notification.message"
                    :class="'alert ' + notification.type"
                  >
                    {{ notification.message }}
                  </div>

                  <b-form @submit.prevent="LogIn">
                    <b-form-group
                      id="input-group-1"
                      label="Correo"
                      label-for="input-1"
                      class="mb-3"
                      v-show="!isCode"
                    >
                      <b-form-input
                        id="input-1"
                        name="username"
                        v-model="email"

                        type="text"
                        placeholder="Ingrese el Correo"
                        :class="{ 'is-invalid': submitted && $v.email.$error }"
                      ></b-form-input>
                      <div
                        v-if="submitted && $v.email.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.email.required"
                          >Correo electronico es requerido.</span
                        >
                        <span v-if="!$v.email.email"
                          >Por favor introduzca un correo electrónico válido.</span
                        >
                      </div>
                    </b-form-group>

                    <b-form-group id="input-group-2" class="mb-3" v-if="isPassword" v-show="!isCode">
                      <div class="float-end">
                        <nuxt-link
                          to="/forgot-password"
                          class="text-muted"
                          >¿Se te olvidó tu contraseña?</nuxt-link
                        >
                      </div>
                      <label for="input-2">Contraseña</label>
                      <b-form-input
                        id="input-2"
                        v-model="password"

                        name="password"
                        type="password"
                        placeholder="Ingrese la Contraseña"
                        :class="{
                          'is-invalid': submitted && $v.password.$error
                        }"
                      ></b-form-input>
                      <div
                        v-if="submitted && !$v.password.required"
                        class="invalid-feedback"
                      >
                        Contraseña es requerida.
                      </div>
                    </b-form-group>

                    <b-form-group
                      v-show="isCode"
                      id="input-group-1"
                      label="Código"
                      label-for="input-1"
                      class="mb-3"
                    >
                      <b-form-input

                        id="input-1"
                        name="code"
                        v-model="code"
                        type="text"
                        placeholder="Codigó"
                        :class="{
                          'is-invalid': submitted && required
                        }"
                      ></b-form-input>
                      <div
                        v-if="submitted && required"
                        class="invalid-feedback"
                      >
                        Código es requerido.
                      </div>
                       <label class="form-check-label" style="font-size: 0.8rem;font-weight: 100;padding:0 3px;cursor:default;"
                        >{{messagecode}}</label>

                    </b-form-group>





                    <div class="form-check" v-if="isPassword">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="auth-remember-check"
                      />
                      <label class="form-check-label" for="auth-remember-check"
                        >Recuérdame</label
                      >
                    </div>
                    <div class="mt-3 text-end">
                      <b-button type="submit" variant="primary" class="w-sm" :disabled="submitted"><i class="fa fa-spinner fa-spin" v-if="submitted"></i>Iniciar sessión</b-button
                      >
                    </div>
                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="font-size-14 mb-3 title">Inicia sesión con</h5>
                      </div>

                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            href="javascript:void()"
                            class="social-list-item bg-danger text-white border-danger"
                          >
                            <i class="mdi mdi-google"></i>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </b-form>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->
            </div>
            <div class="mt-5 text-center">
              <p>
                © {{ new Date().getFullYear() }} {{nameProyect}}. Todos los derechos reservados
              </p>
            </div>
            <!-- end row -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" module></style>
