<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Рік</td>
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
          <td>Статус документу</td>
          <td class="active" v-if="result.status === 'Активний'">{{result.status}}</td>
          <td class="inactive" v-else>{{result.status}}</td>
        </tr>
        <tr>
          <td>Термін дії</td>
          <td>{{result.startDate}} - {{result.endDate}}</td>
        </tr>
        <tr>
          <td>Посада</td>
          <td>{{result.position}}</td>
        </tr>
        <tr>
          <td>Номер комісії</td>
          <td>{{result.comissionNumber}}</td>
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
