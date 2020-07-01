import Vue           from 'vue';
import VueRouter     from 'vue-router';
import {store}       from '../store/index';

Vue.use(VueRouter);
  const routes = [
    {path: '/',                     component: () => import(/* webpackChunkName: "masatipo" */  '../views/Home.vue')},
    {path: '/maestros',             component: () => import(/* webpackChunkName: "maestros" */  '../views/maestros/Maestros.vue')},
    {path: '/maestros/masatipo',    component: () => import(/* webpackChunkName: "masatipo" */  '../views/maestros/MasaTipo')},
    {path: '/maestros/masasabor',   component: () => import(/* webpackChunkName: "masasabor" */ '../views/maestros/MasaSabor')},
    {path: '/maestros/tortasabor',  component: () => import(/* webpackChunkName: "sabor" */     '../views/maestros/TortaSabor')},
    {path: '/maestros/tamano',      component: () => import(/* webpackChunkName: "tamano" */    '../views/maestros/Tamano')},
    {path: '/maestros/torta',       component: () => import(/* webpackChunkName: "torta" */     '../views/maestros/Torta')},
    {path: '/usuarios',             component: () => import(/* webpackChunkName: "usuarios" */  '../views/usuarios/Usuarios')},
    {path: '/usuarios/listar',      component: () => import(/* webpackChunkName: "listarU" */   '../views/usuarios/UsersGet')},
    {path: '/usuarios/crear',       component: () => import(/* webpackChunkName: "crearU" */    '../views/usuarios/UserCreate')},
    {path: '/usuarios/eliminar',    component: () => import(/* webpackChunkName: "eliminarU" */ '../views/usuarios/UserDelete')},
    {path: '/empleados',            component: () => import(/* webpackChunkName: "listarE" */   '../views/empleados/Empleados')},
    {path: '/empleados/listar',     component: () => import(/* webpackChunkName: "listarE" */   '../views/empleados/EmpleadosGet')},
    {path: '/empleados/crear',      component: () => import(/* webpackChunkName: "crearE" */    '../views/empleados/EmpleadoCreate')},
    {path: '/empleados/eliminar',   component: () => import(/* webpackChunkName: "eliminarE" */ '../views/empleados/EmpleadoDelete')},
    {path: '*',                     component: () => import(/* webpackChunkName: "NotFound" */  '../views/NotFound.vue')},
]
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => { // global guard
  next(store.state.auth);
})
export default router
