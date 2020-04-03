<template>
  <div>

    <h3>Cherche ton film</h3>

    <input type='text' v-model='query' @keyup='getResult(query)'>

    <div v-for='result in results' :key='result.id'>
      <router-link v-bind:to="'/movies/'+result.id">
        <p>{{result.title}}</p>
        <img v-if="result.poster_path !== null" v-bind:src="'http://image.tmdb.org/t/p/w500' + result.poster_path" width='100px'>
        <small v-else><i>Pas d'image recensée</i></small>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

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
