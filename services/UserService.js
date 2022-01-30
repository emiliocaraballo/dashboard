import BaseService from "./BaseService";

class UserService extends BaseService {
  constructor() {
    super();
  }
  // solicitud para cambiar la contraseña
  recoverPassword(email) {
      return this.Any("users/recoverpassword","POST",{user:email});
  }

  // cambiar la contraseña de usuario.
  activePassword(pass,t) {
    return this.Any("users/activepassword","POST",{pass:pass,code:t});
  }

  // validar usuario
  validateUser(email){
    return this.Any("users/validate","POST",{user:email});
  }

  // iniciar session.
  login(email,pass,code="") {
    if(code.length>0){
      return this.Any("users/login","POST",{username:email,password:pass,code:code});
    }else{
      return this.Any("users/login","POST",{username:email,password:pass});
    }
  }

  // crear Usuarios
  createUser(data,token,id){
    return this.AnyToken(token,id,"users/create","POST",{
      name:data.name,
      last_name:data.last_name,
      identification:data.identification,
      role:data.role,
      profile:data.profile,
      pass:data.pass,
      phone:data.phone,
      gender:data.gender,
      email:data.email
    });
  }

  // ver todo los perfiles
  getProfile(token,id){
    return this.AnyToken(token,id,"role","GET",{});
  }
  getUserMe(token,id){
    return this.AnyToken(token,id,"users/me","GET",{});
  }

}

export default new UserService();
