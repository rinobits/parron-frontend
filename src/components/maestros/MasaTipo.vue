<template>
    <table>
        <h1>Tipos de Masas</h1>
        <tr v-for="tipo in tipos"><h2>{{tipo.nombre}}</h2></tr>
    </table>
</template>
<script>
    import axios     from "axios";
    import parrotGet from '../../plugins/peticiones';
    const tableName = 'masatipo';
    const method    = 'getall';
    export default {
        name: 'MasaTipo',
        data(){
            return {
                tipos: []
            }
        },
        methods: {
            tiposGet(){
                return new Promise((resolve, reject) => {
                const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
                axios.get(uri)
                .then(r  => {resolve(r.data)})
                .catch(e => {reject(e)})
               })
            },
            callTipos(){
                this.tiposGet()
                    .then(r => this.tipos = r)
                    .catch(e => this.tipos = e)
            }
        },
        mounted(){
            this.callTipos();
        }
    };
</script>
<style scoped>
table{
    margin: 0 auto !important;
}
h1{font-size: 40px;}
</style>