<template>
  <div class="app">
      <Nav></Nav>
        <section class="latest">
          <h3 class="labels">『 L a t e s t 』</h3>
          <div class="latest-container">
            <div class="latest-movies " v-show="latestMovie.poster_path != null" v-for="latestMovie in latestMovies" :key="latestMovie.id">
              <img :src="'https://image.tmdb.org/t/p/w500/' + latestMovie.poster_path" alt="">
            </div>
          </div> 
        </section>
        <section class="search-section">
          <Search></Search>
        </section>
        <section class="footer-section">
          <Footer></Footer>
        </section>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from './components/Nav'
import Footer from './components/Footer.vue'
import Search from './components/Search'
export default {
  components: { Nav, Search, Footer },
  data () {
    return {
      latestMovies:'',
      latestMoviesLimit:6
    }
  },
  methods: {

  },
  mounted() {
      try {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0f08dc4e4349843206211c1da94e45f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2021-06-04&with_watch_monetization_types=flatrate')
        .then(response => {
          this.latestMovies = response.data.results.slice(0,this.latestMoviesLimit)
          
        })
      }
      catch(err) {
        console.log(err)
      }
    }
  }
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
 *{
    color: white;
    width: 100%;
    position: relative;
    scroll-behavior: smooth;
    margin: 0px;
    padding: 0px;
}
.latest{
  min-height:100%;
  background-color: #372772;
  padding-bottom: 2rem;
}
.latest-container{
  display: flex;
  width: 90%;
  margin: auto;
  
}
.latest-movies {
  height: 20rem;
  width: 15rem;
  padding: 30px;
  margin: auto;
}
.latest-movies > img {
  object-fit:cover;
  box-shadow: 3px 3px 10px;
}
.labels {
  margin-left: 3rem;
  color: white;
  width: 30rem;
  
}
.search-section {
  background-color: #372772;
  padding-bottom: 5rem;
}
.footer-section {
  position:relative;
  bottom: 0;
  overflow: hidden;
}
@media screen and (max-width: 400px) {
   * {
     width: 100vw;  
     overflow-x: hidden;  
  }
  .labels {
    width: auto;
    text-align: center;
  }
  .latest-movies {
    display: flex;
    margin: auto;
    padding: 20px;
  }
}
</style>