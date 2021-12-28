<template>
  <div class="registration-request">
  <h1>Надсилання запиту на реєстрацію в ЄДЕБО</h1>
    <form method="POST" v-on:submit="handleSubmitForm">
      <div class="left-column">
        <div class="person-info">
          <h3>Дані особи</h3>
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
          <label style="display: inline-block">Дата народження*</label>
          <input type="date" class="valid" ref="dateOfBirthInput" v-model="dateOfBirth" v-on:focusout="handleFocusoutDateOfBirth" />
          <div class="error" v-if="checkDateOfBirth && validateInputDate('Дата народження', dateOfBirth, 'dateOfBirthInput')">
            {{validateInputDate('Дата народження', dateOfBirth, 'dateOfBirthInput').message}}
          </div>
          <label>Місце роботи*</label>
          <select v-model="organization">
            <option>Місце роботи 1</option>
            <option>Місце роботи 2</option>
          </select>
          <label>Посада*</label>
          <input type="text" class="valid" ref="positionInput" v-model="position" v-on:focusout="handleFocusoutPosition" />
          <div class="error" v-if="checkPosition && validateInputPosition('Посада', position, 'positionInput')">
            {{validateInputPosition('Посада', position, 'positionInput').message}}
          </div>
           <label>Електронна пошта**</label>
          <input type="text" class="valid" ref="emailInput" v-model="email" v-on:focusout="handleFocusoutEmail" />
          <div class="error" v-if="checkEmail && validateInputEmail('Пошта', email, 'emailInput')">
            {{validateInputEmail('Пошта', email, 'emailInput').message}}
          </div>
        </div>
      </div>
      <div class="right-column">
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
        <div class="tax-info">
          <h3>Дані облікової картки платника податків</h3>
          <label>Реєстраційний номер*</label>
          <input type="text" class="valid" ref="taxNumberInput" v-model="taxNumber" v-on:focusout="handleFocusoutTaxNumber" />
          <div class="error" v-if="checkTaxNumber && validateInputTaxNumber('Реєстраційний номер', taxNumber, 'taxNumberInput')">
            {{validateInputTaxNumber('Реєстраційний номер', taxNumber, 'taxNumberInput').message}}
          </div> 
          <input type="checkbox" v-on:click="handleTaxCheckboxClick" />
          <label>Підтверджую, реєстраційний номер відсутній</label>
          <h5>* обов'язкові поля</h5>
          <h5>** на пошту будуть надіслані логін і пароль після підтвердження<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Вашого запиту, або повідомлення про відхилення Вашого запиту</h5>
        </div>
      </div>
      <input type="submit" value="Надіслати запит" />
      <input type="button" value="Скасувати" v-on:click="handleCancelClick" />
    </form>
    <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Ваш запит опрацьовується. На вказану Вами пошту буде надіслано логін та пароль після підтвердження Вашого запиту, або повідомлення про відхилення Вашого запиту." />
  </div>
</template>

<script>
import Validation from './../assets/validation.js'
import MessagePopup from './MessagePopup.vue'

