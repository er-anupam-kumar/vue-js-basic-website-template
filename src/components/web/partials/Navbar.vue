<template>
    <header>
        <nav>
            <span class="brand">
            <router-link to="/">Anupam's Vue App</router-link>
            </span>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name:'Navbar',
}
</script>

<style scoped>
nav{
    width: 100%;
    background: orchid;
    text-align: left;
    padding: 20px 30px;
}
nav ul{
    float:right;
}
nav ul li{
display: inline-block;
list-style: none;
margin: 0 5px;
padding: 3px;
}
nav ul li a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
.brand a{
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    text-decoration: none;    
    text-transform: uppercase;
}
</style>