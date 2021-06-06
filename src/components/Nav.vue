<template>
    <div class="nav">
        <nav class="navbar navbar-light">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/movidb-logo.png" class="logo" alt="">
                
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
    background-color: #372772;
    position: sticky;
    
   
}
.navbar {
    width: 100vw;
    min-width: 100vw;
    height: 150px;
    max-height: 150px;
    display: block;
    top: 0;
    padding: 10px;
}
.navbar-brand {
   margin-top: 10px;
    
}
.logo{
    height: 5rem;
    width: 30rem;
    margin: auto;
    scale: 1rem;
}
</style>