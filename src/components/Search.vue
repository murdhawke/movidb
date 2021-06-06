<template>
    <div class="search">
        <section>
          <h3 class="labels">『 S e a r c h 』</h3>
          <div class="sb-container">
            <b-form-input v-model="query"  class="search-bar" placeholder="Movie / TV Show Title"
            @keyup="getResults(query)" autocomplete="off"></b-form-input>
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
          results:''
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
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
.search-bar {
  border-radius: 1.5rem;
  width: 60%;
  height: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  font-size: 1.5rem;
  
}
input[type="text"]::placeholder {  
  margin-left: 1rem;
  letter-spacing: 5px;
            } 
section.search-results {
    height:100vh;
    margin-bottom: 20rem;

}
.search-results {
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    margin: auto;
    padding-top: 10rem;

}
.search-results-item {
    position: relative;
    width: 10rem;
    height:15rem;
    text-align: center;
    margin: auto;
    margin-left: 2rem;
    margin-bottom: 7rem;
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
@media screen and (max-width: 400px) {
   * {
     width: 100%;
  }
  .search-bar {
    width: 100%;
    margin: auto;
    padding:auto;
  }
  .search-results {
    padding: 50px;
  }
  .search-results-item  {
    width: auto;
    margin: auto;
    height: auto;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .movie-poster {
    margin: auto;
    padding: auto;
  }
  .titles{
    text-align: center;
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .search-bar {
    width:100%;
    height: 2rem;
    font-size: 1rem;
    margin: 0;
    padding:0;
  }
}
</style>