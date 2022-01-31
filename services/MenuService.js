
import BaseService from "./BaseService";
class MenuService extends BaseService {
  constructor() {
    super();
  }

  createRole(menu_active,role){
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"role","POST",{
      menu:menu_active,
      title:role.title,
      description:role.description,
      routes:role.route
    });
  }

  updateRole(menu_active,role){
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"role","PUT",{
      menu:menu_active,
      id:role.id,
      title:role.title,
      description:role.description,
      routes:role.route
    });
  }

  getMenu() {
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"menus","GET",{});
  }

  getMenuRole() {
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"menus/role","GET",{});
  }

  getRole() {
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"role","GET",{});
  }

  createMenu(data){
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"menus","POST",data);
  }

  updateMenu(data){
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"menus","PUT",data);
  }

  deleteMenu(sequence){
    return this.AnyToken(localStorage.getItem("token"),localStorage.getItem("id"),"menus/"+sequence,"DELETE",{});
  }
}

export default new MenuService();
