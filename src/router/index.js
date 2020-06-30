import Vue           from 'vue';
import VueRouter     from 'vue-router';
import {store}       from '../store/index';
import Home          from '../views/Home.vue';
import Maestros      from '../views/maestros/Maestros.vue';
import Empleados     from '../views/empleados/Empleados.vue';
import Usuarios      from '../views/usuarios/Usuarios.vue';

Vue.use(VueRouter);
  const routes = [
    {path: '/',             component: Home},
    {path: '/maestros',     component: Maestros,
      children: [
        {path:'masasabor',  component: () => import(/* webpackChunkName: "masasabor" */ '../views/maestros/MasaSabor')},
        {path:'masatipo',   component: () => import(/* webpackChunkName: "masatipo" */  '../views/maestros/MasaTipo')},
        {path:'tortasabor', component: () => import(/* webpackChunkName: "sabor" */     '../views/maestros/TortaSabor')},
        {path:'tamano',     component: () => import(/* webpackChunkName: "tamano" */    '../views/maestros/Tamano')},
        {path:'torta',      component: () => import(/* webpackChunkName: "torta" */     '../views/maestros/Torta')},
      ]
    },
    {path: '/usuarios',     component: Usuarios,
      children: [
        {path:'listar',     component: () => import(/* webpackChunkName: "listarU" */   '../views/usuarios/UsersGet')},
        {path:'crear',      component: () => import(/* webpackChunkName: "crearU" */    '../views/usuarios/UserCreate')},
        {path:'eliminar',   component: () => import(/* webpackChunkName: "eliminarU" */ '../views/usuarios/UserDelete')},
      ]
    },
    {path: '/empleados',    component: Empleados,
      children: [
          {path:'listar',   component: () => import(/* webpackChunkName: "listarE" */   '../views/empleados/EmpleadosGet')},
          {path:'crear',    component: () => import(/* webpackChunkName: "crearE" */    '../views/empleados/EmpleadoCreate')},
          {path:'eliminar', component: () => import(/* webpackChunkName: "eliminarE" */ '../views/empleados/EmpleadoDelete')},
        ]
    },
    { path: "*",            component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')},
]
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => { // global guard
  next(store.state.auth);
})
export default router
