<template>
  <div class="app">
      <Nav></Nav>
        <section class="latest">
          <h3 class="labels">『 L a t e s t 』</h3>
          <div class="latest-container">
             <div class="latest-movies" v-for="(m,i) in latestMovies" :key="i">
              <img :src="m.imgSrc" alt="">
            </div>
          </div>
        </section>
        <Search></Search>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Search from './components/Search'
export default {
  components: { Nav, Search },
  data () {
    return {
      latestMovies: [
        {imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289"},
        {imgSrc:"https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg"},
        {imgSrc:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130"},
        {imgSrc:"https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg"},
        {imgSrc:"https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1522683226854-9FOR6TZ6ZKS14TXFF2YO/ke17ZwdGBToddI8pDm48kObW5L834DLeOoedDyYNM0VZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVE0HBlqxyJ0FKkj7k-nCdscI18NqvNAsmDs0Oklw-0igruvPknf91-IP_XxpMjX9og/The+Titan.jpg?format=300w"}
      ]
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
 * {
    background-color: #372772;
    color: white;
    width: 100%;
    position: relative;
}
.latest{
  padding-bottom: 1rem;
}
.latest-container{
  display: flex;
  width: 90vw;
  overflow: hidden;
  margin: auto;
}
.latest-movies {

  height: 20rem;
  width: 15rem;
  margin: auto; 
}
.labels {
  margin: 1rem;
  color: white;
  width: 30rem;
  
}


</style>