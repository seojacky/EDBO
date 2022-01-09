<template>
  <div class="add-teacher-certificate">
    <div v-if="role === 'registrator'">
      <h1>Додати дані до Реєстру сертифікатів педагогічних працівників</h1>
      <form method="POST" v-on:submit="handleSubmitForm">
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
      <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було додано до Реєстру сертифікатів педагогічних працівників." />
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
  name: 'AddTeacherCertificate',
  components: {
    MessagePopup
  },
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
      checkPosition: false,
      position: null,
      isPositionValid: false,
      checkComissionNumber: false,
      comissionNumber: null,
      isComissionNumberValid: false,
      isActive: true,
      error: '',
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
    handleFocusoutNumber() {
      this.checkNumber = true;
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
    handleFocusoutPosition() {
      this.checkPosition = true;
    },
    handleFocusoutComissionNumber() {
      this.checkComissionNumber = true;
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
      this.checkLastName = true;
      this.checkFirstName = true;
      this.checkPassportNumber = true;
      this.checkPosition = true;
      this.checkComissionNumber = true;
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
        && this.isNumberValid && this.isStartDateValid && this.isEndDateValid
        && this.isPassportNumberValid && this.isPassportSeriesValid
        && this.isPositionValid && this.isComissionNumberValid) {
        const url = new URL(`${window.location.origin}/api/certificates/create`);
        const body = {
          name: this.firstName,
          surname: this.lastName,
          patronymic: this.fatherName ? this.fatherName : '',
          number: this.number,
          year_graduation: this.year,
          position: this.position,
          comission_number: this.comissionNumber, 
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