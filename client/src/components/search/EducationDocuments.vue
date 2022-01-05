<template>
  <div class="education-documents">
    <h1>Реєстр документів про освіту</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">
      <h3>Дані документа про освіту</h3>
      <select v-model="educationType" v-on:change="handleSelect">
        <option>Документи про вищу освіту</option>
        <option>Документи про професійну (професійно-технічну) освіту</option>
        <option>Документи про загальну середню освіту</option>
      </select>
      <select v-model="documentType" v-if="educationType==='Документи про вищу освіту'">
        <option>Диплом МАГІСТРА</option>
        <option>Диплом СПЕЦІАЛІСТА</option>
        <option>Диплом БАКАЛАВРА</option>
        <option>Диплом МОЛОДШОГО БАКАЛАВРА</option>
        <option>Диплом МОЛОДШОГО СПЕЦІАЛІСТА</option>
        <option>Диплом ФАХОВОГО МОЛОДШОГО БАКАЛАВРА</option>
        <option>Свідоцтво про визнання іноземного документа про освіту</option>
      </select>
      <select v-model="documentType" v-if="educationType==='Документи про професійну (професійно-технічну) освіту'">
        <option>Диплом КВАЛІФІКОВАНОГО РОБІТНИКА</option>
        <option>Свідоцтво про присвоєння (підвищення) РОБІТНИЧОЇ КВАЛІФІКАЦІЇ</option>
      </select>
      <select v-model="documentType" v-if="educationType==='Документи про загальну середню освіту'">
        <option>СВІДОЦТВО про здобуття ПОВНОЇ загальної середньої освіти (з 2019)</option>
        <option>АТЕСТАТ про ПОВНУ загальну середню освіту (до 2019)</option>
        <option>СВІДОЦТВО про здобуття БАЗОВОЇ середньої освіти (з 2019)</option>
        <option>СВІДОЦТВО про БАЗОВУ загальну середню освіту (до 2019)</option>
        <option>СВІДОЦТВО про здобуття БАЗОВОЇ середньої освіти (для осіб з особливими освітніми потребами, зумовленими порушеннями інтелектуального розвитку) (з 2019)</option>
        <option>Свідоцтво про базову загальну середню освіту за спеціальною програмою (до 2019)</option>
        <option></option>
      </select>
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
        <label>Дата народження</label>
        <input type="date" class="valid" ref="dateInput" v-model="date" />
        <h5>* обов'язкові поля</h5>
        <input type="submit" value="Пошук" />
      </div>
    </form>
    <EducationDocumentsPopup :isPopup="isPopup" :result="result" @popup="updatePopup" />
    <MessagePopup :isPopup="isErrorPopup" :message="error" @popup="updateErrorPopup" />
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import convertDate from './../../assets/convertDate.js'
import EducationDocumentsPopup from './../popup/EducationDocumentsPopup.vue'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'EducationDocuments',
  data() {
    return {
      educationType: 'Документи про вищу освіту',
      documentType: 'Диплом МАГІСТРА',
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
      date: null,
      result: {},
      isPopup: false,
      isErrorPopup: false
    }
  },
  components: {
    EducationDocumentsPopup,
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
        const url = new URL(`${window.location.origin}/api/diplomas`);
        const params = {
          name: this.firstName,
          surname: this.lastName,
          patronymic: this.fatherName,
          number: this.number,
          series: this.series,
          type: this.documentType,
          global_type: this.educationType,
          birthday_date: this.date,
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
              number: data.number,
              series: data.series,
              status: data.status,
              firstName: data.name,
              lastName: data.surname,
              fatherName: data.patronymic,
              institution: data.institution_name,
              year: data.year_graduation,
              type: data.type,
              globalType: data.global_type,
              documentDate: convertDate(data.date_issue),
              dateOfBirth: data.birthday_date !== 'null' ? convertDate(data.birthday_date) : null
            };
            this.$set(this.$data, 'result', result);
         })
        .then(() => {this.isPopup = true;})
        .catch((error) => {
          this.error = error.message;
          this.isErrorPopup = true;
        });
      }
    },
    handleSelect() {
      if (this.educationType === 'Документи про вищу освіту') {
        this.documentType = 'Диплом МАГІСТРА';
      } else if (this.educationType === 'Документи про професійну (професійно-технічну) освіту') {
        this.documentType = 'Диплом КВАЛІФІКОВАНОГО РОБІТНИКА';
      } else if (this.educationType === 'Документи про загальну середню освіту') {
        this.documentType = 'СВІДОЦТВО про здобуття ПОВНОЇ загальної середньої освіти (з 2019)';
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
.education-documents .person-info input {
  margin-bottom: 15px;
}
.education-documents .person-info {
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
.education-documents .person-info input:not([type="checkbox"]) {
  width: 100%;
  box-sizing: border-box;
}
.education-documents .person-info input[type="checkbox"] {
  margin-right: 10px;
}
.education-documents input[type="submit"] {
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