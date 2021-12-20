<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Рік проходження</td>
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
          <td style="color: black">Результати</td>
        </tr>
        <tr>
          <td>Українська мова та література</td>
          <td>195</td>
        </tr>
        <tr>
          <td>Математика</td>
          <td>192</td>
        </tr>
        <tr>
          <td>Англійська мова=</td>
          <td>193</td>
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
