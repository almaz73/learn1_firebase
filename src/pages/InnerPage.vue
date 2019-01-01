<template>
    <div>
        <Menu/>
        Inner page
    </div>
</template>

<script>
    import Menu from '@/components/Menu'

    export default {
        name: "InnerPage",
        components: {
            Menu
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>