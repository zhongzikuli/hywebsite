import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Culture from '@/components/Culture'
import Contact from '@/components/Contact'
import Recruit from '@/components/Recruit'
import HumanResource from '@/components/HumanResource'
import Marketing from '@/components/Marketing'
import CarFinance from '@/components/CarFinance'
import LabCar from '@/components/LabCar'
import Insurance from '@/components/Insurance'
import VideoFace from '@/components/VideoFace'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '*',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/business',
    name: 'CarFinance',
    component: CarFinance,
  }, {
    path: '/culture',
    name: 'Culture',
    component: Culture
  }, {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  }, {
    path: '/humanresource',
    name: 'HumanResource',
    component: HumanResource
  }, {
    path: '/recruit/:id',
    name: 'Recruit',
    component: Recruit
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/carfinance',
    name: 'CarFinance',
    component: CarFinance
  }, {
    path: '/labcar',
    name: 'LabCar',
    component: LabCar
  }, {
    path: '/videoface',
    name: 'VideoFace',
    component: VideoFace
  }, {
    path: '/insurance',
    name: 'Insurance',
    component: Insurance
  }]
})
