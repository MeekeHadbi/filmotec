<template>
  <div id="search">

    <h3>Cherche ton film</h3>

    <input type='text' v-model='query' @keyup='getResult(query)'>

    <router-link class="moviePreList" tag="blocMoviePre" v-for='result in results' :key='result.id' v-bind:to="'/movies/'+result.id">
      <MoviePre :title=result.title :date=result.release_date :overview=result.overview :poster_path=result.poster_path />
    </router-link>
    
  </div>
</template>

<script>
import axios from 'axios'
import MoviePre from '../components/MoviePre.vue'

export default {
  name: 'Search',
  props: {
    msg: String,
  },
  data() {    
    return {      
      query: '',
      results: ''
    } 
  },
  components: {
    MoviePre
  },
  methods: {
    getResult(query) {

      axios.get('https://api.themoviedb.org/3/search/movie?api_key=2a451d7a356fe15263f27b868d8c1014&query=' + query)
      .then(response => { 
        this.results = response.data.results 
      })
      
      console.log(this.results)

    }
  }
}
</script>
