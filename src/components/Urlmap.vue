<template>
  <div class="urlmap">
    {{ pathName | capitalizePath}}
  </div>
</template>
<script>
export default {
  name: 'Urlmap',
  computed:{
    pathName(){
      let a = this.$route.fullPath.split('/');
      if(a[1] == "") return 'Dashboard'
      else{
        var b  = '';
        let aa = '';
        for(aa in a)
          if(aa == 0 || aa == a.length - 1) b += a[aa];
          else b += a[aa] + " " + "::" + " "
      }
      return b;
    },
  },
  filters:{
    capitalizePath: function(string) {
      string = string.split(" :: ");
      for(let t in string) string[t] = string[t].charAt(0).toUpperCase() + string[t].slice(1)
      string = string.join(" :: ");
      return string;
    },
  }
}
</script>
<style>
.urlmap{
  min-width: 100%;
  padding: 5px;
  min-height: 20px;
  font-size: 18px;
  font-weight: bolder;
  opacity: 0.8;
  align-content: center;
  margin-left:-50px;
  font-family: Kiona;
  background-color: rgba(149, 245, 245, 0.541);
  box-shadow: 0px 0px 6px 7px rgba(3, 4, 54, 0.459);
  margin-bottom: 20px;
}
</style>
