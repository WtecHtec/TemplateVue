<template>
    <div>
         首页
        store值:  {{ storeVal }}
    </div>
</template>
<script>
    export default {
        name: 'main',

        components: {},

        props: {},

        data() {
            return{
               storeVal:this.$store.state.count
            }
        },

        computed: {},

        watch: {},

        created() {},

        mounted() {},

        destroyed() {},

        methods: {
           
        },
    }
</script>
<style scoped>

</style>