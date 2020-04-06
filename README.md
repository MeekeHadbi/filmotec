# filmotec
Projet Filmotec Mission 3 / BTS SIO . Il s'agit d'une application nommée ApNotPan. Elle permet de poser des critiques (commentaire + nombre d'étoile) sur un film choisi.

## Développeurs et développement
Nous sommes le groupe "Rome", composé de Meeké Habdi et de Romane Leseur. L'application a été réalisée en VueJs.

## Les APIs
Sur ce projet, nous bénéficions de deux APIs. L'une étant TMDB, une API déjà existante, nous permettant de récupérer une liste de films, basée sur des critères que nous choisissons. L'autre étant créé par nos soins et nous permettant, nottament, d'envoyer les critiques (commentaires + nombre d'étoiles choisi) dans une base de données. Cette dernière API a été créée à l'aide de Composer/Symfony.

Par ailleurs, voici la preuve de son bon fonctionnement au travers de Curl :
![Curl, affichage de la BDD locale](https://github.com/MeekeHadbi/filmotec/blob/master/src/assets/curlAPICritiques.PNG)

## Accès aux APIs
Les apis sont accédées au travers du module Axios.
Par ex :
```javascript
axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2a451d7a356fe15263f27b868d8c1014&sort_by=popularity.desc&release_date.gte='+nowDate)
.then(response => {
    this.results = response.data.results
}) // Stocke dans une variable results les films dernièrement réalisés et bénficiant de la plus haute popularité (utilisée sur la page d'accueil)
```
ou bien :
```javascript
axios.post("http://127.0.0.1:8000/api/critiques", {
    movieId: this.$route.params.id,
    commentaire: this.comment,
    stars: this.stars
}); // Envoie sur la bdd locale, au travers de notre api, l'id du film, le commentaire donné ainsi que le nombre d'étoile choisi (utilisé dans le composant Comments.vue)
```