<script>
import { UserService }  from '../../services/index';
/**
 * Starter page
 */
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`
        };
    },
    data() {
        return {
            title: "Registrar usuario",
            items: [{
                    text: "Utility",
                    href: "/"
                },
                {
                    text: "Registrar usuario",
                    active: true
                }
            ],
            form:{
            name:'',
            last_name:'',
            identification:'',
            phone:'',
            email:'',
            pass:'',
            pass2:'',
            gender:'',
            role:'',
            profile:'',
          },
          loading:false,
          options:[
              { value: "", text: 'Por favor seleccione una opción' },
              { value: "M", text: 'Masculino' },
              { value: "F", text: 'Femeninos' },
              { value: "O", text: 'Otros' },
            ],
            roles:[
              { value: "", text: 'Por favor seleccione una opción' }
            ],
            roles2:[
              { value: "", text: 'Por favor seleccione una opción' },
              { value: 1, text: 'Normal' }
            ]
        };
    },
    middleware: "authentication",
    async created(){
     try {
        const data=await UserService.getProfile();
        data.data.role.forEach((item)=>{
            this.roles.push({text:item.title,value:item.id});
        });
     } catch (error) {

     }

    //  if(this.$store.getters["getUser"].role==2){
    //     this.roles2.push({values:2,text:'Avanzado'});
    //  }
    },
    methods: {
       validPassword: function(password){
            let re = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
            return re.test(password);
      },
      async onSubmit(){
         event.preventDefault();

         if(this.form.name.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Nombre.'
              });
              return;
         }

         if(this.form.last_name.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Apellido.'
              });
              return;
         }

         if(this.form.identification.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Identificación.'
              });
              return;
         }

         if(this.form.phone.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Celular.'
              });
              return;
         }

          if(this.form.email.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Correo eletronico.'
              });
              return;
         }

        if(this.form.gender.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Genero.'
              });
              return;
         }

         if(this.form.profile.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Perfil.'
              });
              return;
         }

         if(this.form.role.length==0){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'Valida el campo de Rol interno.'
              });
              return;
         }



         if(this.form.pass!=this.form.pass2){
              this.$swal({
                icon: 'warning',
                timer: 5000,
                timerProgressBar: true,
                text: 'La contraseña no coincide por favor verificar los campos.'
              });
              return;
          }

        if(!this.validPassword(this.form.pass)){
            this.$swal({
              icon: 'warning',
              timer: 5000,
              timerProgressBar: true,
              text: 'La contraseña debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres.'
            });
            return;
        }

        try {
          this.loading=true;
          const data=await UserService.createUser();
          if(data.data.code==1){
            this.loading=false;
            const vm=this;
            Object.keys(this.form).forEach(function(key,index) {
              vm.form[key]='';
            });
                this.$swal({
                  icon: 'success',
                  timer: 5000,
                  timerProgressBar: true,
                  text:data.data.message
                });
          }else{
            this.loading=false;
                this.$swal({
                  icon: 'warning',
                  timer: 5000,
                  timerProgressBar: true,
                  text:data.data.message
                });
                return;
          }

        } catch (error) {

        }


         //
      }
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
     <div >
       <div class="row">
          <div class="col-md-12 grid-margin">
            <div class="row">
              <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                <h6 class="font-weight-normal mb-0"> <b>Dashboard</b> - Usuarios - Registrar</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 grid-margin stretch-card" style="max-width:900px;">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Crear usuario</h4>
                  <p class="card-description">
                    Formulario básicos
                  </p>

                  <b-form @submit="onSubmit" class="forms-sample row justify-content-end">

                    <b-form-group label="Nombre:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor ingrese su nombre.">
                        <b-form-input v-model="form.name" type="text" class="form-control form-control-lg" placeholder="Nombre" required ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Apellido:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor ingrese su apellido.">
                        <b-form-input v-model="form.last_name" type="text" class="form-control form-control-lg" placeholder="Apellido" required ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Identificación:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor ingrese su identificación.">
                        <b-form-input v-model="form.identification" type="text" class="form-control form-control-lg" placeholder="Identificación" required ></b-form-input>
                    </b-form-group>

                     <b-form-group label="Celular:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor ingrese su celular.">
                        <b-form-input v-model="form.phone" type="text" class="form-control form-control-lg" placeholder="Celular" required ></b-form-input>
                    </b-form-group>
                     <b-form-group label="Genero:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor eliga el genero.">
                         <b-form-select v-model="form.gender" :options="options" class="form-control form-control-lg"></b-form-select>
                    </b-form-group>


                    <b-form-group label="Email:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor ingrese su email.">
                        <b-form-input v-model="form.email" type="text" class="form-control form-control-lg" placeholder="Email" required ></b-form-input>
                    </b-form-group>





                    <b-form-group label="Perfil:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor eliga el Perfil.">
                         <b-form-select v-model="form.profile" :options="roles" class="form-control form-control-lg"></b-form-select>
                    </b-form-group>

                     <b-form-group label="Rol:" class="font-weight-bold col-md-6" label-for="input-1" description="Por favor eliga el rol.">
                         <b-form-select v-model="form.role" :options="roles2" class="form-control form-control-lg"></b-form-select>
                    </b-form-group>

                     <b-form-group label="Contraseña:" class="font-weight-bold col-md-6" label-for="input-1" description="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres.">
                        <b-form-input v-model="form.pass" type="password" class="form-control form-control-lg" placeholder="Contraseña" required ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Verificar Contraseña:" class="font-weight-bold col-md-6" label-for="input-1" description="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres.">
                        <b-form-input v-model="form.pass2" type="password" class="form-control form-control-lg" placeholder="Verificar contraseña" required ></b-form-input>
                    </b-form-group>


                    <button type="submit" class="btn btn-primary mr-4 col-md-4" :disabled="loading"><i class="fa fa-spinner fa-spin" v-if="loading"></i>Crear</button>
                  </b-form>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>
