
import BaseService from "./BaseService";
class MenuService extends BaseService {
  constructor() {
    super();
  }

  createRole(menu_active,role,token,id){
    return this.AnyToken(token,id,"role","POST",{
      menu:menu_active,
      title:role.title,
      description:role.description,
      routes:role.route
    });
  }

  updateRole(menu_active,role,token,id){
    return this.AnyToken(token,id,"role","PUT",{
      menu:menu_active,
      id:role.id,
      title:role.title,
      description:role.description,
      routes:role.route
    });
  }

  getMenu(token,id) {
    return this.AnyToken(token,id,"menus","GET",{});
  }

  getMenuRole(token,id) {
    return this.AnyToken(token,id,"menus/role","GET",{});
  }

  getRole(token,id) {
    return this.AnyToken(token,id,"role","GET",{});
  }

  createMenu(data,token,id){
    return this.AnyToken(token,id,"menus","POST",data);
  }

  updateMenu(data,token,id){
    return this.AnyToken(token,id,"menus","PUT",data);
  }

  deleteMenu(sequence,token,id){
    return this.AnyToken(token,id,"menus/"+sequence,"DELETE",{});
  }
}

export default new MenuService();
