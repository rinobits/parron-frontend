<template>
    <div class="tortas">
        <h1  class="title">Tortas</h1>
        <div class="masas">
            <div v-for="torta in tortas">
                <h3>{{torta.masaTipo_id}} | {{torta.masaSabor_id}} | {{torta.sabor_id}}</h3>
            </div>
        </div>
        <form class="formulario" action="/" method="POST">
            <div class="container">
                <div class="row1">
                    <div class="label">Solicitante</div>
                    <div class="field">
                        <input name="solicitante" class="form-control" id="solicitante" type="text" required>
                    </div>
                    <div class="label1">Teléfono</div>
                    <div class="field1"><input name="telefono" class="form-control" id="telefono" type="text" required></div>
                </div>
                <div class="row2">
                    <div class="label">Torta</div>
                    <div class="field">
                        <select name="tipoMasa" id="tipoMasa" class="form-control" required>
                            <option v-for="tipo in tipos" :value="tipo.id">{{tipo.nombre}}</option>
                        </select>
                    </div>
                    <div class="field1">
                        <select name="saborMasa" id="saborMasa" class="form-control" required>
                            <option v-for="saborM in saboresM" :value="saborM.id">{{saborM.nombre}}</option>
                        </select>
                    </div>
                    <div class="field2">
                        <select name="sabor" id="sabor" class="form-control" required>
                            <option v-for="saborT in saboresT" :value="saborT.id">{{saborT.nombre}}</option>
                        </select>
                    </div>
                    <div class="field3">
                        <select name="tamano" id="tamano" class="form-control" required>
                            <option v-for="tamano in tamanos" :value="tamano.id">{{tamano.personas}}</option>
                        </select>
                    </div>
                </div>
                <div class="row3">
                    <div class="label">Características</div>
                    <div class="field">
                        <textarea name="caracteristicas" class="form-control" id="caracteristicas" required></textarea>
                    </div>
                </div>
                <div class="row4">
                    <div class="label">Mensaje</div>
                    <div class="field">
                        <textarea name="mensaje" class="form-control" id="mensaje" required></textarea>
                    </div>
                </div>
                <div class="row5">
                    <div class="label">Hora</div>
                    <div class="field">
                        <select name="horaDrop" id="horaDrop" class="form-control" required>
                            <option :value="1">{{pedido.horaEntrega}}</option>
                        </select>
                    </div>
                    <div class="label1">Abono</div>
                    <div class="field1">
                        <input name="abono" class="form-control" id="abono" type="text">
                    </div>
                    <div class="label2">Precio</div>
                    <div class="field2">
                        <input name="precio" class="" id="precio" type="text">
                    </div>
                </div>
                <div class="row6" type="submit">
                    Registrar
                </div>
            </div>
        </form>
    </div>
</template>
/*
    1) se crea la torta
    2) se obtiene su id
    3) se crea el pedido
    4) falta añadir imagen
*/
<script>
    import axios     from "axios";
    import parrotGet from '../../plugins/peticiones';
    export default {
        name: 'Tortas',
        data(){
            return {
                tortas:  [],
                tipos:   [],
                saboresM:[],
                saboresT:[],
                tamanos: [],
                pedido: {
                    torta: {
                        masaTipo_id  : '', 
                        masaSabor_id : '', 
                        sabor_id     : '', 
                    },
                    name:        '',
                    phone:       '',
                    description: '',
                    message:     '',
                    value:       '',
                    deposit:     '',
                    tamano_id:   '',
                    horaEntrega: '9:30',
                },
            }
        },
        methods: {
            tortasGet(){
                return new Promise((resolve, reject) => {
                    const tableName = 'tortas';
                    const method    = 'getall';
                    const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
                    axios.get(uri)
                        .then(r  => {resolve(r.data)})
                        .catch(e => {reject(e)})
                })
            },
            tiposGet(){
                return new Promise((resolve, reject) => {
                    const tableName = 'masatipo';
                    const method    = 'getall';
                    const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
                    axios.get(uri)
                        .then(r  => {resolve(r.data)})
                        .catch(e => {reject(e)})
                })
            },
            saboresMGet(){
                return new Promise((resolve, reject) => {
                    const tableName = 'masasabor';
                    const method    = 'getall';
                    const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
                    axios.get(uri)
                        .then(r  => {resolve(r.data)})
                        .catch(e => {reject(e)})
                })
            },
            saboresTGet(){
                return new Promise((resolve, reject) => {
                    const tableName = 'sabor';
                    const method    = 'getall';
                    const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
                    axios.get(uri)
                        .then(r  => {resolve(r.data)})
                        .catch(e => {reject(e)})
                })
            },
            tamanosGet(){
                return new Promise((resolve, reject) => {
                    const tableName = 'tamano';
                    const method    = 'getall';
                    const uri = `http://138.197.7.205:3000/${tableName}/${method}`;
                    axios.get(uri)
                        .then(r  => {resolve(r.data)})
                        .catch(e => {reject(e)})
                })
            },
            callEveryone(){
                this.tortasGet()
                    .then(r => this.tortas    = r);
                this.tiposGet()   
                    .then(r => this.tipos     = r);
                this.saboresMGet()
                    .then(r => this.saboresM  = r);
                this.saboresTGet()
                    .then(r => this.saboresT  = r);
                this.tamanosGet()
                    .then(r => this.tamanos   = r);
            }
        },
        mounted(){this.callEveryone();}
    };
