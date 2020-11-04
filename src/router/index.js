import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Edit from '../views/Edit.vue'
import Blogs from '../views/Blogs.vue'
import NewBlog from '../views/NewBlog.vue'
import ViewBlog from '../views/ViewBlog.vue'
import NewResume from '../views/NewResume.vue'
import Welcome from '../views/Welcome.vue'
import EditResume from '../views/EditResume.vue'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  // {
  //   path: '/whoami',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit/resume',
    name: 'EditResume',
    component: EditResume,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new',
    name: 'NewBlog',
    component: NewBlog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blogs/:blogid',
    name: 'EditBlog',
    component: ViewBlog
  },
  {
    path: '/new/resume',
    name: 'NewResume',
    component: NewResume,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})


export default router
