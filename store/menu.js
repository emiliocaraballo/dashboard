
import { MenuService } from "../services/index";

export const state = () => ({
  menu: [],
});

export const mutations = {
  SET_MENU(state, newValue) {
      state.menu = newValue;
  }
}

export const getters = {
  getMenu(state) {
      return state.menu;
  }
}

export const actions = {
  async fetchMenu(storeContext){
    const menu=await MenuService.getMenu();
    if(menu.data.code==1){
      storeContext.commit('SET_MENU', menu.data.menu);
    }
  }
}
