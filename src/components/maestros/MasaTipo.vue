<template>
    <div id="masatipo"><h1>!!!!!!!!!!!!!!!!!{{tipos}}</h1></div>
</template>
<script>
    import parrotGet from '../../plugins/peticiones';
    const tableName = 'masatipo';
    const method    = 'getall';
    export default {
        name: 'MasaTipo',
        data(){
            return {
                tipos : parrotGet(tableName, method)
            }
        }
    };
</script>
<style scoped>
h1{font-size: 40px;}
</style>