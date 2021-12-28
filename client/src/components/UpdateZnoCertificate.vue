<template>
  <div class="zno-certificates">
    <h1>Додати дані до Реєстру сертифікатів зовнішнього незалежного оцінювання</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">
      <h3>Дані сертифіката</h3>
      <div class='zno-info'>
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
        <label style="display: inline-block">Дата народження*</label>
        <input type="date" class="valid" ref="dateOfBirthInput" v-model="dateOfBirth" v-on:focusout="handleFocusoutDateOfBirth" />
        <div class="error" v-if="checkDateOfBirth && validateInputDate('Дата народження', dateOfBirth, 'dateOfBirthInput')">
          {{validateInputDate('Дата народження', dateOfBirth, 'dateOfBirthInput').message}}
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
      <h3>Результати</h3>
      <div class="results">
        <div class="subject">
          <h4>Предмет 1</h4>
          <select v-model="subject1"  v-on:change="handleSubjectChange1">
            <option v-for="item in subjects1" v-bind:key="item">{{item}}</option>
          </select>
          <label style="margin-right: 10px">Бал</label>
          <select style="width: 100px" v-model="grade1">
            <option v-for="item in grades" v-bind:key="item">{{item}}</option>
          </select>
        </div>
        <div class="subject">
          <h4>Предмет 2</h4>
          <select v-model="subject2"  v-on:change="handleSubjectChange2">
            <option v-for="item in subjects2" v-bind:key="item">{{item}}</option>
          </select>
          <label style="margin-right: 10px">Бал</label>
          <select style="width: 100px" v-model="grade2">
            <option v-for="item in grades" v-bind:key="item">{{item}}</option>
          </select>
        </div>
        <div class="subject">
          <h4>Предмет 3</h4>
          <select v-model="subject3" v-on:change="handleSubjectChange3">
            <option v-for="item in subjects3" v-bind:key="item">{{item}}</option>
          </select>
          <label style="margin-right: 10px">Бал</label>
          <select style="width: 100px" v-model="grade3">
            <option v-for="item in grades" v-bind:key="item">{{item}}</option>
          </select>
        </div>
        <div class="subject">
          <h4>Предмет 4</h4>
          <select v-model="subject4" v-on:change="handleSubjectChange4">
            <option v-for="item in subjects4" v-bind:key="item">{{item}}</option>
          </select>
          <label style="margin-right: 10px">Бал</label>
          <select style="width: 100px" v-model="grade4">
            <option v-for="item in grades" v-bind:key="item">{{item}}</option>
          </select>
        </div>
        <div class="subject">
          <h4>Предмет 5</h4>
          <select v-model="subject5" v-on:change="handleSubjectChange5">
            <option v-for="item in subjects5" v-bind:key="item">{{item}}</option>
          </select>
          <label style="margin-right: 10px">Бал</label>
          <select style="width: 100px" v-model="grade5">
            <option v-for="item in grades" v-bind:key="item">{{item}}</option>
          </select>
        </div>
        <br/>
        <div class="error" v-if="results === 0">
          Потрібно додати не менше одного предмета
        </div>
      </div>
      <h5>* обов'язкові поля</h5>
      <input type="submit" value="Редагувати" />
    </form>
    <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було оновлено у Реєстрі сертифікатів Зовнішнього незалежного оцінювання." />
  </div>
</template>

<script>
import Validation from './../assets/validation.js'
import MessagePopup from './MessagePopup.vue'

