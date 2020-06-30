import axios   from "axios";
import {store} from '@/store/index';

export default {
  async login(username, password) {
    const  user   = { userName: username, userPassword: password };
    return axios.post("http://138.197.7.205:3000/auth", user)
      .then(r => {
        if(username == "admin") store.commit('cambiarAdmin');
        store.commit('cambiar');
        return r.data.token;
      })
      .catch(e => {
        console.log("shit happens");
        const keys = Object.keys(e);
        console.log(keys);
        console.log(keys[response]);
        return e});
  }
};
