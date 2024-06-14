import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import MylibraryPage from '../pages/MylibraryPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/library', component: MylibraryPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router