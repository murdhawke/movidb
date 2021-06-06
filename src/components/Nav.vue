<template>
    <div class="nav">
        <nav class="navbar navbar-light row">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/movidb-logo.png" class="logo" alt="">
                <img src="../assets/img/movidb-btm.png" class="logo-sm" alt="">
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
    overflow-x: hidden;
    
   
}
.navbar {
    max-width: 100%;
    max-height: 150px;
    display: block;
    top: 0;
    padding: 10px;
    margin: auto;

    
}
.navbar-brand {
   margin-top: 10px;

}
.logo{
    height: 5rem;
    width: 30rem;
    margin: auto;
}
.logo-sm {
    display: none;
}
@media screen and (max-width: 400px) {
   * {
     width: 100vw;
     overflow-x: hidden;    
  }
  .navbar-bar {
      width: auto;
  }
  .logo-sm {
      display: block;
      width: 150px;
      height: 150px;
      margin: auto;
  }
  .logo {
      display: none;
      
  }
}

</style>