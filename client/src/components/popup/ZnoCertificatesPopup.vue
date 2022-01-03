<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Рік проходження</td>
          <td>{{result.year}}</td>
        </tr>
        <tr>
          <td>Прізвище, ім'я, по батькові</td>
          <td>{{result.lastName}} {{result.firstName}} {{result.fatherName}}</td>
        </tr>
        <tr>
          <td>Номер сертифікату</td>
          <td>{{result.number}}</td>
        </tr>
        <tr>
          <td style="color: black">Результати</td>
        </tr>
        <tr v-for="item in result.result" v-bind:key="item.subject">
          <td>{{item.subject}}</td>
          <td>{{item.result}}</td>
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
