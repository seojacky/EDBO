import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import StudentTickets from './components/StudentTickets.vue'
import ZnoCertificates from './components/ZnoCertificates.vue'
import TeacherCertificates from './components/TeacherCertificates.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/student-tickets',
    name: 'StudentTickets',
    component: StudentTickets
  },
  {
    path: '/zno-certificates',
    name: 'ZnoCertificates',
    component: ZnoCertificates
  },
  {
    path: '/teacher-certificates',
    name: 'TeacherCertificates',
    component: TeacherCertificates
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
