<template>
    <div class="search">
        <section>
          <h3 class="labels">『 S e a r c h 』</h3>
          <div class="sb-container">
              <h4>What are you looking for?</h4>
            <b-form-input v-model="query"  class="search-bar" placeholder="Movie / TV Show Title"
            @keyup="getResults(query)"></b-form-input>
          </div>
        </section>
        <section>
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
          pageOfItems:[]
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
          },
      onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems
      }

}
}
</script>

<style>
.search {
  margin: auto;
  color: #fff;
  
  
}
.sb-container {
  width: 40vw;
  padding: 20px;
  margin: auto;

  
}
.search-bar {
  border-radius: 0.7rem;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  padding: 10px;
}
.search-results {
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    margin: auto;
    overflow: hidden;

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
</style>