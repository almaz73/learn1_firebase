<template>
    <div>
        <Menu/>
        <form>
            Authorization
            <p style="color:red" v-if="err">Ошибка:{{err}}</p>
            <p> Login : <input type="email" required v-model="email"></p>
            <p> Password : <input type="password" required v-model="password"></p>
            <button @click.prevent="signup()">LogIn</button>
        </form>
    </div>
</template>

<script>
    import Menu from '@/components/Menu'

    export default {
        name: "Authorize",
        components: {
            Menu
        },
        data() {
            return {
                email: null,
                password: null,
                err: false
            }
        },
        methods: {
            signup() {
                this.$store.dispatch('loginUser', {email: this.email, password: this.password})
                    .then(
                        () => {
                            this.err = '';
                            this.$router.push({name: 'InnerPage'})
                        },
                        err => {
                            this.err = err.message
                        }
                    )
            }
        }
    }
</script>

<style scoped>

</style>