<template>
    <form>
        Authorize
        <p> Логин: <input type="email" required v-model="email"></p>
        <p> Пароль: <input type="password" required v-model="password"></p>
        <button @click.prevent="signup()">Зарегистрироваться</button>
    </form>
</template>

<script>
    export default {
        name: "Authorize",
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            signup() {
                console.log(' ... el=', this.email, this.password)
                this.$store.dispatch('SIGNUP',{email: this.email, passwors:this.password})
            }
        }
    }
</script>

<style scoped>

</style>