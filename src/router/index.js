import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/views/toDoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'toDOList',
      component: ToDoList
    }
  ]
})
