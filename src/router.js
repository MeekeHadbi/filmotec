import Vue from 'vue';
import Router from 'vue-router';
import Accueil from './views/Accueil.vue';
import Search from './views/Search.vue';
import Movie from './views/Movie.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path:'/',name:'accueil',component:Accueil},
        {path:'/search',name:'search',component:Search},
        {path:'/movies/:id',name:'movie',component:Movie},
    ]
});