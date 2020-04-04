<template>
  <div id="movie">
    <div id="infos_movie">
      <div id="details_movie">
        <div id="title_movie">
          <h2>{{ this.title }}</h2>
          <small>({{ this.release_date }})</small>
        </div>

        <ul>
          <li>
            <b>Titre original :</b>
            {{ this.original_title }}
          </li>
          <li>
            <b>Résumé :</b>
            {{ this.overview }}
          </li>
          <li>
            <b>Genre(s) :</b>
            <span v-for="(genre,index) in this.genres" v-bind:key="index">
              {{ genre.name }}
              <span v-if="genres[index+1]">,</span>
            </span>
          </li>
          <li>
            <b>Langage originale :</b>
            {{ this.original_language }}
          </li>
        </ul>
      </div>

      <div id="poster_movie">
        <img
          v-if="this.poster_path !== null"
          v-bind:src="'http://image.tmdb.org/t/p/w500' + this.poster_path"
          width="200px"
        />
        <div id="none-image" v-else>
          <small>
            <i>Pas d'image recensée</i>
          </small>
        </div>
      </div>


    </div>

    <Comments />

  </div>
</template>

<script>
import axios from "axios";
import Comments from "../components/Comments.vue";

export default {
  name: "Movie",
  data() {
    return {
      title: "",
      release_date: "",
      original_title: "",
      overview: "",
      genres: "",
      original_language: "",
      poster_path: "",
    };
  },
  components: {
    Comments
  },
  methods: {
    getInfosMovie(id_movie) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            id_movie +
            "?api_key=2a451d7a356fe15263f27b868d8c1014"
        )
        .then(response => {
          this.title = response.data.title;
          this.release_date = response.data.release_date;
          this.original_title = response.data.original_title;
          this.overview = response.data.overview;
          this.genres = response.data.genres;
          this.original_language = response.data.original_language;
          this.poster_path = response.data.poster_path;
        });
    }
  },
  beforeMount() {
    this.getInfosMovie(this.$route.params.id);
  }
};
</script>