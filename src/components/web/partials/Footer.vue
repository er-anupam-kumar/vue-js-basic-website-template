<template>
    <footer>
    Copyright &copy; Created by Anupam Kumar    
    </footer>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return {
            link : '/'
        }
    }
}
</script>

<style scoped>
footer{
    padding: 20px 30px;
    text-align: center;
    position: fixed;
    bottom: 0;
    background: orchid;
    width: 100%;
    color: #fff;
}
</style>