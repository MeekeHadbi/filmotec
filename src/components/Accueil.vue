<template>
    <div id="accueil">

        <div id="moviePreList" v-for='result in results' :key='result.id'>

            <router-link tag="blocMoviePre" v-bind:to="'/movies/'+result.id">
                <MoviePre :title=result.title :date=result.release_date :overview=result.overview :poster_path=result.poster_path />
            </router-link>

        </div>

    </div>
</template>

<script>
import MoviePre from './MoviePre.vue'
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'Accueil',
    components: {
        MoviePre
    },
    data() {
        return {
            results: ''
        }
    },
    methods: {
        format_date(value){
            if (value) {
                return moment(String(value)).format('YYYY-MM-DD')
            }
        },
        getResult() {

            var now = new Date();
            var nowDate = this.format_date(now)

            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2a451d7a356fe15263f27b868d8c1014&sort_by=popularity.desc&release_date.gte='+nowDate)
            .then(response => {
                this.results = response.data.results
            })

        }
    },
    beforeMount(){ 
        this.getResult(this.$route.params.id)
    }
}
</script>