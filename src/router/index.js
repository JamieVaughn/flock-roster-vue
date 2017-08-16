import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import Stock from '@/components/Stock/Stock'
import NewEntry from '@/components/Stock/NewEntry'
import Individual from '@/components/Stock/Individual'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/new',
      name: 'NewEntry',
      component: NewEntry
    },
    {
      path: '/stock/:id',
      name: 'Individual',
      props: true,
      component: Individual
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
