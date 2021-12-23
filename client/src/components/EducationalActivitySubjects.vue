<template>
  <div class="educational-activity-subjects">
    <div class="educational-activity-subjects-content">
      <form method="GET">
        <select v-model="region">
          <option>місто Київ</option>
          <option>Вінницька область</option>
          <option>Волинська область</option>
          <option>Дніпропетровська область</option>
          <option>Донецька область</option>
          <option>Житомирська область</option>
          <option>Закарпатська область</option>
          <option>Запорізька область</option>
          <option>Івано-Франківська область</option>
          <option>Київська область</option>
          <option>Кіровоградська область</option>
          <option>Луганська область</option>
          <option>Львівська область</option>
          <option>Миколаївська область</option>
          <option>Одеська область</option>
          <option>Полтавська область</option>
          <option>Рівненська область</option>
          <option>Сумська область</option>
          <option>Тернопільска область</option>
          <option>Харківська область</option>
          <option>Херсонська область</option>
          <option>Хмельницька область</option>
          <option>Черкаська область</option>
          <option>Чернівецька область</option>
          <option>Чернігівська область</option>
        </select>
        <select v-model="subject">
          <option>Заклади вищої освіти</option>
          <option>Заклади фахової передвщої освіти</option>
          <option>Заклади професійної (професійно-технічної) освіти</option>
          <option>Заклади загальної середньої освіти</option>
        </select>
        <input type="text" v-model="name" placeholder="Пошук за назвою"/>
        <input type="submit" value="Пошук" />
      </form>
      <div class="subjects-container">
        <h3 v-on:click="handleSubjectClick()">Академія зовнішньої розвідки України</h3>
        <h3 v-on:click="handleSubjectClick()">Академія праці, соціальних відносин і туризму</h3>
        <h3 v-on:click="handleSubjectClick()">Вищий навчальний заклад "Київська Академія перукарського мистецтва"</h3>
        <h3 v-on:click="handleSubjectClick()">Вищий навчальний заклад "Університет економіки та права "КРОК"</h3>
        <h3 v-on:click="handleSubjectClick()">Військовий інститут телекомунікацій та інформатизації імені Героїв Крут</h3>
        <h3 v-on:click="handleSubjectClick()">Воєнно-дипломатична академія імені Євгенія Березняка</h3>
        <h3 v-on:click="handleSubjectClick()">Київська муніципальна академія естрадного та циркового мистецтв</h3>
        <h3 v-on:click="handleSubjectClick()">Київська муніципальна академія музики ім. Р.М. Глієра</h3>
        <h3 v-on:click="handleSubjectClick()">Київський національний лінгвістичний університет</h3>
      </div>
    </div>
    <EducationalActivitySubjectsPopup :isPopup="isPopup" @popup="updatePopup" />
  </div>
</template>

<script>
import EducationalActivitySubjectsPopup from './EducationalActivitySubjectsPopup.vue';

export default {
  name: 'EducationalActivitySubjects',
  components: {
    EducationalActivitySubjectsPopup
  },
  data() {
    return {
      region: 'місто Київ',
      subject: 'Заклади вищої освіти',
      name: '',
      isPopup: false
    }
  },
  methods: {
    handleSubjectClick() {
      console.log('click')
      this.isPopup = true;
    },
    updatePopup(isPopup) {
      this.isPopup = isPopup;
      this.$router.go(0);
    }
  }
}
</script>

<style>
.educational-activity-subjects-content {
  width: 1000px;
  background-color: white;
  padding: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 3px 16px 6px rgba(34, 60, 80, 0.2);
  min-height: calc(100vh - 170px);
}
.educational-activity-subjects-content h3 {
  color: black;
  transition: color 0.5s ease-out 50ms;
}
.educational-activity-subjects-content form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.educational-activity-subjects-content h3:hover {
  cursor: pointer;
  color: #005F97;
}
.educational-activity-subjects-content select {
  margin: 5px;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.educational-activity-subjects-content select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.educational-activity-subjects-content input[type="text"] {
  box-sizing: border-box;
  width: 300px;
  margin: 5px;
  padding: 3px;
  border: 1px solid grey;
}
.educational-activity-subjects-content input[type="text"]:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.educational-activity-subjects-content input[type="submit"] {
  box-sizing: border-box;
  width: 100px;
  margin: 5px;
  padding: 4px;
  font-weight: bold;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  color: white;
}
.educational-activity-subjects-content input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>