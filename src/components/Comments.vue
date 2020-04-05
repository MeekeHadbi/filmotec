<template>
  <div id="comments">
    <p id="msg_alert">{{ msg }}</p>

    <div id="commentForm" @submit.prevent="submitComment">
      <form class="flex flex-col">
        <select v-model.number="stars">
          <option disabled value="">Nombre d'étoile</option>
          <option v-for="index in 5" :key=index>{{ index }}</option>
        </select>
        <textarea rows="5" cols="33" v-model="comment">Laisser votre plus beau commentaire !</textarea>
        <button type="submit">Commenter!</button>
      </form>
    </div>

    <div id="allComments" v-for="com in comsMovie" :key="com.id_com">
      <Comment :id_critic="com.id_critic" :stars="com.stars" :com="com.com" />
    </div>
  </div>
</template>

<script>
import comJson from "../json/comments.json";
import Comment from "./Comment.vue";
import axios from "axios";

export default {
  name: "Comments",
  data() {
    return {
      comment: "",
      stars: "",
      msg: "",
      comsMovie: ""
    };
  },
  components: {
    Comment
  },
  props: {
    title: String
  },
  methods: {
    submitComment() {
        if(this.comment != '' && this.stars != '') {
          
          axios.post("http://127.0.0.1:8000/api/critiques", {
            movieId: this.$route.params.id,
            commentaire: this.comment,
            stars: this.stars
          });
          this.msg = "Commentaire envoyé"

        } else {
          this.msg = "Il faut mettre un commentaire et un nombre d'étoile !"
        }

    },

    getComments(idMovie) {
      comJson.forEach(element => {
        if (element.id_movie == idMovie) {
          this.comsMovie = element.comments;
        }
      });
    }
  },
  beforeMount() {
    this.getComments(this.$route.params.id);
  }
};
</script>

<style scoped >
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}
textarea {
  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}
button {
  background-color: #555555;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
}
div {
  border-radius: 5px;
  padding: 20px;
}
</style>