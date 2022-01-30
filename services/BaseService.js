import axios from "axios";
import Cookies from 'js-cookie'
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error.response,"error.response");
    if (error.response.status == undefined) {
      console.log(error.response.status,"error.response.status");
      return Promise.resolve(error.response);
    }else
    if (500 === error.response.status) {
      console.log(error.response.status,"error.response.status");
      return Promise.resolve(error.response);
    }else
    if (400 === error.response.status) {
      console.log(error.response.status,"error.response.status");
      return Promise.resolve(error.response);
    }else if (401 === error.response.status) {
      console.log(error.response.status,"error.response.status");
      return Promise.resolve(error.response);
    }else if(404 === error.response.status){
      console.log(error.response.status,"error.response.status");
      return Promise.resolve(error.response);
    } else {
      console.log(error.response.status,"error.response.status");
      return Promise.resolve(error);
      // return Promise.reject(error);
    }
  }
);
class BaseService {
  axios;
  baseUrl;
  Authorization;
  id;
  constructor() {
    this.axios = axios;
      this.baseUrl=process.env.BASE_URL || "http://localhost:3000/api/";
  }

  /* metodo con header */


  AnyToken(token,id,url,method,dato){
    var data;
    if(dato!=null){
      data=this.axios({
        method: method,
        url: this.baseUrl + url,
        mode: "cors",
        headers: {
          Authorization:token,
          id:id
        },
        data:dato
      });

    }else{

      data=this.axios({
        method: method,
        url: this.baseUrl + url,
        mode: "cors",
        headers: {
          Authorization:token,
          id:id
        }
      });

    }


    data.then((res)=>{
      if(res.data.code==-2){
        // token esta expirado.
        Cookies.remove("CSRF-TOKEN");
        Cookies.remove("id");
        window.location.reload();
      }
    });

    return data;
  }
  /* end:metodo con header */




  Any(url,method,dato){
    var data;
    if(dato!=null){
      data=this.axios({
        method: method,
        url: this.baseUrl + url,
        mode: "cors",
        data:dato
      });
    }else{
      data=this.axios({
        method: method,
        url: this.baseUrl + url,
        mode: "cors"
      });
    }

    return data;
  }

}
export default BaseService;
