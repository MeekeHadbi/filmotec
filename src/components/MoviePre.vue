<template>
    
    <div id="moviePre">

        <div id="details_preMovie">
            <h5>{{ title }}
                <small>({{ date }})</small>
            </h5>
            <p>{{ overview }}</p>
        </div>
        
        <div id="poster_preMovie">
            <img v-if="this.poster_path !== null" v-bind:src="'http://image.tmdb.org/t/p/w500'+this.poster_path" width='100px'>
            <div id="none-image" v-else>
                <small><i>Pas d'image recensée</i></small>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "MoviePre",
    props: {
        title: String,
        date: String,
        overview: String,
        poster_path: String
    }
}
</script>