</script>
<style scoped>
/* General scoped styles */
input:focus, input:active, textarea:focus, textarea:active{
    box-shadow: 0px 0px 1px 0.5px rgba(32,83,128,0.5);
}
input, textarea, select{ border:0.2px solid rgb(95, 200, 207);}
    .tortas{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows:    auto;
        grid-template-areas:   
            'title .'
            'masas formulario';
    }
    .title{
        grid-area:title;
    }
    .masas{
        grid-area:masas;

    }
    .formulario{
        grid-area:formulario;
        font-family: Helvetica;
    }
    /* GRID LAYOUT FOR FORM */
    .label, .label1, .label2 {
        border: 2px solid lightblue;
        width:80%;
        height: 100%;
        justify-content: center;
        text-align: center;
        word-break: break-all;
        padding:3px;
    }
    input, select, textarea{
        width:90%;
        height: 100%;
    }
    .container{
        display:grid;
        grid-template-rows:auto;
        width:80%;
        padding:10px;
        margin:auto;
        border:2px solid black;
    }
    .row1, .row2, .row3, .row4, .row5, .row6{
        padding: 10px 0;
    }
    .row1{
        display:grid;
        grid-template-columns:repeat(10,1fr);
        justify-content: stretch;
        grid-template-areas:
        'label label field field field label1 label1 field1 field1 field1';
    }
    .row1 .label{
        grid-area: label;
    }
    .row1 .label1{
        grid-area: label1;
    }
    .row1 .field{
        grid-area: field;
        min-height: 100% !important;
    }
    .row1 .field1{
        grid-area: field1;
    }
    .row2 {
        display: grid;
        grid-template-columns:repeat(10,1fr);
        grid-template-areas:
        'label label field field field1 field1 field2 field2 field3 field3';
    }
    .row2 .label{
        grid-area: label;
    }
    .row2 .field{
        grid-area: field;
    }
    .row2 .field1{
        grid-area: field1;
    }
    .row2 .field2{
        grid-area: field2;
    }
    .row2 .field3{
        grid-area: field3;
    }

    .row3 {
        display: grid;
        grid-template-columns:repeat(10 ,1fr);
        grid-template-areas:
        'label label field field field field field field field field';
        
    }
    .row3 .label{
        grid-area: label;
    }
    .row3 .field{
        grid-area: field;
    }
    .row4 {
        display: grid;
        grid-template-columns:repeat(10 ,1fr);

        grid-template-areas:
        'label label field field field field field field field field';
    }
    .row4 .label{
        grid-area: label;
    }
    .row4 .field{
        grid-area:field;
    }
    .row5{
        display: grid;
        grid-template-columns:repeat(10 ,1fr);
        grid-template-areas:
            'label label field field label1 label1 field1 label2 label2 field2';
    }
    .row5 .label{
        grid-area: label;
    }

    .row5 .field{
        grid-area: field;
    }

    .row5 .label1{
        grid-area: label1;
    }

    .row5 .field1{
        grid-area: field1;
    }

    .row5 .label2{
        grid-area: label2;
    }

    .row5 .field2{
        grid-area: field2;
    }
    .row6{
        background-color:rgba(12, 107, 151, 0.6);
        text-transform: uppercase;
        border-radius: 5px;
    }
    .row6:hover{
        background-color:rgba(12, 107, 151, 1);
        color:white;
    }
</style>