export default {
  name: 'RegistrationRequest',
  components: {
    MessagePopup
  },
  data() {
    return {
      lastName: null,
      firstName: null,
      fatherName: null,
      dateOfBirth: null,
      position: null,
      email: null,
      taxNumber: null,
      passportNumber: null,
      passportOrganization: null,
      passportDate: null,
      passportSeries: null,
      checkLastName: false,
      checkFirstName: false,
      checkFatherName: false,
      checkDateOfBirth: false,
      checkPosition: false,
      checkPassportNumber: false,
      checkPassportOrganization: false,
      checkPassportDate: false,
      checkPassportSeries: false,
      checkTaxNumber: false,
      checkEmail: false,
      isLastNameValid: false,
      isFirstNameValid: false,
      isFatherNameValid: false,
      isDateOfBirthValid: false,
      isPositionValid: false,
      isEmailValid: false,
      isTaxNumberValid: null,
      isPassportNumberValid: null,
      isPassportOrganizationValid: null,
      isPassportDateValid: null,
      isPassportSeriesValid: null,
      isPopup: false,
      organization: 'Місце роботи 1',
    }
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
    handleFocusoutDateOfBirth() {
      this.checkDateOfBirth = true;
    },
    handleFocusoutPosition() {
      this.checkPosition = true;
    },
    handleFocusoutEmail() {
      this.checkEmail = true;
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
    handleFocusoutTaxNumber() {
      this.checkTaxNumber = true;
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
    handleTaxCheckboxClick() {
      if (!this.$refs.taxNumberInput.disabled) {
        this.taxNumber = null;
        this.checkTaxNumber = false;
        this.$refs.taxNumberInput.className = 'valid';
        this.$refs.taxNumberInput.disabled = true;
      } else {
        this.$refs.taxNumberInput.disabled = false;
      }
    },
    validateInputName(field, name, elementName) {
      const message = Validation.validateName(field, name, this.$refs[elementName]);
      if (field === 'Прізвище') {
        this.isLastNameValid = message ? false : true; 
      } else if (field === 'Ім\'я') {
        this.isFirstNameValid = message ? false : true; 
      } else if (field === 'По батькові') {
        this.isFatherNameValid = message ? false : true; 
      }
      return message;
    },
    validateInputDate(field, date, elementName) {
      const message = Validation.validateDate(field, date, this.$refs[elementName]);
      this.isDateOfBirthValid = message ? false : true;
      return message;
    },
    validateInputPosition(field, name, elementName) {
      const message = Validation.validateNotEmpty(field, name, this.$refs[elementName]);
      this.isPositionValid = message ? false : true; 
      return message;
    },
    validateInputEmail(field, name, elementName) {
      const message = Validation.validateEmail(field, name, this.$refs[elementName]);
      this.isEmailValid = message ? false : true; 
      return message;
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
    validateInputTaxNumber(field, number, elementName) {
      const message = Validation.validateTaxNumber(field, number, this.$refs[elementName]);
      this.isTaxNumberValid = message ? false : true;
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkLastName = true;
      this.checkFirstName = true;
      this.checkDateOfBirth = true;
      this.checkPosition = true;
      this.checkPassportNumber = true;
      this.checkPassportOrganization = true;
      this.checkPassportDate = true;
      this.checkEmail = true;
      if (!this.$refs.fatherNameInput.disabled) {
        this.checkFatherName = true;
      } else {
        this.isFatherNameValid = true;
      }
      if (!this.$refs.passportSeriesInput.disabled) {
        this.checkPassportSeries = true;
      } else {
        this.isPassportSeriesValid = true;
      }
      if (!this.$refs.taxNumberInput.disabled) {
        this.checkTaxNumber = true;
      } else {
        this.isTaxNumberValid = true;
      }
      if (this.isLastNameValid && this.isFirstNameValid && this.isFatherNameValid 
        && this.isDateOfBirthValid && this.isPositionValid && this.isEmailValid
        && this.isPassportNumberValid && this.isPassportOrganizationValid && this.isPassportDateValid
        && this.isPassportSeriesValid && this.isTaxNumberValid ) {
        this.isPopup = true;
      }
    },
    handleCancelClick() {
      this.$router.push('/login');
    },
    updatePopup(isPopup) {
      this.isPopup = isPopup;
      this.$router.push('/login');
    }
  }
}
</script>

<style>
.registration-request h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.registration-request h3 {
  margin: 0;
  padding: 10px 0;
}
.registration-request h5 {
  margin: 0;
  font-weight: lighter;
  font-size: 11px;
}
.registration-request form {
  width: 730px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 30px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.registration-request .left-column, .registration-request .right-column {
  width: 350px;
}
.registration-request input[type="submit"] {
  width: 350px;
  color: white;
  background-color: #3C8AB8;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.registration-request input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
.registration-request input[type="button"] {
  width: 350px;
  background-color: white;
  color: #3C8AB8;
  border: 5px solid #3C8AB8;
  padding: 5px;
  margin: 10px 0;
  font-size: 20px;
  transition: color 0.5s ease-out 50ms, 
              border 0.5s ease-out 50ms;
}
.registration-request input[type="button"]:hover {
  color: #004C79;
  cursor: pointer;
  border: 5px solid #004C79;
}
.registration-request select {
  width: 100%;
  margin: 5px 0;
  margin-bottom: 15px;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.registration-request select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.registration-request .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.registration-request .valid {
  border: 1px solid grey;
}
.registration-request .valid:focus {
  border: 2px solid #005F97;
}
.registration-request .invalid {
  border: 1px solid salmon;
}
.registration-request .invalid:focus {
  border: 2px solid red;
}
.registration-request input[type="text"], .registration-request input[type="date"] {
  padding: 3px;
  box-sizing: border-box;
}
.registration-request input[type="text"]:focus, .registration-request input[type="date"]:focus {
  outline: none;
  padding: 2px;
}
.registration-request .person-info input:not([type="checkbox"]),
.registration-request .passport-info input:not([type="checkbox"]),
.registration-request .tax-info input:not([type="checkbox"]) {
  width: 100%;
}
.registration-request input[type="checkbox"] {
  margin-right: 10px;
}
.registration-request input {
  margin-bottom: 15px;
  margin-top: 5px;
}
</style>