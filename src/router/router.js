import Vue from 'vue'
import Router from 'vue-router'
import PageA from './views/PageA'
import PageB from './views/PageB'
import PageC from './views/PageC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/pageB'
    }, {
      path: '/pageA/123/vue',
      name: 'pageA',
      component: PageA
    }, {
      path: '/pageB',
      name: 'pageB',
      component: PageB
    }, {
      path: '/pageC/:id/:name',
      name: 'pageC',
      props: true,
      component: PageC
    }, 
  ]
})
