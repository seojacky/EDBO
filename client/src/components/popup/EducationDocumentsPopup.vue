<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Найменування документу</td>
          <td>{{result.type}}</td>
        </tr>
        <tr>
          <td>Реєстраційний номер документа в Єдиній державній електронній базі з питань освіти</td>
          <td>{{result.series}} {{result.number}}</td>
        </tr>
        <tr>
          <td>Дата видачі документа</td>
          <td>{{result.documentDate}}</td>
        </tr>
        <tr>
          <td>Рік закінчення закладу освіти (відокремленого структурного підрозділу) (здобуття освіти)</td>
          <td>{{result.year}}</td>
        </tr>
        <tr>
          <td>Прізвище, ім'я, по батькові</td>
          <td>{{result.lastName}} {{result.firstName}} {{result.fatherName}}</td>
        </tr>
        <tr v-if="result.dateOfBirth !== null">
          <td>Дата народження</td>
          <td>{{result.dateOfBirth}}</td>
        </tr>
        <tr>
          <td>Найменування закладу освіти</td>
          <td>{{result.institution}}</td>
        </tr>
      </table>
      <div class="btn-download">
        Завантажити
      </div>
      <div class="btn-close" v-on:click="handleBtnCloseClick">
        Закрити
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isPopup', 'result'],
  name: 'StudentTicketsPopup',
  watch: { 
    isPopup: function(newVal) { 
      if (newVal === true) {
        this.$refs.popup.style.display = 'block';
      }
    }
  },
  methods: {
    handleBtnCloseClick() {
      this.$refs.popup.style.display = 'none';
      this.$emit('popup', false);
    }
  }
}
</script>
