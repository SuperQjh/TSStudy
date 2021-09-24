import {createRouter, createWebHashHistory} from 'vue-router'
import About from '../components/About.vue'
import News from '../components/News.vue'
import NotFound from '../components/NotFound.vue'

const Home = { template: '<div>Home</div>'}

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {
    path: '/news/:id',
    component: News
  },
  {
    path: '/:path(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router