<template>
<main>
    <v-container v-if="error" class="errorMsg">
        <h1>Usuario o contraseña inválida</h1>
    </v-container>
    <v-container>
        <v-layout>
            <v-flex>
                <v-form action @submit.prevent="login({username, password})">
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue">
                            <v-toolbar-title>
                                Ingresar
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field v-model="username" name="Usuario" label="Usuario"    type="text">
                            </v-text-field>
                            <v-text-field v-model="password" name="Contraseña" label="Contraseña" type="password">
                            </v-text-field>
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn rounded color="indigo" dark disabled>                  Admin</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn rounded color="blue" type="submit" value="login" dark> Entrar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
    </main>
</template>
<script>
    import auth             from "./auth";
    import { mapMutations } from 'vuex';
    import { store }        from '../../store/index';
    export default {
        data: () => ({
            username: "",
            password: "",
            error: false
        }),
        methods: {
            async login(){
                try {
                    store.state.x = await auth.login(this.username, this.password);
                } catch (error) {
                    this.error = true;
                }
            },
        },
    };
</script>
<style scoped>
    .container{
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: '. login .';
        padding:0;
    }
    .container .layout{
        grid-area: login;
        margin-top:30%;
    }
    .errorMsg{
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        justify-items: center;
    }
</style>