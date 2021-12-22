import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import Login from './components/Login.vue'
import RegistrationRequest from './components/RegistrationRequest.vue'
import AdministratorPage from './components/AdministratorPage.vue'
import EducationDocuments from './components/EducationDocuments.vue'
import StudentTickets from './components/StudentTickets.vue'
import ZnoCertificates from './components/ZnoCertificates.vue'
import EducationalActivitySubjects from './components/EducationalActivitySubjects.vue'
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration-request',
    name: 'RegistrationRequest',
    component: RegistrationRequest
  },
  {
    path: '/administartor',
    name: 'AdministratorPage',
    component: AdministratorPage
  },
  {
    path: '/education-documents',
    name: 'EducationDocuments',
    component: EducationDocuments
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
    path: '/educational-activity-subjects',
    name: 'EducationalActivitySubjects',
    component: EducationalActivitySubjects
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
