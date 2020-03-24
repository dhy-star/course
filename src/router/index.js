import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: function (resolve) {
        require(['../components/login/login'], resolve)
      }
    },
    {
      path: '/window',
      name: 'window',
      component: function (resolve) {
        require(['../components/body/window'], resolve)
      },
      children: [
        {
          path: '',
          name: 'proclamation',
          component: function (resolve) {
            require(['../components/subject/proclamation'], resolve)
          }

        },

        {
          path: 'daylog',
          name: 'day_log',
          component: function (resolve) {
            require(['../components/subject/day_log'], resolve)
          }

        },
        {
          path: 'list',
          name: 'list',
          component: function (resolve) {
            require(['../components/subject/list'], resolve)
          }
        }

      ]

    }

  ]
})
