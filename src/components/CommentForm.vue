<template>
  <div id="commentForm" @submit.prevent="submitComment">
    <form class="flex flex-col">
      <textarea rows="5" cols="33" v-model="comment">Laisser votre plus beau commentaire !</textarea>
      <button type="submit">Commenter!</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            comment: '',
        }
    },
    methods: {
        submitComment(){
            console.log(this.comment)
        }
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