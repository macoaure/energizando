import { createRouter, createWebHashHistory } from 'vue-router'
import ErrorPage from './pages/ErrorPage.vue'
import HomePage from './pages/HomePage.vue'
import Linktree from './pages/Linktree.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/links', alias: '/linktree', name: 'links', component: Linktree, meta: { standalone: true } },
    { path: '/erro', name: 'error', component: ErrorPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
