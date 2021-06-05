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
    padding: 5px;
    background-color: #372772;
    
   
}
.navbar {
    width: 100vw;
    min-width: 100vw;
    height: 150px;
    max-height: 150px;
    display: block;
    border-radius: 0px 0px 10px 10px;
    top: 0;
    padding: 0;
}
.navbar-brand {
    top: 20%;
    
}
.logo{
    height: 80px;
    width: 80px;
    margin: auto;
}
.logo-title {
    font-family: 'Days One', sans-serif;
    display: inline;
    height: 60px;
    vertical-align:bottom;
    padding-left: 10px;
    color: #e63946;
    font-style: italic;
    
}
</style>