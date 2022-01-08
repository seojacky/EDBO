<template>
  <div class="add-student-ticket">
    <div v-if="role === 'registrator'">
      <h1>Додати дані до Реєстру студентських (учнівських) квитків</h1>
      <form method="POST" v-on:submit="handleSubmitForm">
        <h3>Дані студентського (учнівського) квитка</h3>
        <div class="ticket-info-1">
          <select v-model="documentType">
            <option>Студентський квиток</option>
            <option>Учнівський квиток</option>
          </select>
          <div style="height: 5px"></div>
          <label>Повна назва закладу освіти</label>
          <input type="text" class="valid" ref="educationSubjectInput" v-model="educationSubject" v-on:focusout="handleFocusoutEducationSubject" />
          <div class="error" v-if="checkEducationSubject && validateInputEducationSybject('Заклад освіти', educationSubject, 'educationSubjectInput')">
            {{validateInputEducationSybject('Заклад освіти', educationSubject, 'educationSubjectInput').message}}
          </div>
          <label>Термін дії</label>
          <div class="student-ticket-date">
            <input type="date" class="valid" ref="startDateInput" v-model="startDate" v-on:focusout="handleFocusoutStartDate" />
            <label> - </label>
            <input type="date" class="valid" ref="endDateInput" v-model="endDate" v-on:focusout="handleFocusoutEndDate" />
          </div>
          <div class="error" v-if="(checkStartDate && checkEndDate) && validateDateRange(startDate, 'startDateInput', endDate, 'endDateInput')">
            {{validateDateRange(startDate, 'startDateInput', endDate, 'endDateInput')}}
          </div>
        </div>
        <div class="ticket-info">
          <label>Серія*</label>
          <input type="text" class="valid" ref="seriesInput" v-model="series" v-on:focusout="handleFocusoutSeries" />
          <label>Номер*</label>
          <input type="text" class="valid" ref="numberInput" v-model="number" v-on:focusout="handleFocusoutNumber" />   
        </div>
        <div class="error-container">
          <div class="error" v-if="checkSeries && validateInputSeries('Серія', series, 'seriesInput')">
            {{validateInputSeries('Серія', series, 'seriesInput').message}}
          </div>
          <div class="error" v-if="checkNumber && validateInputNumber('Номер', number, 'numberInput')">
            {{validateInputNumber('Номер', number, 'numberInput').message}}
          </div>  
        </div>       
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
        </div>
        <h5>* обов'язкові поля</h5>
        <input type="submit" value="Додати до реєстру" />
      </form>
      <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було додано до Реєстру студентських (учнівських) квитків." />
      <MessagePopup :isPopup="isErrorPopup" @popup="updateErrorPopup" :message="error" />
    </div>
    <div v-else>
      <h2>403 Forbidden</h2>
    </div>
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'AddStudentTicket',
  components: {
    MessagePopup
  },
  data() {
    return {
      documentType: 'Студентський квиток',
      checkLastName: false,
      lastName: null,
      isLastNameValid: false,
      checkFirstName: false,
      firstName: null,
      isFirstNameValid: false,
      checkFatherName: false,
      fatherName: null,
      isFatherNameValid: false,
      checkSeries: false,
      series: null,
      isSeriesValid: false,
      checkNumber: false,
      number: null,
      isNumberValid: false,
      checkEducationSubject: false,
      educationSubject: null,
      isEducationSubjectValid: false,
      checkStartDate: false,
      startDate: null,
      isStartDateValid: false,
      checkEndDate: false,
      endDate: null,
      isEndDateValid: false,
      isPassportNumberValid: null,
      isPassportSeriesValid: null,
      checkPassportNumber: false,
      checkPassportSeries: false,
      passportNumber: null,
      passportSeries: null,
      isActive: true,
      isPopup: false,
      isErrorPopup: false,
      role: null
    }
  },
  mounted() {
    this.role = localStorage.getItem('role');
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
    handleFocusoutSeries() {
      this.checkSeries = true;
    },
    handleFocusoutNumber() {
      this.checkNumber = true;
    },
    handleFocusoutEducationSubject() {
      this.checkEducationSubject = true;
    },
    handleFocusoutStartDate() {
      this.checkStartDate = true;
    },
    handleFocusoutEndDate() {
      this.checkEndDate = true;
    },
    handleFocusoutPassportSeries() {
      this.checkPassportSeries = true;
    },
    handleFocusoutPassportNumber() {
      this.checkPassportNumber = true;
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
    validateInputSeries(field, series, elementName) {
      const message = Validation.validateSeries(field, series, this.$refs[elementName]);
      this.isSeriesValid = message ? false : true;
      return message;
    },
    validateInputNumber(field, number, elementName) {
      const message = Validation.validateNumber(field, number, this.$refs[elementName]);
      this.isNumberValid = message ? false : true;
      return message;
    },
    validateInputEducationSybject(field, educationSubject, elementName) {
      const message = Validation.validateNotEmpty(field, educationSubject, this.$refs[elementName]);
      this.isEducationSubjectValid = message ? false : true;
      return message;
    },
    validateDateRange(startDate, elementName1, endDate, elementName2) {
      const result = Validation.validateDateRange(startDate, this.$refs[elementName1], endDate, this.$refs[elementName2]);
      this.isStartDateValid = result.field1;
      this.isEndDateValid = result.field2;
      return result.message;
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
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkEducationSubject = true;
      this.checkStartDate = true;
      this.checkEndDate = true;
      this.checkSeries = true;
      this.checkNumber = true;
      this.checkLastName = true;
      this.checkFirstName = true;
      this.checkPassportNumber = true;
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
        && this.isSeriesValid && this.isNumberValid && this.isEducationSubjectValid
        && this.isStartDateValid && this.isEndDateValid
        && this.isPassportNumberValid && this.isPassportSeriesValid ) {
        const url = new URL(`${window.location.origin}/api/tickets/create`);
        const body = {
          name: this.firstName,
          surname: this.lastName,
          patronymic: this.fatherName,
          number: this.number,
          series: this.series,
          type: this.documentType,
          institution_name: this.educationSubject, 
          start_date: this.startDate, 
          end_date: this.endDate, 
          p_series: this.passportSeries ? this.passportSeries : '', 
          p_number: this.passportNumber
        };
        console.log(body)
        fetch(url, {method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            throw new Error(data.error);
          } else {
            this.isPopup = true;
          }
        })
        .catch((error) => {
          this.error = error.message;
          console.log(error.message)
          this.isErrorPopup = true;
        });
      }
    },
    updatePopup(isPopup) {
      this.isPopup = isPopup;
      this.$router.go(0);
    },
    updateErrorPopup(isErrorPopup) {
      this.isErrorPopup = isErrorPopup;
    }
  }
}
</script>
  
