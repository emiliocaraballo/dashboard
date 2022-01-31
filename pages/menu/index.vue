<script>
/**
 * Menu
 */
import "element-ui/lib/theme-chalk/index.css";
import {
  Tree,
  Button,
  Dialog,
  Form,
  FormItem,
  Input,
  Switch
} from "element-ui";

import { MenuService } from "../../services/index";

export default {
  head() {
    return {
      title: `${this.title} | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`
    };
  },
  components: {
    "el-tree": Tree,
    "el-button": Button,
    "el-dialog": Dialog,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-input": Input,
    "el-switch": Switch
  },
  data() {
    return {
      title: "Menu",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "Menu",
          active: true
        }
      ],
      centerDialogVisible: false,
      menu: [],
      edit: false,
      menu_selected: {
        id: 0,
        title: "",
        path: "",
        orden: "",
        icon: "",
        description: "",
        status: ""
      },
      form: {
        id: 0,
        title: "",
        path: "",
        orden: "",
        icon: "",
        description: "",
        status: ""
      },
      title: "",
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  created() {
    this.loadingMenu();
  },
  methods: {
    async loadingMenu() {
      try {
        const data = await MenuService.getMenu();
        this.menu = data.data.menu;
      } catch (error) {}
    },
    handleNodeClick(data) {
      var datos = data;
      this.menu_selected = datos;
      this.menu_selected.status = datos.status == 1;
    },
    LoadingForm(title, action = 0) {
      if (action == 0) {
        this.centerDialogVisible = true;
        this.edit = 0;
        this.form.id = this.menu_selected.id;
        this.form.title = "";
        this.form.path = "";
        this.form.orden = "";
        this.form.icon = "";
        this.form.description = "";
        this.form.status = false;
      } else if (action == 1) {
        this.centerDialogVisible = true;
        this.edit = 1;
        this.form.id = this.menu_selected.id;
        this.form.title = this.menu_selected.title;
        this.form.path = this.menu_selected.path;
        this.form.orden = this.menu_selected.orden;
        this.form.icon = this.menu_selected.icon;
        this.form.description = this.menu_selected.description;
        this.form.status = this.menu_selected.status;
      } else if (action == 2) {
        this.form.id = this.menu_selected.id;
        MenuService.deleteMenu(
          this.form.id,
          this.$store.getters["getToken"],
          this.$store.getters["getId"]
        ).then(response => {
          const data = response.data;
          if (data.code == 1) {
            // eliminado con exito
            this.menu = data.menu;
            // this.centerDialogVisible = true;
            return;
          } else {
            this.$swal({
              icon: "warning",
              timer: 5000,
              timerProgressBar: true,
              text: "Error al eliminar menu."
            });
            // this.centerDialogVisible = true;
            return;
          }
        });
      }

      this.title = title;
    },
    async ActionMenu() {
      try {
        if (this.form.id > 0) {
          var data = null;
          if (this.edit == 1) {
            data = await MenuService.updateMenu(
              {
                sequence: this.form.id,
                title: this.form.title,
                orden: this.form.orden,
                icon: this.form.icon,
                description: this.form.description,
                status: this.form.status == true ? 1 : 0,
                url: this.form.path
              },
              this.$store.getters["getToken"],
              this.$store.getters["getId"]
            );
          } else {
            data = await MenuService.createMenu(
              {
                parentid: this.form.id,
                title: this.form.title,
                orden: this.form.orden,
                icon: this.form.icon,
                description: this.form.description,
                status: this.form.status == true ? 1 : 0,
                url: this.form.path
              },
              this.$store.getters["getToken"],
              this.$store.getters["getId"]
            );
          }
          this.centerDialogVisible = false;
          if (data.data.code == 1) {
            this.menu = data.data.menu;
          } else {
            this.$swal({
              icon: "warning",
              timer: 5000,
              timerProgressBar: true,
              text: "Error al actualizar menu."
            });
            return;
          }
        } else {
          this.centerDialogVisible = false;
          this.$swal({
            icon: "warning",
            timer: 5000,
            timerProgressBar: true,
            text: "Haga clic en algun item de menu."
          });
          return;
        }
      } catch (error) {}
    }
  },
  computed: {},
  middleware: "authentication"
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

     <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 text-left mb-1">Menu</div>
      <div class="col-lg-4 px-5">
        <div class="d-flex">
          <el-button type="text" @click="LoadingForm('Agregar Menu')"
            >Agregar Menu</el-button
          >
          <el-button type="text" @click="LoadingForm('Editar Menu', 1)"
            >Editar Menu</el-button
          >
          <el-button type="text" @click="LoadingForm('Eliminar Menu', 2)"
            >Eliminar Menu</el-button
          >
        </div>
        <el-tree
          :data="menu"
          :props="defaultProps"
          @node-click="handleNodeClick"
          :default-expand-all='true'
          :highlight-current='true'
          :expand-on-click-node='false'
          icon-class=""
        ></el-tree>
      </div>
      <div class="col-lg-8 px-5"></div>
    </div>

    <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      width="40%"
      center
    >
      <el-form :model="form" label-width="100px" label-position="left">
        <el-form-item label="Titulo:">
          <el-input v-model="form.title" placeholder="Titulo" />
        </el-form-item>
        <el-form-item label="Ruta:">
          <el-input v-model="form.path" placeholder="Ruta" />
        </el-form-item>
        <el-form-item label="Orden:">
          <el-input v-model="form.orden" placeholder="Orden" />
        </el-form-item>

        <el-form-item label="Icono:">
          <el-input v-model="form.icon" placeholder="Icono" />
        </el-form-item>

        <el-form-item label="Descripción:">
          <el-input
            v-model="form.description"
            placeholder="Descripción"
          />
        </el-form-item>

        <el-form-item label="Estado:" prop="delivery">
          <el-switch v-model="form.status"></el-switch>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="ActionMenu()" >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
  </div>
</template>
<style >
.el-tree {
  padding: 10px 20px;
  display: inline-block !important;
}
</style>
