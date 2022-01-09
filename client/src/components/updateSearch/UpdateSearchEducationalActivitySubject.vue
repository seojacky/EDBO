<template>
  <div class="zno-certificates">
    <div v-if="role === 'registrator'">
      <h1>Пошук даних для редагування у Реєстрі суб'єктів освітньої діяльності</h1> 
      <form method="GET" v-on:submit="handleSubmitForm">
        <select v-model="region">
          <option value="КИЇВ">місто Київ</option>
          <option>Вінницька область</option>
          <option>Волинська область</option>
          <option>Дніпропетровська область</option>
          <option>Донецька область</option>
          <option>Житомирська область</option>
          <option>Закарпатська область</option>
          <option>Запорізька область</option>
          <option>Івано-Франківська область</option>
          <option>Київська область</option>
          <option>Кіровоградська область</option>
          <option>Луганська область</option>
          <option>Львівська область</option>
          <option>Миколаївська область</option>
          <option>Одеська область</option>
          <option>Полтавська область</option>
          <option>Рівненська область</option>
          <option>Сумська область</option>
          <option>Тернопільска область</option>
          <option>Харківська область</option>
          <option>Херсонська область</option>
          <option>Хмельницька область</option>
          <option>Черкаська область</option>
          <option>Чернівецька область</option>
          <option>Чернігівська область</option>
        </select>
        <select v-model="subject">
          <option value="Заклад вищої освіти">Заклади вищої освіти</option>
          <option value="Заклад фахової передвищої освіти">Заклади фахової передвищої освіти</option>
          <option value="Заклад професійної (професійно-технічної) освіти">Заклади професійної (професійно-технічної) освіти</option>
          <option value="Заклад загальної середньої освіти">Заклади загальної середньої освіти</option>
        </select>
        <label>Повна назва закладу освіти*</label>
        <input type="text" class="valid" ref="nameInput" v-model="name" v-on:focusout="handleFocusoutName" />
        <div class="error" v-if="checkName && validateInputName('Назва', name, 'nameInput')">
          {{validateInputName('Назва', name, 'nameInput').message}}
        </div>
        <h5>* обов'язкові поля</h5>
        <input type="submit" value="Пошук" />
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
  name: 'UpdateSearchEducationalActivitySubjects',
  components: {
    MessagePopup
  },
  data() {
    return {
      region: 'КИЇВ',
      subject: 'Заклад вищої освіти',
      checkName: false,
      name: null,
      isNameValid: false,
      error: '',
      isErrorPopup: false,
      role: null
    }
  },
  mounted() {
    this.role = localStorage.getItem('role');
  },
  methods: {
    handleFocusoutName() {
      this.checkName = true;
    },
    validateInputName(field, name, elementName) {
      const message = Validation.validateNotEmpty(field, name, this.$refs[elementName]);
      this.isNameValid = message ? false : true;
      return message;
    },
    handleSubmitForm(e) {
      e.preventDefault();
      if (this.isNameValid) {
        const url = new URL(`${window.location.origin}/api/institutions/one`);
        const params = {
          region: this.region,
          global_type: this.subject,
          name: this.name
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
           console.log(data)
           this.$router.push({name: 'UpdateEducationalActivitySubject', params: {result: data}}) 
         })
        .catch((error) => {
          this.error = error.message;
          this.isErrorPopup = true;
        });
      }
    },
    updateErrorPopup(isPopup) {
      this.isPopup = isPopup;
    },
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