<style>
.add-student-ticket h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.add-student-ticket h3 {
  margin: 0;
  padding: 10px 0;
}
.add-student-ticket h5 {
  margin: 0;
  font-weight: lighter;
}
.add-student-ticket select {
  width: 100%;
  margin: 5px 0;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.add-student-ticket select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.add-student-ticket .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.add-student-ticket .error-container {
  height: 30px;
}
.add-student-ticket .error-container .error {
  margin-top: 0px;
}
.add-student-ticket input:not([type="submit"]) {
  margin-top: 5px;
  padding: 3px;
}
.add-student-ticket .person-info input,
.add-student-ticket .passport-info input,
.add-student-ticket .ticket-info-1 input[type="text"] {
  margin-bottom: 15px;
}
.add-student-ticket .person-info, 
.add-student-ticket .passport-info, 
.add-student-ticket .student-ticket-date {
  margin-bottom: 15px;
}
.add-student-ticket input:not([type="submit"]):focus {
  outline: none;
  padding: 2px;
}
.add-student-ticket .student-ticket-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.add-student-ticket .student-ticket-date label {
  font-size: 30px;
}
.add-student-ticket .student-ticket-date input {
 width: 155px;
}
.add-student-ticket .valid {
  border: 1px solid grey;
}
.add-student-ticket .valid:focus {
  border: 2px solid #005F97;
}
.add-student-ticket .invalid {
  border: 1px solid salmon;
}
.add-student-ticket .invalid:focus {
  border: 2px solid red;
}
.add-student-ticket form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.add-student-ticket .ticket-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.add-student-ticket .ticket-info input:first-of-type {
  width: 50px;
}
.add-student-ticket .ticket-info input:last-of-type {
  width: 170px;
}
.add-student-ticket .person-info input:not([type="checkbox"]),
.add-student-ticket .passport-info input:not([type="checkbox"]),
.add-student-ticket .ticket-info-1 input[type="text"] {
  width: 100%;
  box-sizing: border-box;
}
.add-student-ticket .person-info input[type="checkbox"], 
.add-student-ticket .passport-info input[type="checkbox"] {
  margin-right: 10px;
}
.add-student-ticket input[type="submit"] {
  width: 100%;
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.add-student-ticket input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>