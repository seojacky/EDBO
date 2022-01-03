<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Найменування документу</td>
          <td>Свідоцтво про здобуття загальної середньої освіти</td>
        </tr>
        <tr>
          <td>Реєстраційний номер документа в Єдиній державній електронній базі з питань освіти</td>
          <td>КВ 12645679</td>
        </tr>
        <tr>
          <td>Дата видачі документа</td>
          <td>25.06.2019</td>
        </tr>
        <tr>
          <td>Рік закінчення закладу освіти (відокремленого структурного підрозділу) (здобуття освіти)</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>Прізвище, ім'я, по батькові</td>
          <td>Іванов Іван Іванович</td>
        </tr>
        <tr>
          <td>Дата народження</td>
          <td>20.10.2001</td>
        </tr>
        <tr>
          <td>Найменування закладу освіти</td>
          <td>Середня загальноосвітня школа №1 м. Києва</td>
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
  props: ['isPopup'],
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
