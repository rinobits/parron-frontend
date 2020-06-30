 <template>
    <div class="menu">
        <button class="menu-switch title-a" @click="seen = !seen">
            < MENU >
        </button>
        <transition name="slide-fade">
          <ul id="nav" class="menu-content" v-if="seen">
            <router-link class="title-a" to="/">Dashboard  </router-link> 
            <button @click="seen4 = !seen4">
              <router-link class="title-a" to="/maestros">Maestros   </router-link> 
            </button>
              <transition name="slide-fade2">
                <ul v-if="seen4">
                  <router-link to="/maestros/masatipo">   Tipo masa  </router-link> 
                  <router-link to="/maestros/masasabor">  Sabor masa </router-link> 
                  <router-link to="/maestros/tortasabor"> Sabor torta</router-link> 
                  <router-link to="/maestros/tamano">     Tamano     </router-link> 
                  <router-link to="/maestros/torta">      Torta      </router-link> 
                  <router-link to="/maestros/sucursal">   Sucursal   </router-link> 
                </ul>
              </transition>
              <button class="dropButton" @click="seen2 = !seen2" v-if="$store.state.adminAuth">
                <router-link class="title-a" to="/usuarios">Usuarios</router-link>
              </button>
              <transition name="slide-fade2">
                <ul id="users" v-if="seen2">
                  <router-link to="/usuarios/listar">   Listar    </router-link> 
                  <router-link to="/usuarios/crear">    Crear     </router-link> 
                  <router-link to="/usuarios/eliminar"> Eliminar  </router-link> 
                </ul>
              </transition>
              <button class="dropButton" @click="seen3 = !seen3" v-if="$store.state.adminAuth">
                <router-link class="title-a" to="/empleados">Empleados</router-link>
              </button>
              <transition name="slide-fade2">
                <ul id="empleados" v-if="seen3">
                  <router-link to="/empleados/listar">  Listar    </router-link> 
                  <router-link to="/empleados/crear">   Crear     </router-link> 
                  <router-link to="/empleados/eliminar">Eliminar  </router-link> 
                </ul>
              </transition>
          </ul>
        </transition>
        <div id="routerview">
          <router-view>
          </router-view>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import {store}        from '../store/index';
export default {
    name: 'Menu',
    data: () => {
      return{
        seen:  true,
        seen2: false,
        seen3: false,
        seen4: false,
      }
    },
}
</script>
<style scoped>
    @font-face {
      font-family: 'Kiona';
        src: url('../../public/fonts/Kiona-Regular.ttf') format('truetype');
    }
    *:focus {
    outline: none;
  }
    .menu{
      display: grid;
      font-family: Kiona, Helvetica;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: 1fr 6fr;
      grid-template-areas: 
        'boton routerview'
        'menu  routerview';
    }
    #nav {
        grid-area:menu;
        padding: 35px 30px 35px 35px;
        display: grid;
        margin:0px 20px 15px 20px;
        grid-template-rows:auto;
        grid-template-columns: 1fr;
        max-width:180px;
        min-width:180px;
        box-shadow: inset -3px 0px 4px 0px rgba(0,0,0,0.52);
    }
    #nav ul{
        display:grid;
        grid-template-rows:auto;
        grid-template-columns: 1fr;
        justify-items:center;
        justify-self: center;
        margin-left: -23px;
        
    }
    ul>ul{font-size:12px;}
    #nav a {
        text-decoration: none !important;
        margin-bottom: 7px ;
        position:relative;
        left:-12px !important;
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active {
        color: #1265a8;
    } 
    .menu-switch{
      grid-area: boton;
      margin:10px;
      padding:0px;
      box-shadow: 0px 2px 5px 1px rgba(9, 91, 97, 1);
      transition:background 200ms, transform 230ms;
      width:195px;
      height: 50px;
    }
    .menu-switch:hover{
      background:rgba(79, 213, 253, 0.4);
      transform:scale(0.95)
    }
    .title-a{font-weight: bolder !important; color:rgb(41, 36, 73)}
    .dropButton{
      margin-top:7px;
    }
    #routerview{
        grid-area:routerview;
        justify-self: start;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to{
      transform: translateY(10px);
      opacity: 0;
    }
    .slide-fade2-enter-active {
      transition: all .3s ease-out;
    }
    .slide-fade2-leave-active {
      transition: all .2s ease-in;
    }
    .slide-fade2-enter, .slide-fade2-leave-to{
      transform: translateY(10px), translateX(-15px);
      opacity: 0;
    }
</style>