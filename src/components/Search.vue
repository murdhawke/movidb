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
                <p class="titles">{{result.title}}</p>
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
          searching:false,
          results:'',
      }
  },
  methods: {
      getResults(query) {
          try {
            this.searching = true
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
.search-bar {
  border-radius: 1.5rem;
  width: 80%;
  height: 3rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5rem;
  
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
    padding-bottom:10rem;

}
.search-results-item {
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 100px;
    position: relative;
    width: 10rem;
    height:15rem;
    text-align: center;
    padding: 3rem;
}

.movie-poster {
    width: 10rem;
    height: 15rem;
    border-radius: 5px;
    padding:3px;
    margin-bottom: 5px;
    box-shadow: 0 0 7px;
}
.titles {
    width:150px
}
</style>