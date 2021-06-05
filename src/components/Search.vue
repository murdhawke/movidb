<template>
    <div class="search">
        <section>
          <h3 class="labels">『 S e a r c h 』</h3>
          <div class="sb-container">
            <b-form-input v-model="query"  class="search-bar" placeholder="Movie / TV Show Title"
            @keyup="getResults(query)"></b-form-input>
          </div>
        </section>
        <section class="search">
             <div class="search-results">
              <div class="search-results-item" v-for="result in results" :key="result.id">
                <img :src="'https://image.tmdb.org/t/p/w500/'+  result.poster_path"  alt="movie_poster" class="movie-poster">
                <p>{{result.title}}</p>
              </div>
          </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
      return {
          query:'',
          results:'',
      }
  },
  methods: {
      getResults(query) {
          try {
            axios.get('https://api.themoviedb.org/3/search/multi?api_key=0f08dc4e4349843206211c1da94e45f7&page=1&query='+ query)
            .then(response => {
              this.results =  response.data.results
            }) 
            }
            catch (err) {
                console.log(err)
            }
          }
},
mounted () {
    try {
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0f08dc4e4349843206211c1da94e45f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2021-06-04&with_watch_monetization_types=flatrate')
            .then(response => {
              this.results =  response.data.results.slice(6, 30)
              console.log(this.results)
            }) 
            }
            catch (err) {
                console.log(err)
            }
          }
}
</script>

<style>
.search {
  margin: auto;
  color: #fff;
  background-color: #372772;
}
.sb-container {
  width: 50vw;
  padding: 2srem;
  margin: auto;

  
}
.search-bar {
  border-radius: 1.5rem;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  padding: 20px;
  background-blend-mode: darken;
}
section.search-results {
    height:100vh;
    margin-bottom: 20rem;

}
.search-results {
    display: flex;
    flex-wrap: wrap;
    width: 85vw;
    margin: auto;
    overflow: hidden;
    margin-left: 14rem;
    padding: 2rem;

}
.search-results-item {
    margin: 30px;
    position: relative;
    width: 10rem;
    height:15rem;
    text-align: center;
    
}

.movie-poster {
    width: 10rem;
    height: 15rem;
    border-radius: 5px;
    padding:1px;
    margin-bottom: 5px;
    box-shadow: 0 0 7px;
}
.centered-text {
    margin: auto;
    left: 30%;
    padding: 1rem;
    color: #e63946;
}
</style>