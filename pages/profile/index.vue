<script>
/**
 * Starter page
 */

 import 'element-ui/lib/theme-chalk/index.css'
import {Tree,Button,FormItem,Form,Dialog, Input,Table, TableColumn} from 'element-ui'
import {MenuService} from '../../services/index';
const defaultRole = {
  id: '',
  key: '',
  name: '',
  description: '',
  routes: []
}
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`
        };
    },
     components: {
       'el-tree':Tree,
       'el-button':Button,
       'el-form':Form,
       'el-form-item':FormItem,
       'el-dialog':Dialog,
       'el-input':Input,
       'el-table':Table,
       'el-table-column':TableColumn,
    },
    data() {
        return {
            title: "Perfil",
            items: [{
                    text: "Utility",
                    href: "/"
                },
                {
                    text: "Perfil",
                    active: true
                }
            ],
            data:[],
            defaultProps: {
              children: 'children',
              label: 'title'
            },
            role: Object.assign({}, defaultRole),
            rolesList: [],
            dialogVisible: false,
            dialogType: 'new',
        };
    },
    middleware: "authentication",
    async created(){


      /* Cargar menu de admin */
       this.getRoutes()
       /* cargar el listado de roles */
       this.getRoles();
    },
    methods: {
      /* Cargar menu de admin */
      async getRoutes() {
        // const res = await getRoutes()
        var data=await MenuService.getMenu(this.$store.getters["getToken"],this.$store.getters["getId"]);
        this.data=data.data.menu;
      },
      async getRoles() {
        var data=await MenuService.getRole(this.$store.getters["getToken"],this.$store.getters["getId"]);
        this.rolesList=data.data.role;
      },
      async confirmRole() {
        const isEdit = this.dialogType === 'edit'
        const checkedKeys = this.$refs.tree.getCheckedKeys();

        if (isEdit) {
            // insertar o actualizar opciones y inactivar la que falten.
            // o eliminar e insertar.
            try {
              const data =await MenuService.updateRole(checkedKeys,this.role,this.$store.getters["getToken",this.$store.getters["getId"]]);
              if(data.data.code==1){
                  this.dialogVisible = false;
                  /* Cargar menu de admin */
                  this.getRoutes()
                  /* cargar el listado de roles */
                  this.getRoles();
              }else{
                 this.dialogVisible = false;
                  this.$swal({
                    icon: 'warning',
                    timer: 5000,
                    timerProgressBar: true,
                    text: data.data.message
                  });
                  return;
              }
            } catch (error) {

            }

        }else{

           try {
              const data =await MenuService.createRole(checkedKeys,this.role,this.$store.getters["getToken"],this.$store.getters["getId"]);
              if(data.data.code==1){
                this.dialogVisible = false;
                /* Cargar menu de admin */
                this.getRoutes()
                /* cargar el listado de roles */
                this.getRoles();

              }else{
                  this.dialogVisible = false;
                  this.$swal({
                  icon: 'warning',
                  timer: 5000,
                  timerProgressBar: true,
                  text: data.data.message
                });
                return;
              }
           } catch (error) {

           }


        }

      },
      handleAddRole(){

          this.role = Object.assign({}, defaultRole)
          if (this.$refs.tree) {
            this.$refs.tree.setCheckedNodes([])
          }
          this.dialogType = 'new'
          this.dialogVisible = true

      },handleEdit(scope){

         this.dialogType = 'edit';
        this.dialogVisible = true;
        this.checkStrictly = true;

       this.role=scope.row;
         this.$nextTick(() => {
                scope.row.route.forEach((i)=>{
                      this.$refs.tree.setChecked(i,true);
                });
                this.checkStrictly = false
         });
      }
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="app-container">


          <div class="d-flex justify-content-center">
            <div class="w-100" style="max-width: 1000px;">
                  <div class="py-4 px-3"><el-button type="primary" @click="handleAddRole">Nuevo Perfil</el-button></div>
                  <el-table :data="rolesList" style="width: 100%;margin-top:30px;"  border>
                      <el-table-column align="center" label="Role Key" width="310">
                        <template slot-scope="scope">
                          {{ scope.row.id }}
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="Role Name" width="auto">
                        <template slot-scope="scope">
                          {{ scope.row.title }}
                        </template>
                      </el-table-column>
                      <el-table-column align="header-center" label="Description" width="auto">
                        <template slot-scope="scope">
                          {{ scope.row.description }}
                        </template>
                      </el-table-column>
                      <el-table-column align="center" label="Acción" width="120">
                        <template slot-scope="scope">
                          <el-button type="primary" size="small" @click="handleEdit(scope)">Edit</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
              </div>
            </div>


          <!--modal de Roles-->
           <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit Role':'New Role'" >
                <el-form :model="role" label-width="80px" label-position="left">
                      <el-form-item label="Name">
                        <el-input v-model="role.title" placeholder="Role Name" />
                      </el-form-item>
                      <el-form-item label="Desc">
                        <el-input
                          v-model="role.description"
                          :autosize="{ minRows: 2, maxRows: 4}"
                          type="textarea"
                          placeholder="Role Description"
                        />
                      </el-form-item>
                      <el-form-item label="Menus">
                          <el-tree
                            :data="data"
                            show-checkbox
                            node-key="id"
                            ref="tree"
                            highlight-current
                            :props="defaultProps">

                          </el-tree>
                      </el-form-item>
                </el-form>
                <div style="text-align:right;">
                  <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>
                  <el-button type="primary" @click="confirmRole">Confirm</el-button>
                </div>
    </el-dialog>
          <!--end:modal de Roles-->



    </div>
</div>
</template>
<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
