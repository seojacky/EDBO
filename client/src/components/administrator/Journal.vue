<template>
  <div class="journal">
    <div v-if="role === 'administrator' && registrator">
      <h1>Журнал дій реєстратора</h1>
      <h2>{{registrator.surname}} {{registrator.name}} {{registrator.patronymic}}</h2>
      <table v-if="logs.length > 0">
        <tr>
          <th>Дата і час</th>
          <th>Дія</th>
          <th>Таблиця</th>
          <th>id запису</th>
        </tr>
        <tr v-for="item in logs" v-bind:key="item.log_id">
          <td>{{item.date.split('T')[0]}} {{item.date.split('T')[1].split('.')[0]}}</td>
          <td>{{item.modify_type}}</td>
          <td>{{item.table_name}}</td>
          <td>{{item.id_row}}</td>
        </tr>
      </table>
      <h4 v-else>Журнал дій для цього реєстратора пустий</h4>
    </div>
    <div v-else>
      <h2>403 Forbidden</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Journal',
  props: ['registrator'],
  data() {
    return {
      logs: [],
      role: null
    }
  },
  mounted() {
    this.role = localStorage.getItem('role');
    const url = new URL(`${window.location.origin}/api/registrators/journal?registrator_id=${this.registrator.registrar_id}`);
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
        this.$set(this.$data, 'logs', data);
     })
    .catch((error) => {
      this.error = error.message;
      console.log(this.error)
    });
  }
}
</script>

<style>
.journal h1 {
  color: #004C79;
  text-align: center;
}
.journal h4 {
  text-align: center;
}
.journal {
  text-align: center;
}
.journal table {
  position: relative;
  /* left: 50%;
  transform: translateX(-50%); */
  display: inline-block;
  overflow: auto;
  text-align: center;
  background: white;
  border: 1px solid #3C8AB8;
  border-collapse: collapse;
  max-width: calc(100% - 100px);
}
.journal tr {
  width: calc(100% - 2px);
}
.journal td {
  border: 1px solid #3C8AB8;
  padding: 5px;
}
.journal th {
  border: 1px solid #3C8AB8;
  padding: 5px;
}
</style>