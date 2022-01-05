<template>
  <div class="add-teacher-certificate">
    <h1>Редагувати дані у Реєстрі сертифікатів педагогічних працівників</h1>
    <form method="POST" v-on:submit="handleSubmitForm">
      <h2>ПІБ</h2>
      <h3>Дані сертифікату</h3>
      <div class="teacher-certificate">
        <select v-model="year">
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
        <label>Термін дії</label>
        <div class="teacher-certificate-date">
          <input type="date" class="valid" ref="startDateInput" v-model="startDate" v-on:focusout="handleFocusoutStartDate" />
          <label> - </label>
          <input type="date" class="valid" ref="endDateInput" v-model="endDate" v-on:focusout="handleFocusoutEndDate" />
        </div>
        <div class="error" v-if="(checkStartDate && checkEndDate) && validateDateRange(startDate, 'startDateInput', endDate, 'endDateInput')">
          {{validateDateRange(startDate, 'startDateInput', endDate, 'endDateInput')}}
        </div>
        <label>Номер*</label>
        <input type="text" class="valid" ref="numberInput" v-model="number" v-on:focusout="handleFocusoutNumber" />   
        <div class="error" v-if="checkNumber && validateInputNumber('Номер', number, 'numberInput')">
          {{validateInputNumber('Номер', number, 'numberInput').message}}
        </div> 
        <label>Посада*</label>
        <input type="text" class="valid" ref="positionInput" v-model="position" v-on:focusout="handleFocusoutPosition" />   
        <div class="error" v-if="checkPosition && validateInputPosition('Посада', position, 'positionInput')">
          {{validateInputPosition('Посада', position, 'positionInput').message}}
        </div> 
        <label>Номер комісії*</label>
        <input type="text" class="valid" ref="comissionNumberInput" v-model="comissionNumber" v-on:focusout="handleFocusoutComissionNumber" />   
        <div class="error" v-if="checkComissionNumber && validateInputComissionNumber('Номер комісії', comissionNumber, 'comissionNumberInput')">
          {{validateInputComissionNumber('Номер комісії', comissionNumber, 'comissionNumberInput').message}}
        </div>  
      </div>       
      <h5>* обов'язкові поля</h5>
      <input type="submit" value="Редагувати" />
    </form>
    <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було оновлено у Реєстрі сертифікатів педагогічних працівників." />
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'UpdateTeacherCertificate',
  components: {
    MessagePopup
  },
  data() {
    return {
      year: 2021,
      checkNumber: false,
      number: '12348765',
      isNumberValid: true,
      checkStartDate: false,
      startDate: '2018-12-12',
      isStartDateValid: true,
      checkEndDate: false,
      endDate: '2022-12-12',
      isEndDateValid: true,
      checkPosition: false,
      position: 'Директор',
      isPositionValid: true,
      checkComissionNumber: false,
      comissionNumber: '12345',
      isComissionNumberValid: true,
      isPopup: false
    }
  },
  methods: {
    handleFocusoutNumber() {
      this.checkNumber = true;
    },
    handleFocusoutStartDate() {
      this.checkStartDate = true;
    },
    handleFocusoutEndDate() {
      this.checkEndDate = true;
    },
    handleFocusoutPosition() {
      this.checkPosition = true;
    },
    handleFocusoutComissionNumber() {
      this.checkComissionNumber = true;
    },
    validateInputNumber(field, number, elementName) {
      const message = Validation.validateNotEmpty(field, number, this.$refs[elementName]);
      this.isNumberValid = message ? false : true;
      return message;
    },
    validateInputPosition(field, position, elementName) {
      const message = Validation.validateNotEmpty(field, position, this.$refs[elementName]);
      this.isPositionValid = message ? false : true;
      return message;
    },
    validateInputComissionNumber(field, number, elementName) {
      const message = Validation.validateNotEmpty(field, number, this.$refs[elementName]);
      this.isComissionNumberValid = message ? false : true;
      return message;
    },
    validateDateRange(startDate, elementName1, endDate, elementName2) {
      const result = Validation.validateDateRange(startDate, this.$refs[elementName1], endDate, this.$refs[elementName2]);
      this.isStartDateValid = result.field1;
      this.isEndDateValid = result.field2;
      return result.message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkStartDate = true;
      this.checkEndDate = true;
      this.checkNumber = true;
      this.checkPosition = true;
      this.checkComissionNumber = true;
      if (this.isNumberValid && this.isStartDateValid && this.isEndDateValid
        && this.isPositionValid && this.isComissionNumberValid) {
        this.isPopup = true;
      }
    },
    updatePopup(isPopup) {
      this.isPopup = isPopup;
      this.$router.go(0);
    }
  }
}
</script>
  
<style>
.add-teacher-certificate h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.add-teacher-certificate h3 {
  margin: 0;
  padding: 10px 0;
}
.add-teacher-certificate h5 {
  margin: 0;
  font-weight: lighter;
}
.add-teacher-certificate select {
  width: 100%;
  margin: 5px 0;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.add-teacher-certificate select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.add-teacher-certificate .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.add-teacher-certificate input:not([type="submit"]) {
  margin-top: 5px;
  padding: 3px;
}
.add-teacher-certificate .person-info input,
.add-teacher-certificate .passport-info input,
.add-teacher-certificate .teacher-certificate input[type="text"] {
  margin-bottom: 15px;
}
.add-teacher-certificate .person-info, 
.add-teacher-certificate .passport-info, 
.add-teacher-certificate .teacher-certificate-date {
  margin-bottom: 15px;
}
.add-teacher-certificate input:not([type="submit"]):focus {
  outline: none;
  padding: 2px;
}
.add-teacher-certificate .teacher-certificate-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.add-teacher-certificate .teacher-certificate-date label {
  font-size: 30px;
}
.add-teacher-certificate .teacher-certificate-date input {
 width: 155px;
}
.add-teacher-certificate .valid {
  border: 1px solid grey;
}
.add-teacher-certificate .valid:focus {
  border: 2px solid #005F97;
}
.add-teacher-certificate .invalid {
  border: 1px solid salmon;
}
.add-teacher-certificate .invalid:focus {
  border: 2px solid red;
}
.add-teacher-certificate form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.add-teacher-certificate .person-info input:not([type="checkbox"]),
.add-teacher-certificate .passport-info input:not([type="checkbox"]),
.add-teacher-certificate .teacher-certificate input[type="text"] {
  width: 100%;
  box-sizing: border-box;
}
.add-teacher-certificate .person-info input[type="checkbox"],
.add-teacher-certificate .passport-info input[type="checkbox"] {
  margin-right: 10px;
}
.add-teacher-certificate input[type="submit"] {
  width: 100%;
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.add-teacher-certificate input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>