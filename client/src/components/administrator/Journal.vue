<template>
  <div class="journal">
    <h1>Журнал дій реєстратора</h1>
    <table v-if="length > 0">
      <tr>
        <th>Дата і час</th>
        <th>Дія</th>
        <th>Таблиця</th>
        <th>id запису</th>
      </tr>
      <tr>
        <td>12.12.2021 12:35:14</td>
        <td>Create</td>
        <td>Студентський квиток</td>
        <td>1234635</td>
      </tr>
      <tr>
        <td>12.12.2021 12:35:14</td>
        <td>Create</td>
        <td>Студентський квиток</td>
        <td>1234635</td>
      </tr>
      <tr>
        <td>12.12.2021 12:35:14</td>
        <td>Create</td>
        <td>Студентський квиток</td>
        <td>1234635</td>
      </tr>
    </table>
    <h4 v-else>Журнал дій для цього реєстратора пустий</h4>
  </div>
</template>

<script>
export default {
  name: 'Journal',
  data() {
    return {
      length: 1
    }
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