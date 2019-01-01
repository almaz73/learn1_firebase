<template>
    <div class="menu">
        <router-link tag="button" to="/"> Main Page</router-link>
        <router-link tag="button" to="/innerpage"> Inner Page</router-link>
        <router-link tag="button" to="/authorization" v-if="!isLogged"> Authorization</router-link>
        <router-link tag="button" to="/registration" v-if="!isLogged"> Registration</router-link>
        <button v-if="isLogged" @click="logOut()"> Logout</button>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: "Menu",
        computed: {
            isLogged: () => store.getters.isLogged
        },
        methods: {
            logOut() {
                store.dispatch('logOutUser')
            }
        }
    }
</script>

<style scoped>
    .menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0 auto;
        background: dodgerblue;
        padding: 10px 0;
    }

    .menu button {
        margin: 5px;
    }
</style>