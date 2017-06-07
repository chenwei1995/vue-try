import Vue from 'vue'
import Router from 'vue-router'
import navHook from '@/components/navHook'
import home from '@/components/pages/index'
import page from '@/components/pages/page'
import detail from '@/components/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navHooks',
      component: navHook,
      children: [
        {
          path: '/',
          component: home
        },
        {
          path: '/page',
          component: page
        }
      ]
    },
    {
      path: '/details',
      component: detail
    }
  ]
})
