<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>{{result.long_name}}</h2>
      <table>
        <tr>
          <td>Код закладу в ЄДЕБО</td>
          <td>{{result.code_edbo}}</td>
        </tr>
        <tr>
          <td>Повне найменування</td>
          <td>{{result.long_name}}</td>
        </tr>
        <tr>
          <td>Коротка назва</td>
          <td>{{result.short_name}}</td>
        </tr>
        <tr>
          <td>Ідентифікаційний код</td>
          <td>{{result.code_identification}}</td>
        </tr>
        <tr>
          <td>Тип закладу освіти</td>
          <td>{{result.type}}</td>
        </tr>
        <tr>
          <td>Форма власності</td>
          <td>{{result.form}}</td>
        </tr>
        <tr>
          <td>Найменування органу, до сфери управління якого належить заклад освіти</td>
          <td></td>
        </tr>
        <tr>
          <td>Найменування посади, прізвище, ім’я, по батькові керівника закладу освіти</td>
          <td></td>
        </tr>
        <tr>
          <td>Адреса</td>
          <td>{{result.long_adress}}</td>
        </tr>
        <tr>
          <td>Поштовий індекс</td>
          <td>{{result.postal_code}}</td>
        </tr>
        <tr>
          <td>Телефон / факс</td>
          <td>{{result.phone}}</td>
        </tr>
        <tr>
          <td>Електронна пошта</td>
          <td>{{result.email}}</td>
        </tr>
        <tr v-if="result.site">
          <td>Веб-сайт</td>
          <td><a href="http://kpi.ua" target="_blank">{{result.site}}</a></td>
        </tr>
        <tr>
          <td>Рік заснування</td>
          <td>{{result.year_foundation}}</td>
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
