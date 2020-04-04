<template>
  
  <div id="comments">

    <div id="commentForm" @submit.prevent="submitComment">
      <form class="flex flex-col">
        <textarea rows="5" cols="33" v-model="comment">Laisser votre plus beau commentaire !</textarea>
        <button type="submit">Commenter!</button>
      </form>
    </div>

    <div id="allComments" v-for='com in comsMovie' :key='com.id_com'>
      <Comment :id_critic=com.id_critic :stars=com.stars :com=com.com />
    </div>

  </div>


</template>

<script>
import comJson from '../json/comments.json'
import Comment from './Comment.vue'

export default {
    data(){
        return{
            comment: '',
            comsMovie: ""
        }
    },
    components: {
      Comment
    },
    methods: {
        submitComment(){
            console.log(this.comment)
        },

        getComments(idMovie) {
          comJson.forEach(element => {
            if(element.id_movie == idMovie) {
              this.comsMovie = element.comments
            }
          });
        }
    },
    beforeMount(){ 
        this.getComments(this.$route.params.id)
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