import Vue from 'vue';
import Router from 'vue-router';
import Accueil from './components/Accueil.vue';
import Search from './components/Search.vue';
import Movie from './components/Movie.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path:'/',name:'accueil',component:Accueil},
        {path:'/search',name:'search',component:Search},
        {path:'/movies/:id',name:'movie',component:Movie}
    ]
});