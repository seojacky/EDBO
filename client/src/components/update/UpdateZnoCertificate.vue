<template>
  <div class="zno-certificates">
    <h1>Додати дані до Реєстру сертифікатів зовнішнього незалежного оцінювання</h1> 
    <form method="GET" v-on:submit="handleSubmitForm">
      <h2>{{this.result.lastName}} {{this.result.firstName}} {{this.result.fatherName}}</h2>
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
    <MessagePopup :isPopup="isErrorPopup" @popup="updateErrorPopup" :message="error" />
  </div>
</template>

<script>
import Validation from './../../assets/validation.js'
import MessagePopup from './../popup/MessagePopup.vue'

export default {
  name: 'UpdateZnoCertificate',
  props: ['result'],
  data() {
    return {
      year: this.result.year,
      checkNumber: false,
      number: this.result.number,
      isNumberValid: true,
      error: '',
      isPopup: false,
      isErrorPopup: false,
      role: null,
      results: 0,
      subject11: this.result.result[0] ? this.result.result[0].subject : 'Не вибрано',
      subject21: this.result.result[1] ? this.result.result[1].subject : 'Не вибрано',
      subject31: this.result.result[2] ? this.result.result[2].subject : 'Не вибрано',
      subject41: this.result.result[3] ? this.result.result[3].subject : 'Не вибрано',
      subject51: this.result.result[4] ? this.result.result[4].subject : 'Не вибрано',
      subject1: this.result.result[0] ? this.result.result[0].subject : 'Не вибрано',
      subject2: this.result.result[1] ? this.result.result[1].subject : 'Не вибрано',
      subject3: this.result.result[2] ? this.result.result[2].subject : 'Не вибрано',
      subject4: this.result.result[3] ? this.result.result[3].subject : 'Не вибрано',
      subject5: this.result.result[4] ? this.result.result[4].subject : 'Не вибрано',
      grade1: this.result.result[0] ? this.result.result[0].result : 'Не склав',
      grade2: this.result.result[1] ? this.result.result[1].result : 'Не склав',
      grade3: this.result.result[2] ? this.result.result[2].result : 'Не склав',
      grade4: this.result.result[3] ? this.result.result[3].result : 'Не склав',
      grade5: this.result.result[4] ? this.result.result[4].result : 'Не склав',
      subjects1: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Історія України',
        'Англійська мова',
        'Німецька мова',
        'Французька мова',
        'Іспанська мова',
        'Фізика',
        'Географія',
        'Біологія',
        'Хімія'
      ],
      subjects2: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Історія України',
        'Англійська мова',
        'Німецька мова',
        'Французька мова',
        'Іспанська мова',
        'Фізика',
        'Географія',
        'Біологія',
        'Хімія'
      ],
      subjects3: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Історія України',
        'Англійська мова',
        'Німецька мова',
        'Французька мова',
        'Іспанська мова',
        'Фізика',
        'Географія',
        'Біологія',
        'Хімія'
      ],
      subjects4: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Історія України',
        'Англійська мова',
        'Німецька мова',
        'Французька мова',
        'Іспанська мова',
        'Фізика',
        'Географія',
        'Біологія',
        'Хімія'
      ],
      subjects5: [
        'Не вибрано',
        'Українська мова',
        'Математика',
        'Історія України',
        'Англійська мова',
        'Німецька мова',
        'Французька мова',
        'Іспанська мова',
        'Фізика',
        'Географія',
        'Біологія',
        'Хімія'
      ],
      grades: [ 'Не склав' ]
    }
  },
  mounted() {
    this.role = localStorage.getItem('role');
    for(let i = 100; i <= 200; i++) {
      this.grades.push(i.toString())
    }
    this.$nextTick(()=>{
      if (this.result.result[0]) {
        const index2 = this.subjects2.indexOf(this.subject1);
        this.subjects2.splice(index2, 1);
        const index3 = this.subjects3.indexOf(this.subject1);
        this.subjects3.splice(index3, 1);
        const index4 = this.subjects4.indexOf(this.subject1);
        this.subjects4.splice(index4, 1);
        const index5 = this.subjects5.indexOf(this.subject1);
        this.subjects5.splice(index5, 1);
        this.results += 1;
      }
      if (this.result.result[1]) {
        const index1 = this.subjects1.indexOf(this.subject2);
        this.subjects1.splice(index1, 1);
        const index3 = this.subjects3.indexOf(this.subject2);
        this.subjects3.splice(index3, 1);
        const index4 = this.subjects4.indexOf(this.subject2);
        this.subjects4.splice(index4, 1);
        const index5 = this.subjects5.indexOf(this.subject2);
        this.subjects5.splice(index5, 1);
        this.results += 1;
      }
      if (this.result.result[2]) {
         const index1 = this.subjects1.indexOf(this.subject3);
        this.subjects1.splice(index1, 1);
        const index2 = this.subjects2.indexOf(this.subject3);
        this.subjects2.splice(index2, 1);
        const index4 = this.subjects4.indexOf(this.subject3);
        this.subjects4.splice(index4, 1);
        const index5 = this.subjects5.indexOf(this.subject3);
        this.subjects5.splice(index5, 1);
        this.results += 1;
      }
      if (this.result.result[3]) {
        const index1 = this.subjects1.indexOf(this.subject4);
        this.subjects1.splice(index1, 1);
        const index2 = this.subjects2.indexOf(this.subject4);
        this.subjects2.splice(index2, 1);
        const index3 = this.subjects3.indexOf(this.subject4);
        this.subjects3.splice(index3, 1);
        const index5 = this.subjects5.indexOf(this.subject4);
        this.subjects5.splice(index5, 1);
        this.results += 1;
      }
      if (this.result.result[4]) {
        const index1 = this.subjects1.indexOf(this.subject5);
        this.subjects1.splice(index1, 1);
        const index2 = this.subjects2.indexOf(this.subject5);
        this.subjects2.splice(index2, 1);
        const index3 = this.subjects3.indexOf(this.subject5);
        this.subjects3.splice(index3, 1);
        const index4 = this.subjects4.indexOf(this.subject5);
        this.subjects4.splice(index4, 1);
        this.results += 1;
      }
    });
  },
  components: {
    MessagePopup
  },
  methods: {
    handleFocusoutNumber() {
      this.checkNumber = true;
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
    validateInputNumber(field, number, elementName) {
      const message = Validation.validateNumber(field, number, this.$refs[elementName]);
      this.isNumberValid = message ? false : true;
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      this.checkNumber = true;
      if (this.isNumberValid && this.results > 0) {
        const url = new URL(`${window.location.origin}/api/zno/update`);
        const body = {
          old_number: this.result.number,
          number: this.number, 
          old_year: this.result.year, 
          year: this.year, 
          name: this.result.firstName, 
          surname: this.result.lastName, 
          patronymic: this.result.fatherName,
          results: [
            {
              subject: this.subject1,
              result: this.grade1
            },
            {
              subject: this.subject2,
              result: this.grade2
            },
            {
              subject: this.subject3,
              result: this.grade3
            },
            {
              subject: this.subject4,
              result: this.grade4
            },
            {
              subject: this.subject5,
              result: this.grade5
            }
          ]
        };
        console.log(body)
        fetch(url, {method: 'PUT', 
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
      this.$router.push({path: '/update-search-zno-certificate'});
    },
    updateErrorPopup(isErrorPopup) {
      this.isErrorPopup = isErrorPopup;
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