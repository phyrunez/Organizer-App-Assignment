<template>
    <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Tasks App</a>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/tasks">Tasks</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
nav {
    background-color: #000;
    color: #fff;
    opacity: .9;
}
nav a { color: white }
nav ul { 
    float: right !important;
    font-size: 20px;
    padding: 15px;
}
nav ul li a:hover { 
    color: white;
}
.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
    border-radius: 5px 0;
    padding: 3px;
    margin-top: 4px;
}
</style>