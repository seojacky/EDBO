<template>
  <div class="add-educational-activity-subject">
    <h1>Додати дані до Реєстру суб'єктів освітньої діяльності</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">
      <h3>Дані закладу освіти</h3>
      <div class="educational-info">
        <label>Код закладу в ЄДЕБО*</label>
        <input type="number" min="1" max="50000" class="valid name" ref="educationSubjectNumberInput" v-model="educationSubjectNumber" v-on:focusout="handleFocusoutEducationSubjectNumber" />
        <div class="error error-name" v-if="checkEducationSubjectNumber && validateInputEducationSybject('Код закладу', educationSubjectNumber, 'educationSubjectNumberInput')">
          {{validateInputEducationSybject('Код закладу', educationSubjectNumber, 'educationSubjectNumberInput').message}}
        </div>
        <label>Повна назва закладу освіти*</label>
        <input type="text" class="valid name" ref="educationSubjectInput" v-model="educationSubject" v-on:focusout="handleFocusoutEducationSubject" />
        <div class="error error-name" v-if="checkEducationSubject && validateInputEducationSybject('Заклад освіти', educationSubject, 'educationSubjectInput')">
          {{validateInputEducationSybject('Заклад освіти', educationSubject, 'educationSubjectInput').message}}
        </div>
        <label>Коротка назва закладу освіти*</label>
        <input type="text" class="valid name" ref="shortEducationSubjectInput" v-model="shortEducationSubject" v-on:focusout="handleFocusoutShortEducationSubject" />
        <div class="error error-name" v-if="checkShortEducationSubject && validateInputEducationSybject('Заклад освіти', shortEducationSubject, 'shortEducationSubjectInput')">
          {{validateInputEducationSybject('Заклад освіти', shortEducationSubject, 'shortEducationSubjectInput').message}}
        </div>
        <label>Реєстраційний номер облікової картки платника податків*</label>
        <input type="text" class="valid" ref="taxNumberInput" v-model="taxNumber" v-on:focusout="handleFocusoutTaxNumber" />
        <div class="error" v-if="checkTaxNumber && validateInputTaxNumber('Реєстраційний номер', taxNumber, 'taxNumberInput')">
          {{validateInputTaxNumber('Реєстраційний номер', taxNumber, 'taxNumberInput').message}}
        </div>
        <label>Тип закладу освіти*</label>
        <input type="text" class="valid name" ref="educationTypeInput" v-model="educationType" v-on:focusout="handleFocusoutEducationType" />
        <div class="error error-name" v-if="checkEducationType && validateInputEducationType('Заклад освіти', educationType, 'educationTypeInput')">
          {{validateInputEducationType('Заклад освіти', educationType, 'educationTypeInput').message}}
        </div>
        <label>Форма власності*</label>
        <input type="text" class="valid name" ref="ownerInput" v-model="owner" v-on:focusout="handleFocusoutOwner" />
        <div class="error error-name" v-if="checkOwner && validateInputManagement('Форма власності', owner, 'ownerInput')">
          {{validateInputManagement('Форма власності', owner, 'ownerInput').message}}
        </div>
        <label>Найменування органу, до сфери управління якого належить заклад освіти*</label>
        <input type="text" class="valid name" ref="managementInput" v-model="management" v-on:focusout="handleFocusoutManagement" />
        <div class="error error-name" v-if="checkManagement && validateInputOwner('Найменування', management, 'managementInput')">
          {{validateInputOwner('Найменування', management, 'managementInput').message}}
        </div>
        <label>Адреса*</label>
        <input type="text" class="valid name" ref="addressInput" v-model="address" v-on:focusout="handleFocusoutAddress" />
        <div class="error error-name" v-if="checkAddress && validateInputAddress('Адреса', address, 'addressInput')">
          {{validateInputAddress('Адреса', address, 'addressInput').message}}
        </div>
        <label>Телефон / факс*</label>
        <input type="text" class="valid name" ref="phoneInput" v-model="phone" v-on:focusout="handleFocusoutPhone" />
        <div class="error error-name" v-if="checkPhone && validateInputPhone('Телефон', phone, 'phoneInput')">
          {{validateInputPhone('Телефон', phone, 'phoneInput').message}}
        </div>
        <label>Електронна пошта*</label>
        <input type="text" class="valid name" ref="emailInput" v-model="email" v-on:focusout="handleFocusoutEmail" />
        <div class="error error-name" v-if="checkEmail && validateInputEmail('Пошта', email, 'emailInput')">
          {{validateInputEmail('Пошта', email, 'emailInput').message}}
        </div>
        <label>Сайт*</label>
        <input type="text" class="valid name" ref="siteInput" v-model="site" v-on:focusout="handleFocusoutSite" />
        <div class="error error-name" v-if="checkSite && validateInputSite('Сайт', site, 'siteInput')">
          {{validateInputSite('Сайт', site, 'siteInput').message}}
        </div>
        <label>Рік заснування*</label>
        <input type="number" min="1400" max="2021" class="valid name" ref="yearInput" v-model="year" v-on:focusout="handleFocusoutYear" />
        <div class="error error-name" v-if="checkYear && validateInputYear('Рік заснування', year, 'yearInput')">
          {{validateInputYear('Рік заснування', year, 'yearInput').message}}
        </div>
      </div>
      




      <h3>Дані керівника закладу освіти</h3>
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
        <h3>Дані паспорта керівника закладу освіти</h3>
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
      <input type="submit" value="Додати до реєстру" />
    </form>
    <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було додано до Реєстру cуб'єктів освітньої діяльності." />
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'AddEducationalActivitySubject',
  components: {
    MessagePopup
  },
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
      isDateOfBirthValid: null,
      isPassportNumberValid: null,
      isPassportOrganizationValid: null,
      isPassportDateValid: null,
      isPassportSeriesValid: null,
      checkPassportNumber: false,
      checkPassportOrganization: false,
      checkPassportDate: false,
      checkPassportSeries: false,
      passportNumber: null,
      passportOrganization: null,
      passportDate: null,
      passportSeries: null,
      educationSubjectNumber: null,
      educationSubject: null,
      shortEducationSubject: null,
      checkEducationSubjectNumber: false,
      checkEducationSubject: false,
      checkShortEducationSubject: false,
      isEducationSubjectNumberValid: false,
      isEducationSubjectValid: false,
      isShortEducationSubjectValid: false,
      isTaxNumberValid: false,
      taxNumber: null,
      checkTaxNumber: false,
      isEmailValid: false,
      email: null,
      checkEmail: false,
      educationType: null,
      owner: null,
      management: null,
      address: null,
      phone: null,
      site: null,
      year: null,
      checkEducationType: null,
      checkOwner: null,
      checkManagement: null,
      checkAddress: null,
      checkPhone: null,
      checkSite: null,
      checkYear: null,
      isEducationTypeValid: null,
      isOwnerValid: null,
      isManagementValid: null,
      isAddressValid: null,
      isPhoneValid: null,
      isSiteValid: null,
      isYearValid: null,
      isPopup: false
    }
  },
  methods: {
     handleFocusoutEmail() {
      this.checkEmail = true;
    },
    handleFocusoutTaxNumber() {
      this.checkTaxNumber = true;
    },
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
    handleFocusoutEducationSubjectNumber() {
      this.checkEducationSubjectNumber = true;
    },
    handleFocusoutEducationSubject() {
      this.checkEducationSubject = true;
    },
    handleFocusoutShortEducationSubject() {
      this.checkShortEducationSubject = true;
    },
    handleFocusoutEducationType() {
      this.checkEducationType = true;
    },
    handleFocusoutOwner() {
      this.checkOwner = true;
    },
    handleFocusoutManagement () {
      this.checkManagement = true;
    },
    handleFocusoutAddress () {
      this.checkAddress = true;
    },
    handleFocusoutPhone () {
      this.checkPhone = true;
    },
    handleFocusoutSite () {
      this.checkSite = true;
    },
    handleFocusoutYear() {
      this.checkYear = true;
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
    validateInputEducationSybject(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isEducationSubjectValid = message ? false : true;
      return message;
    },
    validateInputEducationSybjectNumber(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isEducationSubjectNumberValid = message ? false : true;
      return message;
    },
    validateInputShortEducationSybject(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isShortEducationSubjectValid = message ? false : true;
      return message;
    },
    validateInputEducationType(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isEducationTypeValid = message ? false : true;
      return message;
    },
    validateInputOwner(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isOwnerValid = message ? false : true;
      return message;
    },
    validateInputManagement(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isManagementValid = message ? false : true;
      return message;
    },
    validateInputSite(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isSiteValid = message ? false : true;
      return message;
    },
    validateInputPhone(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isPhoneValid = message ? false : true;
      return message;
    },
    validateInputYear(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isYearValid = message ? false : true;
      return message;
    },
    validateInputAddress(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isAddressValid = message ? false : true;
      return message;
    },




    validateInputTaxNumber(field, number, elementName) {
      const message = Validation.validateTaxNumber(field, number, this.$refs[elementName]);
      this.isTaxNumberValid = message ? false : true;
      return message;
    },
    validateInputEmail(field, name, elementName) {
      const message = Validation.validateEmail(field, name, this.$refs[elementName]);
      this.isEmailValid = message ? false : true; 
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkSeries = true;
      this.checkNumber = true;
      this.checkLastName = true;
      this.checkFirstName = true;
      this.checkEducationSubject = true;
      this.checkDate = true;
      this.checkDateOfBirth = true;
      this.checkPassportNumber = true;
      this.checkPassportOrganization = true;
      this.checkPassportDate = true;
      this.checkEducationType = true;
      this.checkOwner = true;
      this.checkManagement = true
      this.checkAddress = true
      this.checkPhone = true
      this.checkSite = true
      this.checkYear = true
      this.checkEducationSubjectNumber = true
      this.checkEducationSubject = true
      this.checkShortEducationSubject = true
      this.checkTaxNumber = true
      this.checkEmail = true
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
        && this.isDateOfBirthValid && this.isPassportNumberValid && this.isPassportOrganizationValid 
        && this.isPassportDateValid && this.isPassportSeriesValid && this.isEducationTypeValid
        && this.isOwnerValid && this.isYearValid && this.isSiteValid && this.isPhoneValid 
        && this.isEducationSubjectNumberValid && this.isEducationSubjectValid && this.isShortEducationSubjectValid) {
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
.add-educational-activity-subject h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.add-educational-activity-subject h3 {
  margin: 0;
  padding: 10px 0;
}
.add-educational-activity-subject h5 {
  margin: 0;
  font-weight: lighter;
}
.add-educational-activity-subject select {
  width: 100%;
  margin: 5px 0;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.add-educational-activity-subject select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.add-educational-activity-subject .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.add-educational-activity-subject .error-container {
  height: 30px;
}
.add-educational-activity-subject .error-container .error {
  margin-top: 0px;
}
.add-educational-activity-subject input:not([type="submit"]) {
  margin-top: 5px;
  padding: 3px;
}
.add-educational-activity-subject .person-info input, 
.add-educational-activity-subject .educational-info input, 
.add-educational-activity-subject .passport-info input, 
.add-educational-activity-subject .document-info input {
  margin-bottom: 15px;
}
.add-educational-activity-subject .person-info,
.add-educational-activity-subject .educational-info,
.add-educational-activity-subject .passport-info {
  margin-bottom: 15px;
}
.add-educational-activity-subject .person-info label:last-of-type {
  display: block;
}
.add-educational-activity-subject input:not([type="submit"]):focus {
  outline: none;
  padding: 2px;
}
.add-educational-activity-subject .valid {
  border: 1px solid grey;
}
.add-educational-activity-subject .valid:focus {
  border: 2px solid #005F97;
}
.add-educational-activity-subject .invalid {
  border: 1px solid salmon;
}
.add-educational-activity-subject .invalid:focus {
  border: 2px solid red;
}
.add-educational-activity-subject form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.add-educational-activity-subject .ticket-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.add-educational-activity-subject .ticket-info input:first-of-type {
  width: 50px;
}
.add-educational-activity-subject .ticket-info input:last-of-type {
  width: 170px;
}
.add-educational-activity-subject .person-info input:not([type="checkbox"]), 
.add-educational-activity-subject .passport-info input:not([type="checkbox"]), 
.add-educational-activity-subject .educational-info input:not([type="checkbox"]), 
.add-educational-activity-subject .document-info input {
  width: 100%;
  box-sizing: border-box;
}
.add-educational-activity-subject .person-info input[type="checkbox"],
.add-educational-activity-subject .educational-info input[type="checkbox"],
.add-educational-activity-subject .passport-info input[type="checkbox"] {
  margin-right: 10px;
}
.add-educational-activity-subject input[type="submit"] {
  width: 100%;
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.add-educational-activity-subject input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>