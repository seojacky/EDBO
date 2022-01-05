<template>
  <div class="education-documents">
    <h1>Пошук даних особи для редагування</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">  
      <h3>Дані особи</h3>
      <div class="person-info">
        <label>Прізвище*</label>
        <input type="text" class="valid" ref="lastNameInput" v-model="lastName" v-on:focusout="handleFocusoutLastName" />
        <div class="error" v-if="checkLastName && validateInputName('Прізвище', lastName, 'lastNameInput')">
          {{validateInputName('Прізвище', lastName, 'lastNameInput').message}}
        </div>
        <label>Ім'я*</label>
        <input type="text" class="valid" ref="firstNameInput" v-model="firstName" v-on:focusout="handleFocusoutFirstName" />
        <div class="error" v-if="checkFirstName && validateInputName('Ім\'я', firstName, 'firstNameInput')">
          {{validateInputName('Ім\'я', firstName, 'firstNameInput').message}}
        </div>
        <label>По батькові</label>
        <input type="text" class="valid" ref="fatherNameInput" v-model="fatherName" v-on:focusout="handleFocusoutFatherName" />
        <div class="error" v-if="checkFatherName && validateInputName('По батькові', fatherName, 'fatherNameInput')">
          {{validateInputName('По батькові', fatherName, 'fatherNameInput').message}}
        </div>
        <input type="checkbox" v-on:click="handleCheckboxClick" />
        <label>Підтверджую, по батькові відсутнє</label>
        <label>Дата народження*</label>
        <input type="date" class="valid" ref="dateOfBirthInput" v-model="dateOfBirth" v-on:focusout="handleFocusoutDateOfBirth" />
        <div class="error" v-if="checkDateOfBirth && validateInputDateOfBirth('Дата народження', dateOfBirth, 'dateOfBirthInput')">
          {{validateInputDateOfBirth('Дата народження', dateOfBirth, 'dateOfBirthInput').message}}
        </div>
      </div>
      <div class="passport-info">
        <h3>Дані паспорта</h3>
        <label>Серія*</label>
        <input type="text" class="valid" disabled ref="passportSeriesInput" v-model="passportSeries" v-on:focusout="handleFocusoutPassportSeries" />
        <div class="error" v-if="checkPassportSeries && validateInputPassportSeries('Серія', passportSeries, 'passportSeriesInput')">
          {{validateInputPassportSeries('Серія', passportSeries, 'passportSeriesInput').message}}
        </div>
        <input type="checkbox" v-on:click="handlePassportCheckboxClick" />
        <label>Паспорт старого зразка</label>
        <br/>
        <label>Номер*</label>
        <input type="text" class="valid" ref="passportNumberInput" v-model="passportNumber" v-on:focusout="handleFocusoutPassportNumber" />    
        <div class="error" v-if="checkPassportNumber && validateInputPassportNumber('Номер', passportNumber, 'passportNumberInput')">
          {{validateInputPassportNumber('Номер', passportNumber, 'passportNumberInput').message}}
        </div> 
        <label>Орган, що здійснив видачу*</label>
        <input type="text" class="valid" ref="passportOrganizationInput" v-model="passportOrganization" v-on:focusout="handleFocusoutPassportOrganization" />    
        <div class="error" v-if="checkPassportOrganization && validateInputPassportOrganization('Орган, що здійснив видачу', passportOrganization, 'passportOrganizationInput')">
          {{validateInputPassportOrganization('Орган, що здійснив видачу', passportOrganization, 'passportOrganizationInput').message}}
        </div> 
        <label>Дата видачі*</label>
        <input type="date" class="valid" ref="passportDateInput" v-model="passportDate" v-on:focusout="handleFocusoutPassportDate" />    
        <div class="error" v-if="checkPassportDate && validateInputPassportDate('Дата видачі', passportDate, 'passportDateInput')">
          {{validateInputPassportDate('Дата видачі', passportDate, 'passportDateInput').message}}
        </div>  
      </div>
      <h5>* обов'язкові поля</h5>
      <input type="submit" value="Пошук" />
    </form>
    <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було оновлено у Реєстрі документів про освіту." />
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'UpdateSearchPersonInfo',
  data() {
    return {
      checkLastName: false,
      lastName: null,
      isLastNameValid: false,
      checkFirstName: false,
      firstName: null,
      isFirstNameValid: false,
      checkFatherName: false,
      fatherName: null,
      isFatherNameValid: false,
      checkDateOfBirth: null,
      dateOfBirth: null,
      isDateOfBirthValid: false,
      isPassportNumberValid: false,
      isPassportOrganizationValid: false,
      isPassportDateValid: false,
      isPassportSeriesValid: false,
      checkPassportNumber: false,
      checkPassportOrganization: false,
      checkPassportDate: false,
      checkPassportSeries: false,
      passportNumber: null,
      passportOrganization: null,
      passportDate: null,
      passportSeries: null,
      isPopup: false
    }
  },
  components: {
    MessagePopup
  },
  methods: {
    handleFocusoutLastName() {
      this.checkLastName = true;
    },
    handleFocusoutFirstName() {
      this.checkFirstName = true;
    },
    handleFocusoutFatherName() {
      this.checkFatherName = true;
    },
    handleFocusoutPassportSeries() {
      this.checkPassportSeries = true;
    },
    handleFocusoutPassportNumber() {
      this.checkPassportNumber = true;
    },
    handleFocusoutPassportOrganization() {
      this.checkPassportOrganization = true;
    },
    handleFocusoutPassportDate() {
      this.checkPassportDate = true;
    },
    handleFocusoutDateOfBirth() {
      this.checkDateOfBirth = true;
    },
    handlePassportCheckboxClick() {
      if (this.$refs.passportSeriesInput.disabled) {
        this.$refs.passportSeriesInput.disabled = false;
      } else {
        this.passportSeries = null;
        this.checkPassportSeries = false;
        this.$refs.passportSeriesInput.className = 'valid';
        this.$refs.passportSeriesInput.disabled = true;
      }
    },
    handleCheckboxClick() {
      if (!this.$refs.fatherNameInput.disabled) {
        this.fatherName = null;
        this.checkFatherName = false;
        this.$refs.fatherNameInput.className = 'valid';
        this.$refs.fatherNameInput.disabled = true;
      } else {
        this.$refs.fatherNameInput.disabled = false;
      }
    },
    validateInputPassportSeries(field, series, elementName) {
      const message = Validation.validateSeries(field, series, this.$refs[elementName]);
      this.isPassportSeriesValid = message ? false : true;
      return message;
    },
    validateInputPassportNumber(field, number, elementName) {
      const amount = this.$refs.passportSeriesInput.disabled ? 9 : 6;
      const message = Validation.validatePassportNumber(field, number, this.$refs[elementName], amount);
      this.isPassportNumberValid = message ? false : true;
      return message;
    },
    validateInputPassportOrganization(field, number, elementName) {
      const message = Validation.validatePassportOrganization(field, number, this.$refs[elementName]);
      this.isPassportOrganizationValid = message ? false : true;
      return message;
    },
    validateInputPassportDate(field, number, elementName) {
      const message = Validation.validateDate(field, number, this.$refs[elementName]);
      this.isPassportDateValid = message ? false : true;
      return message;
    },
    validateInputName(field, name, elementName) {
      const message = Validation.validateName(field, name, this.$refs[elementName]);
      if (field === 'Прізвище') {
        this.isLastNameValid = message ? false : true; 
      } else if (field === 'Ім\'я') {
        this.isFirstNameValid = message ? false : true; 
      } if (field === 'По батькові') {
        this.isFatherNameValid = message ? false : true; 
      }
      return message;
    },
    validateInputDateOfBirth(field, date, elementName) {
      const message = Validation.validateDate(field, date, this.$refs[elementName]);
      this.isDateOfBirthValid = message ? false : true;
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkLastName = true;
      this.checkFirstName = true;
      this.checkDateOfBirth = true;
      this.checkPassportNumber = true;
      this.checkPassportOrganization = true;
      this.checkPassportDate = true;
      if (!this.$refs.passportSeriesInput.disabled) {
        this.checkPassportSeries = true;
      } else {
        this.isPassportSeriesValid = true;
      }
      if (!this.$refs.fatherNameInput.disabled) {
        this.checkFatherName = true;
      } else {
        this.isFatherNameValid = true;
      }
      if (this.isLastNameValid && this.isFirstNameValid && this.isFatherNameValid 
        && this.isDateOfBirthValid && this.isPassportNumberValid 
        && this.isPassportOrganizationValid && this.isPassportDateValid
        && this.isPassportSeriesValid) {
        this.$router.push({ path: '/update-person-info' });
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
.education-documents h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.education-documents h3 {
  margin: 0;
  padding: 10px 0;
}
.education-documents h5 {
  margin: 0;
  font-weight: lighter;
}
.education-documents select {
  width: 100%;
  margin: 5px 0;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.education-documents select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.education-documents .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.education-documents .error-container {
  height: 30px;
}
.education-documents .error-container .error {
  margin-top: 0px;
}
.education-documents input:not([type="submit"]) {
  margin-top: 5px;
  padding: 3px;
}
.education-documents .person-info input, 
.education-documents .passport-info input, 
.education-documents .document-info input {
  margin-bottom: 15px;
}
.education-documents .person-info,
.education-documents .passport-info {
  margin-bottom: 15px;
}
.education-documents .person-info label:last-of-type {
  display: block;
}
.education-documents input:not([type="submit"]):focus {
  outline: none;
  padding: 2px;
}
.education-documents .valid {
  border: 1px solid grey;
}
.education-documents .valid:focus {
  border: 2px solid #005F97;
}
.education-documents .invalid {
  border: 1px solid salmon;
}
.education-documents .invalid:focus {
  border: 2px solid red;
}
.education-documents form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.education-documents .ticket-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.education-documents .ticket-info input:first-of-type {
  width: 50px;
}
.education-documents .ticket-info input:last-of-type {
  width: 170px;
}
.education-documents .person-info input:not([type="checkbox"]), 
.education-documents .passport-info input:not([type="checkbox"]), 
.education-documents .document-info input {
  width: 100%;
  box-sizing: border-box;
}
.education-documents .person-info input[type="checkbox"],
.education-documents .passport-info input[type="checkbox"] {
  margin-right: 10px;
}
.education-documents input[type="submit"] {
  width: 100%;
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.education-documents input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>