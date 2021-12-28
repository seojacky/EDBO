<template>
  <div class="zno-certificates">
    <h1>Пошук даних для редагування у Реєстрі сертифікатів зовнішнього незалежного оцінювання</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">
      <h3>Дані сертифіката</h3>
      <select v-model="year">
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
        <option>2016</option>
        <option>2015</option>
        <option>2014</option>
        <option>2013</option>
        <option>2012</option>
        <option>2011</option>
        <option>2010</option>
        <option>2009</option>
        <option>2008</option>
      </select>
      <label>Номер*</label>
      <input type="text" class="valid" ref="numberInput" v-model="number" v-on:focusout="handleFocusoutNumber" />   
      <div class="error" v-if="checkNumber && validateInputNumber('Номер', number, 'numberInput')">
        {{validateInputNumber('Номер', number, 'numberInput').message}}
      </div> 
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
      <h5>* обов'язкові поля</h5>
      <input type="submit" value="Пошук" />
    </form>
  </div>
</template>

<script>
import Validation from './../assets/validation.js'

export default {
  name: 'ZnoCertificates',
  data() {
    return {
      year: 2021,
      checkLastName: false,
      lastName: null,
      isLastNameValid: false,
      checkFirstName: false,
      firstName: null,
      isFirstNameValid: false,
      checkFatherName: false,
      fatherName: null,
      isFatherNameValid: false,
      checkNumber: false,
      number: null,
      isNumberValid: false,
      isPopup: false
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
    validateInputNumber(field, number, elementName) {
      const message = Validation.validateNumber(field, number, this.$refs[elementName]);
      this.isNumberValid = message ? false : true;
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkNumber = true;
      this.checkLastName = true;
      this.checkFirstName = true;
      if (!this.$refs.fatherNameInput.disabled) {
        this.checkFatherName = true;
      } else {
        this.isFatherNameValid = true;
      }
      if (this.isLastNameValid && this.isFirstNameValid 
      && this.isFatherNameValid && this.isNumberValid) {
        this.$router.push({path: '/update-zno-certificate'})
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
.zno-certificates h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.zno-certificates h3 {
  margin: 0;
  padding: 10px 0;
}
.zno-certificates h5 {
  margin: 0;
  font-weight: lighter;
}
.zno-certificates select {
  width: 100%;
  margin: 5px 0;
  font-family: serif;
  padding: 3px;
  border: 1px solid grey;
}
.zno-certificates select:focus {
  padding: 2px;
  border: 2px solid #005F97;
  outline: none;
}
.zno-certificates .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.zno-certificates input:not([type="submit"]) {
  margin-top: 5px;
  padding: 3px;
}
.zno-certificates input {
  margin-bottom: 15px;
}
.zno-certificates {
  margin-bottom: 15px;
}
.zno-certificates input:not([type="submit"]):focus {
  outline: none;
  padding: 2px;
}
.zno-certificates .valid {
  border: 1px solid grey;
}
.zno-certificates .valid:focus {
  border: 2px solid #005F97;
}
.zno-certificates .invalid {
  border: 1px solid salmon;
}
.zno-certificates .invalid:focus {
  border: 2px solid red;
}
.zno-certificates form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.zno-certificates input:not([type="checkbox"]) {
  width: 100%;
  box-sizing: border-box;
}
.zno-certificates input[type="checkbox"] {
  margin-right: 10px;
}
.zno-certificates input[type="submit"] {
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.zno-certificates input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>