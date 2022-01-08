import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'

import Login from './components/Login.vue'
import RegistrationRequest from './components/registrator/RegistrationRequest.vue'
import RegistratorUpdate from './components/registrator/RegistratorUpdate.vue'
import AdministratorPage from './components/administrator/AdministratorPage.vue'
import Journal from './components/administrator/Journal.vue'
import EducationDocuments from './components/search/EducationDocuments.vue' //+
import StudentTickets from './components/search/StudentTickets.vue' //+
import ZnoCertificates from './components/search/ZnoCertificates.vue' //+
import EducationalActivitySubjects from './components/search/EducationalActivitySubjects.vue'
import TeacherCertificates from './components/search/TeacherCertificates.vue' //+
import AddStudentTicket from './components/add/AddStudentTicket.vue'
import AddTeacherCertificate from './components/add/AddTeacherCertificate.vue'
import AddEducationDocument from './components/add/AddEducationDocument.vue'
import AddZnoCertificate from './components/add/AddZnoCertificate.vue'
import AddEducationalActivitySubject from './components/add/AddEducationalActivitySubject'
import AddPersonInfo from './components/add/AddPersonInfo.vue'
import UpdateStudentTicket from './components/update/UpdateStudentTicket.vue'
import UpdateTeacherCertificate from './components/update/UpdateTeacherCertificate.vue'
import UpdateEducationDocument from './components/update/UpdateEducationDocument.vue'
import UpdateZnoCertificate from './components/update/UpdateZnoCertificate.vue'
import UpdateEducationalActivitySubject from './components/update/UpdateEducationalActivitySubject.vue'
import UpdatePersonInfo from './components/update/UpdatePersonInfo.vue'
import UpdateSearchStudentTicket from './components/updateSearch/UpdateSearchStudentTicket.vue'
import UpdateSearchTeacherCertificate from './components/updateSearch/UpdateSearchTeacherCertificate.vue'
import UpdateSearchEducationDocument from './components/updateSearch/UpdateSearchEducationDocument.vue'
import UpdateSearchZnoCertificate from './components/updateSearch/UpdateSearchZnoCertificate.vue'
import UpdateSearchEducationalActivitySubject from './components/updateSearch/UpdateSearchEducationalActivitySubject.vue'
import UpdateSearchPersonInfo from './components/updateSearch/UpdateSearchPersonInfo.vue'

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
    path: '/add-person-info',
    name: 'AddPersonInfo',
    component: AddPersonInfo
  },
  {
    path: '/update-student-ticket',
    name: 'UpdateStudentTicket',
    component: UpdateStudentTicket,
    props: true
  },
  {
    path: '/update-teacher-certificate',
    name: 'UpdateTeacherCertificate',
    component: UpdateTeacherCertificate,
    props: true
  },
  {
    path: '/update-education-document',
    name: 'UpdateEducationDocument',
    component: UpdateEducationDocument,
    props: true
  },
  {
    path: '/update-zno-certificate',
    name: 'UpdateZnoCertificate',
    component: UpdateZnoCertificate,
    props: true
  },
  {
    path: '/update-educational-activity-subject',
    name: 'UpdateEducationalActivitySubject',
    component: UpdateEducationalActivitySubject,
    props: true
  },
  {
    path: '/update-person-info',
    name: 'UpdatePersonInfo',
    component: UpdatePersonInfo,
    props: true
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
  {
    path: '/update-search-educational-activity-subject',
    name: 'UpdateSearchEducationalActivitySubject',
    component: UpdateSearchEducationalActivitySubject
  },
  {
    path: '/update-search-person-info',
    name: 'UpdateSearchPersonInfo',
    component: UpdateSearchPersonInfo
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