export default {
  name: 'TeacherCertificates',
  data() {
    return {
      year: 2021,
      checkLastName: false,
      lastName: 'Прізвише',
      isLastNameValid: true,
      checkFirstName: false,
      firstName: 'Ім\'я',
      isFirstNameValid: false,
      checkFatherName: false,
      fatherName: 'По-Батькові',
      isFatherNameValid: true,
      checkNumber: false,
      number: '12345678',
      isNumberValid: true,
      isPassportNumberValid: true,
      isPassportOrganizationValid: true,
      isPassportDateValid: true,
      isPassportSeriesValid: false,
      checkPassportNumber: false,
      checkPassportOrganization: false,
      checkPassportDate: false,
      checkPassportSeries: false,
      passportNumber: '123456789',
      passportOrganization: '1234',
      passportDate: '2021-10-10',
      passportSeries: null,
      checkDateOfBirth: false,
      isDateOfBirthValid: true,
      dateOfBirth: '2002-05-05',
      isPopup: false,
      results: 1,
      subject11: 'Географія',
      subject21: 'Не вибрано',
      subject31: 'Не вибрано',
      subject41: 'Не вибрано',
      subject51: 'Не вибрано',
      subject1: 'Географія',
      subject2: 'Не вибрано',
      subject3: 'Не вибрано',
      subject4: 'Не вибрано',
      subject5: 'Не вибрано',
      grade1: '185',
      grade2: 'Не склав',
      grade3: 'Не склав',
      grade4: 'Не склав',
      grade5: 'Не склав',
      subjects1: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Англійська мова',
        'Фізика',
        'Географія'
      ],
      subjects2: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Англійська мова',
        'Фізика',
      ],
      subjects3: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Англійська мова',
        'Фізика',
      ],
      subjects4: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Англійська мова',
        'Фізика',
      ],
      subjects5: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Англійська мова',
        'Фізика',
      ],
      grades: [ 'Не склав' ]
    }
  },
  mounted() {
    for(let i = 100; i <= 200; i++) {
      this.grades.push(i.toString())
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
    handleFocusoutNumber() {
      this.checkNumber = true;
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
    handleSubjectChange1() {
      if (this.subject1 !== 'Не вибрано' && this.subject11 === 'Не вибрано') {
        const index2 = this.subjects2.indexOf(this.subject1);
        this.subjects2.splice(index2, 1);
        const index3 = this.subjects3.indexOf(this.subject1);
        this.subjects3.splice(index3, 1);
        const index4 = this.subjects4.indexOf(this.subject1);
        this.subjects4.splice(index4, 1);
        const index5 = this.subjects5.indexOf(this.subject1);
        this.subjects5.splice(index5, 1);
        this.subject11 = this.subject1;
        this.results += 1;
      } else if (this.subject1 === 'Не вибрано' && this.subject11 !== 'Не вибрано') {
        this.subjects2.push(this.subject11);
        this.subjects3.push(this.subject11);
        this.subjects4.push(this.subject11);
        this.subjects5.push(this.subject11);
        this.subject11 = this.subject1;
        this.results -= 1;
      } else if (this.subject1 !== 'Не вибрано' && this.subject11 !== 'Не вибрано') {
        const index2 = this.subjects2.indexOf(this.subject1);
        this.subjects2.splice(index2, 1);
        this.subjects2.push(this.subject11);
        const index3 = this.subjects3.indexOf(this.subject1);
        this.subjects3.splice(index3, 1);
        this.subjects3.push(this.subject11);
        const index4 = this.subjects4.indexOf(this.subject1);
        this.subjects4.splice(index4, 1);
        this.subjects4.push(this.subject11);
        const index5 = this.subjects5.indexOf(this.subject1);
        this.subjects5.splice(index5, 1);
        this.subjects5.push(this.subject11);
        this.subject11 = this.subject1;
      }
    },
    handleSubjectChange2() {
      if (this.subject2 !== 'Не вибрано' && this.subject21 === 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject2);
        this.subjects1.splice(index1, 1);
        const index3 = this.subjects3.indexOf(this.subject2);
        this.subjects3.splice(index3, 1);
        const index4 = this.subjects4.indexOf(this.subject2);
        this.subjects4.splice(index4, 1);
        const index5 = this.subjects5.indexOf(this.subject2);
        this.subjects5.splice(index5, 1);
        this.subject21 = this.subject2;
        this.results += 1;
      } else if (this.subject2 === 'Не вибрано' && this.subject21 !== 'Не вибрано') {
        this.subjects1.push(this.subject21);
        this.subjects3.push(this.subject21);
        this.subjects4.push(this.subject21);
        this.subjects5.push(this.subject21);
        this.subject21 = this.subject2;
        this.results -= 1;
      } else if (this.subject2 !== 'Не вибрано' && this.subject21 !== 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject2);
        this.subjects1.splice(index1, 1);
        this.subjects1.push(this.subject21);
        const index3 = this.subjects3.indexOf(this.subject2);
        this.subjects3.splice(index3, 1);
        this.subjects3.push(this.subject21);
        const index4 = this.subjects4.indexOf(this.subject2);
        this.subjects4.splice(index4, 1);
        this.subjects2.push(this.subject21);
        const index5 = this.subjects5.indexOf(this.subject2);
        this.subjects5.splice(index5, 1);
        this.subjects5.push(this.subject21);
        this.subject21 = this.subject2;
      }
    },
    handleSubjectChange3() {
      if (this.subject3 !== 'Не вибрано' && this.subject31 === 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject3);
        this.subjects1.splice(index1, 1);
        const index2 = this.subjects2.indexOf(this.subject3);
        this.subjects2.splice(index2, 1);
        const index4 = this.subjects4.indexOf(this.subject3);
        this.subjects4.splice(index4, 1);
        const index5 = this.subjects5.indexOf(this.subject3);
        this.subjects5.splice(index5, 1);
        this.subject31 = this.subject3;
        this.results += 1;
      } else if (this.subject3 === 'Не вибрано' && this.subject31 !== 'Не вибрано') {
        this.subjects1.push(this.subject31);
        this.subjects2.push(this.subject31);
        this.subjects4.push(this.subject31);
        this.subjects5.push(this.subject31);
        this.subject31 = this.subject3;
        this.results -= 1;
      } else if (this.subject3 !== 'Не вибрано' && this.subject31 !== 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject3);
        this.subjects1.splice(index1, 1);
        this.subjects1.push(this.subject31);
        const index2 = this.subjects2.indexOf(this.subject3);
        this.subjects2.splice(index2, 1);
        this.subjects2.push(this.subject31);
        const index4 = this.subjects4.indexOf(this.subject3);
        this.subjects4.splice(index4, 1);
        this.subjects4.push(this.subject31);
        const index5 = this.subjects5.indexOf(this.subject3);
        this.subjects5.splice(index5, 1);
        this.subjects5.push(this.subject31);
        this.subject31 = this.subject3;
      }
    },
    handleSubjectChange4() {
      if (this.subject4 !== 'Не вибрано' && this.subject41 === 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject4);
        this.subjects1.splice(index1, 1);
        const index2 = this.subjects2.indexOf(this.subject4);
        this.subjects2.splice(index2, 1);
        const index3 = this.subjects3.indexOf(this.subject4);
        this.subjects3.splice(index3, 1);
        const index5 = this.subjects5.indexOf(this.subject4);
        this.subjects5.splice(index5, 1);
        this.subject41 = this.subject4;
        this.results += 1;
      } else if (this.subject4 === 'Не вибрано' && this.subject41 !== 'Не вибрано') {
        this.subjects1.push(this.subject41);
        this.subjects2.push(this.subject41);
        this.subjects3.push(this.subject41);
        this.subjects5.push(this.subject41);
        this.subject41 = this.subject4;
        this.results -= 1;
      } else if (this.subject4 !== 'Не вибрано' && this.subject41 !== 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject4);
        this.subjects1.splice(index1, 1);
        this.subjects1.push(this.subject41);
        const index2 = this.subjects2.indexOf(this.subject4);
        this.subjects2.splice(index2, 1);
        this.subjects2.push(this.subject41);
        const index3 = this.subjects3.indexOf(this.subject4);
        this.subjects3.splice(index3, 1);
        this.subjects3.push(this.subject41);
        const index5 = this.subjects5.indexOf(this.subject4);
        this.subjects5.splice(index5, 1);
        this.subjects5.push(this.subject41);
        this.subject41 = this.subject4;
      }
    },
    handleSubjectChange5() {
      if (this.subject5 !== 'Не вибрано' && this.subject51 === 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject5);
        this.subjects1.splice(index1, 1);
        const index2 = this.subjects2.indexOf(this.subject5);
        this.subjects2.splice(index2, 1);
        const index3 = this.subjects3.indexOf(this.subject5);
        this.subjects3.splice(index3, 1);
        const index4 = this.subjects4.indexOf(this.subject5);
        this.subjects4.splice(index4, 1);
        this.subject51 = this.subject5;
        this.results += 1;
      } else if (this.subject5 === 'Не вибрано' && this.subject51 !== 'Не вибрано') {
        this.subjects1.push(this.subject51);
        this.subjects2.push(this.subject51);
        this.subjects3.push(this.subject51);
        this.subjects4.push(this.subject51);
        this.subject51 = this.subject5;
        this.results -= 1;
      } else if (this.subject5 !== 'Не вибрано' && this.subject51 !== 'Не вибрано') {
        const index1 = this.subjects1.indexOf(this.subject5);
        this.subjects1.splice(index1, 1);
        this.subjects1.push(this.subject51);
        const index2 = this.subjects2.indexOf(this.subject5);
        this.subjects2.splice(index2, 1);
        this.subjects2.push(this.subject51);
        const index3 = this.subjects3.indexOf(this.subject5);
        this.subjects3.splice(index3, 1);
        this.subjects3.push(this.subject51);
        const index4 = this.subjects4.indexOf(this.subject5);
        this.subjects4.splice(index4, 1);
        this.subjects4.push(this.subject51);
        this.subject51 = this.subject5;
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
    validateInputDate(field, date, elementName) {
      const message = Validation.validateDate(field, date, this.$refs[elementName]);
      this.isDateOfBirthValid = message ? false : true;
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
      if (this.isLastNameValid && this.isFirstNameValid 
      && this.isFatherNameValid && this.isNumberValid && this.results > 0
      && this.isPassportNumberValid && this.isPassportOrganizationValid && this.isPassportDateValid
      && this.isPassportSeriesValid && this.isDateOfBirthValid) {
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
.zno-certificates h1 {
  width: 100%;
  text-align: center;
  color: #004C79;
  margin: 0;
  padding: 10px;
}
.zno-certificates h3, .zno-certificates h4 {
  margin: 0;
  padding: 10px 0;
}
.zno-certificates h5 {
  margin: 0;
  font-weight: lighter;
}
.zno-certificates .zno-info select {
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
.zno-certificates .zno-info input {
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
.zno-certificates .zno-info input:not([type="checkbox"]) {
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