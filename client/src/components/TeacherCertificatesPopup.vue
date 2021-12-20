<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Рік</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>Прізвище, ім'я, по батькові</td>
          <td>Іванов Іван Іванович</td>
        </tr>
        <tr>
          <td>Номер сертифікату</td>
          <td>КВ 12645679</td>
        </tr>
        <tr>
          <td>Статус документу</td>
          <td class="active">Активний</td>
        </tr>
        <tr>
          <td>Термін дії</td>
          <td>01.09.2019 - 30.06.2023</td>
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
  name: 'TeacherCertificatesPopup',
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
