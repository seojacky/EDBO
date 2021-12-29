<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського"</h2>
      <table>
        <tr>
          <td>Код закладу в ЄДЕБО</td>
          <td>174</td>
        </tr>
        <tr>
          <td>Повне найменування</td>
          <td>Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського"</td>
        </tr>
        <tr>
          <td>Коротка назва</td>
          <td>НТУУ "КПІ"</td>
        </tr>
        <tr>
          <td>Ідентифікаційний код</td>
          <td>12345678901234</td>
        </tr>
        <tr>
          <td>Тип закладу освіти</td>
          <td>Університет</td>
        </tr>
        <tr>
          <td>Форма власності</td>
          <td>Державна</td>
        </tr>
        <tr>
          <td>Найменування органу, до сфери управління якого належить заклад освіти</td>
          <td>Міністерство освіти і науки України</td>
        </tr>
        <tr>
          <td>Найменування посади, прізвище, ім’я, по батькові керівника закладу освіти</td>
          <td>Ректор Згуровський Михайло Захарович</td>
        </tr>
        <tr>
          <td>Фактична адреса</td>
          <td>просп. Перемоги, 37, Київ</td>
        </tr>
        <tr>
          <td>Юридична адреса</td>
          <td>просп. Перемоги, 37, Київ</td>
        </tr>
        <tr>
          <td>Телефон / факс</td>
          <td>(063) 743-47-57</td>
        </tr>
        <tr>
          <td>Електронна пошта</td>
          <td>mail@kpi.ua</td>
        </tr>
        <tr>
          <td>Веб-сайт</td>
          <td><a href="http://kpi.ua" target="_blank">http://kpi.ua</a></td>
        </tr>
        <tr>
          <td>Рік заснування</td>
          <td>1898</td>
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
