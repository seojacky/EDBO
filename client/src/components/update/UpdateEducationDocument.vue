<template>
  <div class="education-documents">
    <h1>Редагувати дані у Реєстрі документів про освіту</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">
      <h2>ПІБ</h2>
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
      </select>
      <label>Рік закінчення закладу освіти</label>
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
      </select>
      <div class="document-info">
        <label>Дата видачі документу</label>
        <input type="date" class="valid name" ref="dateInput" v-model="date" v-on:focusout="handleFocusoutDate" />
        <div class="error" v-if="checkDate && validateInputDate('Дата народження', date, 'dateInput')">
          {{validateInputDate('Дата видачі документу', date, 'dateInput').message}}
        </div>
        <label>Повна назва закладу освіти*</label>
        <input type="text" class="valid name" ref="educationSubjectInput" v-model="educationSubject" v-on:focusout="handleFocusoutEducationSubject" />
        <div class="error error-name" v-if="checkEducationSubject && validateInputEducationSybject('Заклад освіти', educationSubject, 'educationSubjectInput')">
          {{validateInputEducationSybject('Заклад освіти', educationSubject, 'educationSubjectInput').message}}
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
      <h5>* обов'язкові поля</h5>
      <input type="submit" value="Редагувати" />
    </form>
    <MessagePopup :isPopup="isPopup" @popup="updatePopup" message="Введені Вами дані було оновлено у Реєстрі документів про освіту." />
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'EducationDocuments',
  data() {
    return {
      educationType: 'Документи про вищу освіту',
      documentType: 'Диплом МАГІСТРА',
      year: 2021,
      checkSeries: false,
      series: 'АА',
      isSeriesValid: true,
      checkNumber: false,
      number: '12345678',
      isNumberValid: true,
      checkEducationSubject: false,
      educationSubject: 'НТУУ КПІ',
      isEducationSubjectValid: true,
      checkDate: null,
      date: '2019-06-06',
      isDateValid: true,
      isPopup: false
    }
  },
  components: {
    MessagePopup
  },
  methods: {
    handleFocusoutSeries() {
      this.checkSeries = true;
    },
    handleFocusoutNumber() {
      this.checkNumber = true;
    },
    handleFocusoutEducationSubject() {
      this.checkEducationSubject = true;
    },
    handleFocusoutDate() {
      this.checkDate = true;
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
    validateInputDate(field, date, elementName) {
      const message = Validation.validateDate(field, date, this.$refs[elementName]);
      this.isDateValid = message ? false : true;
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkSeries = true;
      this.checkNumber = true;
      this.checkEducationSubject = true;
      this.checkDate = true;
      if (this.isSeriesValid && this.isNumberValid && this.isDateValid && this.isEducationSubjectValid) {
        this.isPopup = true;
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