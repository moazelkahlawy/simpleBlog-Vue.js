import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/views/home.vue'
import SingleBlog from './components/views/SingleBlog.vue'

Vue.use(VueRouter)
export const router = new VueRouter({
    routes:[
        { path: '/', component: Home },
        { path: '/blog/card', component: SingleBlog }
    ]
})
