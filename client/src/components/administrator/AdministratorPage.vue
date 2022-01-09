<template>
  <div class="administartor-page">
    <div v-if="role === 'administrator'">
      <h1>Сторінка адміністратора</h1>
      <h3>Запити на набуття ролі реєстратора</h3>
      <div class="request-list" v-if="requests.length > 0">
        <table>
          <tr>
            <th>Прізвище</th>
            <th>Ім'я</th>
            <th>По батькові</th>
            <th>Дата народження</th>
            <th>Місце роботи</th>
            <th>Посада</th>
            <th>Email</th>
            <th>Серія паспорта</th>
            <th>Номер паспорта</th>
            <th>Орган, що здійснив видачу паспорта</th>
            <th>Дата видачі паспотра</th>
            <th>Реєстраційний номер картки платника податків</th>
            <th></th>
          </tr>
          <tr v-for="item in requests" v-bind:key="item.query_id">
            <td>{{item.surname}}</td>
            <td>{{item.name}}</td>
            <td>{{item.patronymic}}</td>
            <td>{{item.birthday_date.split('T')[0]}}</td>
            <td>{{item.organization_name}}</td>
            <td>{{item.position}}</td>
            <td>{{item.email}}</td>
            <td>{{item.series}}</td>
            <td>{{item.number}}</td>
            <td>{{item.authority_code}}</td>
            <td>{{item.issue_date.split('T')[0]}}</td>
            <td>{{item.identification_code}}</td>
            <td>
              <span class='button' v-on:click="handleBtnAcceptClick(item)">Прийняти</span>
              <span class='button' v-on:click="handleBtnRejectClick(item)">Відхилити</span>
            </td>
          </tr>
        </table>
      </div>
      <h4 v-else>Немає запитів</h4>
      <h3>Список реєстраторів</h3>
      <div class="registers-list" v-if="registrators.length > 0">
        <table>
          <tr>
            <th>Прізвище</th>
            <th>Ім'я</th>
            <th>По батькові</th>
            <th>Дата народження</th>
            <th>Місце роботи</th>
            <th>Посада</th>
            <th>Email</th>
            <th>Серія паспорта</th>
            <th>Номер паспорта</th>
            <th>Орган, що здійснив видачу паспорта</th>
            <th>Дата видачі паспотра</th>
            <th>Реєстраційний номер картки платника податків</th>
            <th></th>
          </tr>
          <tr v-for="item in registrators" v-bind:key="item.registrar_id">
            <td>{{item.surname}}</td>
            <td>{{item.name}}</td>
            <td>{{item.patronymic}}</td>
            <td>{{item.birthday_date.split('T')[0]}}</td>
            <td>{{item.organization_name}}</td>
            <td>{{item.position}}</td>
            <td>{{item.email}}</td>
            <td>{{item.series}}</td>
            <td>{{item.number}}</td>
            <td>{{item.authority_code}}</td>
            <td>{{item.issue_date.split('T')[0]}}</td>
            <td>{{item.identification_code}}</td>
            <td>
              <span class='button' v-on:click="handleBtnUpdateClick(item)">Редагувати</span>
              <span class='button' v-on:click="handleBtnActivateClick(item)" v-if="!item.status">Активувати</span>
              <span class='button' v-on:click="handleBtnDeactivateClick(item)" v-if="item.status">Деактивувати</span>
              <span class='button' v-on:click="handleBtnJournalClick(item)">Журнал</span>
            </td>
          </tr>
        </table>
      </div>
      <h4 v-else>Немає реєстраторів</h4>
    </div>
    <div v-else>
      <h2>403 Forbidden</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdministratorPage',
  data() {
    return {
      requests: [],
      registrators: [],
      role: null
    }
  },
  mounted() {
    this.role = localStorage.getItem('role');
    this.getRegistrators();
    this.getRequests();
  },
  methods: {
    getRegistrators() {
      const url = new URL(`${window.location.origin}/api/registrators`);
      fetch(url, {method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
        }})
       .then(response => {
         if (response.status === 200) {
           return response.json();
         } else {
           throw new Error('За вашим запитом нічого не знайдено.');
         }
       })
       .then(data => {
         console.log(data)
          this.$set(this.$data, 'registrators', data);
       })
      .then(() => {this.isPopup = true;})
      .catch((error) => {
        this.error = error.message;
        console.log(this.error)
      });
    },
    getRequests() {
      const url = new URL(`${window.location.origin}/api/registrators/queries`);
      fetch(url, {method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
        }})
       .then(response => {
         if (response.status === 200) {
           return response.json();
         } else {
           throw new Error('За вашим запитом нічого не знайдено.');
         }
       })
       .then(data => {
         console.log(data)
          this.$set(this.$data, 'requests', data);
       })
      .then(() => {this.isPopup = true;})
      .catch((error) => {
        this.error = error.message;
        console.log(this.error)
      });
    },
    changeStatus(registrar_id) {
      const url = new URL(`${window.location.origin}/api/registrators/status?registrator_id=${registrar_id}`);
      fetch(url, {method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
        }})
       .then(response => {
         if (response.status === 200) {
           return response.json();
         } else {
           throw new Error('За вашим запитом нічого не знайдено.');
         }
       })
       .then(data => {
         console.log(data)
       })
      .then(() => {
        this.getRegistrators();
      })
      .catch((error) => {
        this.error = error.message;
        console.log(this.error)
      });
    },
    handleBtnAcceptClick(item) {
      console.log('accept');
      const index = this.requests.indexOf(item);
      this.requests.splice(index, 1);
      this.registrators.push(item);
    },
    handleBtnRejectClick(item) {
      console.log('reject');
      const index = this.requests.indexOf(item);
      this.requests.splice(index, 1);
    },
    handleBtnUpdateClick(item) {
      console.log('update');
      this.$router.push({name: 'RegistratorUpdate', params: {registrator: item}});
    },
    handleBtnActivateClick(item) {
      console.log('activate')
      this.changeStatus(item.registrar_id)
    },
    handleBtnDeactivateClick(item) {
      console.log('deactivate')
      this.changeStatus(item.registrar_id)
    },
    handleBtnJournalClick(item) {
      this.$router.push({name: 'Journal', params: {registrator: item}})
    }
  }
}
</script>

<style>
.administartor-page h1, .administartor-page h3 {
  color: #004C79;
  text-align: center;
}
.administartor-page h4 {
  text-align: center;
}
.administartor-page table {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  overflow: auto;
  text-align: center;
  background: white;
  border: 1px solid #3C8AB8;
  border-collapse: collapse;
  max-width: calc(100% - 100px);
}
.administartor-page tr {
  width: calc(100% - 2px);
}
.administartor-page td {
  border: 1px solid #3C8AB8;
  padding: 5px;
}
.administartor-page th {
  border: 1px solid #3C8AB8;
  padding: 5px;
}
.administartor-page span {
  display: block;
  margin: 5px;
  padding: 5px 10px;
  color: white;
  background-color: #005F97;
}
.administartor-page span:hover {
  cursor: pointer;
  background-color: #004C79;
}
</style>