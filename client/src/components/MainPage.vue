<template>
  <div class="main-page">
    <div class="register-container">
      <div class="register-item">
        <img src="./../assets/images/education.gif" />
        <h2 v-on:click="handleEducationDocumentsClick">Реєстр документів про освіту</h2>
        <h3>Перевірка достовірності документів про освіту: вища, фахова передвища, 
        професійна (професійно-технічна), загальна середня освіта</h3>
      </div>
      <div class="register-item">
        <img src="./../assets/images/ticket.gif" />
        <h2 v-on:click="handleSudentTicketsClick">Реєстр студентських (учнівських) квитків</h2> 
        <h3>Перевірка достовірності студентських і учнівських квитків закладів вищої, 
        фахової, передвищої, професійної (професійно-технічної) освіти</h3>
      </div>
      <div class="register-item">
        <img src="./../assets/images/document.gif" />
        <h2 v-on:click="handleZnoCertificatesClick">Реєстр сертифікатів зовнішнього незалежного оцінювання</h2>        
        <h3>Перевірка достовірності сертифікатів зовнішнього незалежного оцінювання (ЗНО), 
        що використовуються для вступу на основі повної загальної середньої освіти</h3>
      </div>
      <div class="register-item">
        <img src="./../assets/images/university.gif" />
        <h2 v-on:click="handleEducationalActivitySubjectsClick">Реєстр суб'єктів освітньої діяльності</h2>        
        <h3>Інформація про заклади: вищої освіти, фахової передвищої освіти, 
        професійної (професійно-технічної) освіти, загальної середньої освіти</h3>
      </div>
      <div class="register-item">
        <img src="./../assets/images/certificate.gif" />
        <h2 v-on:click="handleTeacherCertificatesClick">Реєстр сертифікатів педагогічних працівників</h2>        
        <h3>Перевірка достовірності сертифікатів педагогічних працівників</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    handleEducationDocumentsClick() {
      this.$router.push({ path: '/education-documents' });
    },
    handleSudentTicketsClick() {
      this.$router.push({ path: '/student-tickets' });
    },
    handleZnoCertificatesClick() {
      this.$router.push({ path: '/zno-certificates' });
    },
    handleEducationalActivitySubjectsClick() {
      this.$router.push({ path: '/educational-activity-subjects' });
    },
    handleTeacherCertificatesClick() {
      this.$router.push({ path: '/teacher-certificates' });
    }
  }
}
</script>

<style>
.main-page {
  padding: 30px;
}
.register-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  flex: 1 1 auto;
  counter-reset: grid;
}
.register-container h3 {
  font-weight: lighter;
  color: grey;
}
.register-container h2 {
  text-decoration: none;
  color: black;
  transition: color 0.25s ease-out 50ms;
}
.register-container h2:hover {
  color: #3C8AB8;
  cursor: pointer;
}
.register-container .register-item {
  padding: 20px;
  margin: 20px;
  background-color: white;
  grid-column: span 2;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.register-container .register-item:after {
  counter-increment: grid;
}
.register-container .register-item:last-child:nth-child(3n - 1) {
  grid-column-end: -2;
}
.register-container .register-item:nth-last-child(2):nth-child(3n + 1) {
  grid-column-end: 4;
}
.register-container .register-item img {
  height: 150px;
}
</style>