import {createRouter, createWebHashHistory} from 'vue-router'
import About from '../components/About.vue'
import News from '../components/News.vue'
import NotFound from '../components/NotFound.vue'
import BFC from '../components/BFC.vue'

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
  },
  {
    path: '/bfc',
    component: BFC
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router