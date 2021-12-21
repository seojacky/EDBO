<template>
  <div class="login">
    <form method="GET" v-on:submit="handleSubmitForm">
      <h2>Вхід в систему</h2>
      <input type="text" v-model="login" />
      <input type="password" v-model="password" />
      <div class="error" v-if="error">
        {{error}}
      </div>
      <input type="submit" value="Увійти" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: null,
      password: null,
      error: null
    }
  },
  methods: {
    handleSubmitForm(e) {
      e.preventDefault();
      if (!this.error) {
        this.$router.push({ path: '/administartor' });
      }
    }
  }
}
</script>

<style>
.login form {
  width: 350px;
  background-color: white;
  padding: 30px;
  margin: 10px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.login h2 {
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
}
.login .error {
  color: red;
  font-size: 12px;
  margin-top: -15px;
}
.login input {
  width: 100%;
  box-sizing: border-box;
}
.login input:not([type="submit"]) {
  border: 1px solid grey;
  padding: 3px;
  margin: 5px 0;
}
.login input:not([type="submit"]):focus {
  border: 2px solid #005F97;
  padding: 2px;
  outline: none;
}
.login input[type="password"] {
  margin-bottom: 20px;
}
.login input[type="submit"] {
  color: white;
  background-color: #005F97;
  border: none;
  transition: background-color 0.5s ease-out 50ms;
  padding: 5px;
  font-size: 20px;
  margin: 10px 0;
}
.login input[type="submit"]:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>