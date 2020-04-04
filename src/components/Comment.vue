<template>

    <div id="comment">

        <h5><b>Critique :</b> {{ name_critic }} {{ lastname_critic }}</h5>
        <p><b>Nombre d'étoile :</b> {{ stars }}</p>
        <p>{{ com }}</p>

    </div>
    
</template>

<script>
import criticsJson from '../json/critics.json'

export default {
    name: "Comment",
    data() {
        return {
            name_critic: "",
            lastname_critic: ""
        }
    },
    props: {
        id_critic: Number,
        stars: Number,
        com: String
    },
    methods: {
        getInfosCritic(id_critic) {
            criticsJson.forEach(element => {
                if(element.id_critic == id_critic) {
                    this.name_critic = element.name
                    this.lastname_critic = element.lastname
                }
            });
        }
    },
    beforeMount(){ 
        this.getInfosCritic(this.id_critic)
    }
    
}
</script>