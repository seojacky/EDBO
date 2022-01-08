<template>
  <div class="student-tickets">
    <div v-if="role === 'registrator'">
      <h1>Пошук даних для редагування у Реєстрі студентських (учнівських) квитків</h1> 
      <form method="GET" v-on:submit="handleSubmitForm">
        <h3>Дані студентського (учнівського) квитка</h3>
        <select v-model="documentType">
          <option>Студентський квиток</option>
          <option>Учнівський квиток</option>
        </select>
        <div class="ticket-info">
          <label>Серія*</label>
          <input type="text" class="valid" ref="seriesInput" v-model="series" v-on:focusout="handleFocusoutSeries" >
          <label>Номер*</label>
          <input type="text" class="valid" ref="numberInput" v-model="number" v-on:focusout="handleFocusoutNumber" >   
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
          <input type="text" class="valid" ref="firstNameInput" v-model="firstName" v-on:focusout="handleFocusoutFirstName" >
          <div class="error" v-if="checkFirstName && validateInputName('Ім\'я', firstName, 'firstNameInput')">
            {{validateInputName('Ім\'я', firstName, 'firstNameInput').message}}
          </div>
          <label>По батькові</label>
          <input type="text" class="valid" ref="fatherNameInput" v-model="fatherName" v-on:focusout="handleFocusoutFatherName" >
          <div class="error" v-if="checkFatherName && validateInputName('По батькові', fatherName, 'fatherNameInput')">
            {{validateInputName('По батькові', fatherName, 'fatherNameInput').message}}
          </div>
          <input type="checkbox" v-on:click="handleCheckboxClick" >
          <label>Підтверджую, по батькові відсутнє</label>
          <h5>* обов'язкові поля</h5>
          <input type="submit" value="Пошук" >
        </div>
      </form>
      <MessagePopup :isPopup="isErrorPopup" :message="error" @popup="updateErrorPopup" />
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
  name: 'StudentTickets',
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
      error: '',
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
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkSeries = true;
      this.checkNumber = true;
      this.checkLastName = true;
      this.checkFirstName = true;
      if (!this.$refs.fatherNameInput.disabled) {
        this.checkFatherName = true;
      } else {
        this.isFatherNameValid = true;
      }
      if (this.isLastNameValid && this.isFirstNameValid && this.isFatherNameValid 
        && this.isSeriesValid && this.isNumberValid) {
        const url = new URL(`${window.location.origin}/api/tickets`);
        const params = {
          name: this.firstName,
          surname: this.lastName,
          patronymic: this.fatherName,
          number: this.number,
          series: this.series,
          type: this.documentType
        };
        url.search = new URLSearchParams(params).toString();
        fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json'}})
         .then(response => {
           if (response.status === 200) {
             return response.json();
           } else {
             throw new Error('За вашим запитом нічого не знайдено.');
           }
         })
         .then(data => {
            const result = {
              student_ticket_id: data.student_ticket_id,
              number: data.number,
              series: data.series,
              status: data.status,
              firstName: data.name,
              lastName: data.surname,
              fatherName: data.patronymic,
              type: data.type,
              startDate: data.start_date,
              endDate: data.end_date,
              institution: data.institution_name
            };
            this.$router.push({ name: 'UpdateStudentTicket', params: { result: result }});
         })
        .then(() => {this.isPopup = true;})
        .catch((error) => {
          this.error = error.message;
          this.isErrorPopup = true;
        });
      }
    },
    updateErrorPopup(isPopup) {
      this.isPopup = isPopup;
    }
  }
}
</script>
  
<style>
.student-tickets h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.student-tickets h3 {
  margin: 0;
  padding: 10px 0;
}
.student-tickets h5 {
  margin: 0;
  font-weight: lighter;
}
.student-tickets select {
  width: 100%;
  margin: 5px 0;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.student-tickets select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.student-tickets .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.student-tickets .error-container {
  height: 30px;
}
.student-tickets .error-container .error {
  margin-top: 0px;
}
.student-tickets input:not([type="submit"]) {
  margin-top: 5px;
  padding: 3px;
}
.student-tickets .person-info input {
  margin-bottom: 15px;
}
.student-tickets .person-info {
  margin-bottom: 15px;
}
.student-tickets input:not([type="submit"]):focus {
  outline: none;
  padding: 2px;
}
.student-tickets .valid {
  border: 1px solid grey;
}
.student-tickets .valid:focus {
  border: 2px solid #005F97;
}
.student-tickets .invalid {
  border: 1px solid salmon;
}
.student-tickets .invalid:focus {
  border: 2px solid red;
}
.student-tickets form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.student-tickets .ticket-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.student-tickets .ticket-info input:first-of-type {
  width: 50px;
}
.student-tickets .ticket-info input:last-of-type {
  width: 170px;
}
.student-tickets .person-info input:not([type="checkbox"]) {
  width: 100%;
  box-sizing: border-box;
}
.student-tickets .person-info input[type="checkbox"] {
  margin-right: 10px;
}
.student-tickets input[type="submit"] {
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.student-tickets input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>