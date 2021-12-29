<template>
  <div class="administartor-page">
    <h1>Сторінка адміністратора</h1>
    <h3>Запити на набуття ролі адміністратора</h3>
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
        <tr v-for="item in requests" v-bind:key="item.taxNumber">
          <td>{{item.lastName}}</td>
          <td>{{item.firstName}}</td>
          <td>{{item.fatherName}}</td>
          <td>{{item.dateOfBirth}}</td>
          <td>{{item.organization}}</td>
          <td>{{item.position}}</td>
          <td>{{item.email}}</td>
          <td>{{item.passportSeries}}</td>
          <td>{{item.passportNumber}}</td>
          <td>{{item.passportOrganization}}</td>
          <td>{{item.passportDate}}</td>
          <td>{{item.taxNumber}}</td>
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
        <tr v-for="item in registrators" v-bind:key="item.taxNumber">
          <td>{{item.lastName}}</td>
          <td>{{item.firstName}}</td>
          <td>{{item.fatherName}}</td>
          <td>{{item.dateOfBirth}}</td>
          <td>{{item.organization}}</td>
          <td>{{item.position}}</td>
          <td>{{item.email}}</td>
          <td>{{item.passportSeries}}</td>
          <td>{{item.passportNumber}}</td>
          <td>{{item.passportOrganization}}</td>
          <td>{{item.passportDate}}</td>
          <td>{{item.taxNumber}}</td>
          <td>
            <span class='button' v-on:click="handleBtnUpdateClick(item)">Редагувати</span>
            <span class='button' v-on:click="handleBtnActivateClick(item)" v-if="!item.isActive">Активувати</span>
            <span class='button' v-on:click="handleBtnDeactivateClick(item)" v-if="item.isActive">Деактивувати</span>
            <span class='button' v-on:click="handleBtnJournalClick(item)">Журнал</span>
          </td>
        </tr>
      </table>
    </div>
    <h4 v-else>Немає реєстраторів</h4>
  </div>
</template>

<script>
export default {
  name: 'AdministratorPage',
  data() {
    return {
      requests: [
        {
          id: 1,
          lastName: 'Прізвище',
          firstName: 'Ім\'я',
          fatherName: 'По-Батькові',
          dateOfBirth: '1972-12-12',
          organization: 'Місце роботи 1',
          position: 'Держслужбовець',
          email: 'email@gmail.com',
          taxNumber: '5432112345',
          passportNumber: '123456789',
          passportOrganization: '1234',
          passportDate: `2020-05-04`,
          passportSeries: null,
        },
        {
          id: 2,
          lastName: 'Прізвище',
          firstName: 'Ім\'я',
          fatherName: 'По-Батькові',
          dateOfBirth: '1972-12-12',
          organization: 'Місце роботи 1',
          position: 'Держслужбовець',
          email: 'email@gmail.com',
          taxNumber: '1234554321',
          passportNumber: '123456789',
          passportOrganization: '1234',
          passportDate: `2020-05-04`,
          passportSeries: null,
        }
      ],
      registrators: [
        {
          id: 1,
          lastName: 'Прізвище',
          firstName: 'Ім\'я',
          fatherName: 'По-Батькові',
          dateOfBirth: '1972-12-12',
          organization: 'Місце роботи 1',
          position: 'Держслужбовець',
          email: 'email@gmail.com',
          taxNumber: '1234554321',
          passportNumber: '123456789',
          passportOrganization: '1234',
          passportDate: `2020-05-04`,
          passportSeries: null,
          isActive: true
        },
        {
          id: 2,
          lastName: 'Прізвище',
          firstName: 'Ім\'я',
          fatherName: 'По-Батькові',
          dateOfBirth: '1972-12-12',
          organization: 'Місце роботи 1',
          position: 'Держслужбовець',
          email: 'email@gmail.com',
          taxNumber: '5432112345',
          passportNumber: '123456',
          passportOrganization: '1234',
          passportDate: `2020-05-04`,
          passportSeries: 'ВВ',
          isActive: false
        }
      ]
    }
  },
  methods: {
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
      item.isActive = true;
    },
    handleBtnDeactivateClick(item) {
      console.log('deactivate')
      item.isActive = false;
    },
    handleBtnJournalClick(item) {
      console.log('journal')
      console.log(item)
      this.$router.push({path: '/journal'})
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