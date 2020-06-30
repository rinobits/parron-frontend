<template>
  <v-app>
    <template v-if="!$store.state.auth">
      <Login/>
    </template>
    <template id="page" v-if="$store.state.auth"> 
    <urlmap/>
    <Menu/>
    </template>
  </v-app>
</template>
<script>
import Urlmap from './components/Urlmap';
import Login  from './components/auth/Login';
import Menu   from './components/Menu';

export default {
  components: { Urlmap, Login, Menu }
}
</script>
<style>
#app{
  overflow: hidden;
  background-color:rgb(193, 219, 253);
}
</style>
