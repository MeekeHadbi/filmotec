import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Movie from './components/Movie.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path:'/',name:'search',component:Search},
        {path:'/movies/:id',name:'movie',component:Movie}
    ]
});