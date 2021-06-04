<template>
    <div class="nav">
        <nav class="navbar navbar-light">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo-movidb.png" class="logo" alt="">
                <h2 class="logo-title">MoviDb</h2>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.nav {
    text-align: center;
    overflow: hidden;
    padding: 10px;
    
}
.navbar {
    width: 100vw;
    min-width: 100vw;
    height: 100px;
    max-height: 150px;
    display: block;
    
}
.logo{
    height: 60px;
    width: 60px;
    margin: auto;
}
.logo-title {
    font-family: 'Days One', sans-serif;
    display: inline;
    height: 50px;
    vertical-align:bottom;
    padding-left: 10px;
    color: white;
    font-style: italic;
}
</style>