<template>
  <div class="popup-background" ref="popup">
    <div class="popup">
      <h2>Результати пошуку</h2>
      <table>
        <tr>
          <td>Тип документу</td>
          <td>Студентський квиток</td>
        </tr>
        <tr>
          <td>Прізвище, ім'я, по батькові</td>
          <td>Іванов Іван Іванович</td>
        </tr>
        <tr>
          <td>Реєстраційний номер</td>
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
        <tr>
          <td>Заклад освіти</td>
          <td>Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського"</td>
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

<style>
.popup-background {
  display: none;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: rgba(115, 113, 113, 0.5);
}
.popup {
  background-color: white;
  position: relative;
  width: 700px;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.popup .btn-download, .popup .btn-close {
  width: calc(50% - 40px);
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.popup .btn-download {
  background-color: #3C8AB8;
  color: white;
  padding: 10px;
  margin-right: 20px;
  transition: background-color 0.5s ease-out 50ms;
}
.popup .btn-close {
  background-color: white;
  color: #3C8AB8;
  border: 5px solid #3C8AB8;
  padding: 5px;
  margin-left: 20px;
  transition: color 0.5s ease-out 50ms, 
              border 0.5s ease-out 50ms;
}
.popup .btn-download:hover {
  background-color: #004C79;
  cursor: pointer;
}
.popup .btn-close:hover {
  color: #004C79;
  cursor: pointer;
  border: 5px solid #004C79;
}
.popup h2 {
  margin: 0;
  text-align: center;
  color: #005F97;
}
.popup table {
  width: 100%;
  margin: 30px 0;
  border-collapse: collapse;
}
.popup table tr:nth-of-type(2n+1) {
  background-color: #E8F4FA;
}
.popup table td {
  padding: 5px;
  font-weight: bold;
}
.popup table td:first-of-type {
  color: #004C79;
  width: 35%;
}
.active {
  color: limegreen;
}
.inactive {
  color: salmon;
}
</style>