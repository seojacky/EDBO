import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import Login from './components/Login.vue'
import RegistrationRequest from './components/RegistrationRequest.vue'
import RegistratorUpdate from './components/RegistratorUpdate.vue'
import AdministratorPage from './components/AdministratorPage.vue'
import Journal from './components/Journal.vue'
import EducationDocuments from './components/EducationDocuments.vue'
import StudentTickets from './components/StudentTickets.vue'
import ZnoCertificates from './components/ZnoCertificates.vue'
import EducationalActivitySubjects from './components/EducationalActivitySubjects.vue'
import TeacherCertificates from './components/TeacherCertificates.vue'
import AddStudentTicket from './components/AddStudentTicket.vue'
import AddTeacherCertificate from './components/AddTeacherCertificate.vue'
import AddEducationDocument from './components/AddEducationDocument.vue'
import AddZnoCertificate from './components/AddZnoCertificate.vue'
import AddEducationalActivitySubject from './components/AddEducationalActivitySubject'
import UpdateStudentTicket from './components/UpdateStudentTicket.vue'
import UpdateTeacherCertificate from './components/UpdateTeacherCertificate.vue'
import UpdateEducationDocument from './components/UpdateEducationDocument.vue'
import UpdateZnoCertificate from './components/UpdateZnoCertificate.vue'
import UpdateSearchStudentTicket from './components/UpdateSearchStudentTicket.vue'
import UpdateSearchTeacherCertificate from './components/UpdateSearchTeacherCertificate.vue'
import UpdateSearchEducationDocument from './components/UpdateSearchEducationDocument.vue'
import UpdateSearchZnoCertificate from './components/UpdateSearchZnoCertificate.vue'

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
    path: '/registrator-update',
    name: 'RegistratorUpdate',
    component: RegistratorUpdate,
    props: true
  },
  {
    path: '/administartor',
    name: 'AdministratorPage',
    component: AdministratorPage
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal
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
  {
    path: '/add-student-ticket',
    name: 'AddStudentTicket',
    component: AddStudentTicket
  },
  {
    path: '/add-teacher-certificate',
    name: 'AddTeacherCertificate',
    component: AddTeacherCertificate
  },
  {
    path: '/add-education-document',
    name: 'AddEducationDocument',
    component: AddEducationDocument
  },
  {
    path: '/add-zno-certificate',
    name: 'AddZnoCertificate',
    component: AddZnoCertificate
  },
  {
    path: '/add-educational-activity-subject',
    name: 'AddEducationalActivitySubject',
    component: AddEducationalActivitySubject
  },
  {
    path: '/update-student-ticket',
    name: 'UpdateStudentTicket',
    component: UpdateStudentTicket
  },
  {
    path: '/update-teacher-certificate',
    name: 'UpdateTeacherCertificate',
    component: UpdateTeacherCertificate
  },
  {
    path: '/update-education-document',
    name: 'UpdateEducationDocument',
    component: UpdateEducationDocument
  },
  {
    path: '/update-zno-certificate',
    name: 'UpdateZnoCertificate',
    component: UpdateZnoCertificate
  },
  {
    path: '/update-search-student-ticket',
    name: 'UpdateSearchStudentTicket',
    component: UpdateSearchStudentTicket
  },
  {
    path: '/update-search-teacher-certificate',
    name: 'UpdateSearchTeacherCertificate',
    component: UpdateSearchTeacherCertificate
  },
  {
    path: '/update-search-education-document',
    name: 'UpdateSearchEducationDocument',
    component: UpdateSearchEducationDocument
  },
  {
    path: '/update-search-zno-certificate',
    name: 'UpdateSearchZnoCertificate',
    component: UpdateSearchZnoCertificate
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
