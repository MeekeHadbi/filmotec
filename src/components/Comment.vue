<template>

    <div id="comment">

        <h5><b>Critique :</b>{{ id_critic }}</h5>
        <p><b>Nombre d'étoile :</b> {{ stars }}</p>
        <p>{{ com }}</p>

    </div>
    
</template>

<script>
export default {

    props: {
        id_critic: Number,
        stars: Number,
        com: String
    }
    
}
</script>