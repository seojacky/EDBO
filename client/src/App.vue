<template>
  <div id="app">
    <header>
      <router-link to="/">
       <figure>
          <img src="./assets/images/main_logo.png" />
        </figure>
      </router-link>
      <ul ref="registartorMenu" v-on:mouseover="handleMouseover" v-on:mouseleave="handleMouseleave">
        <li style="padding: 0 80px">
          <h3>Реєстратор</h3>
        </li>
        <div ref="submenu" class="submenu">
          <li>
            <router-link to="/add-student-ticket">
              <h4>Додати дані до Реєстру<br/>студентських (учнівських) квитків</h4>
            </router-link>
          </li>
          <li>
            <router-link to="/update-search-student-ticket">
              <h4>Редагувати дані у Реєстрі<br/>студентських (учнівських) квитків</h4>
            </router-link>
          </li>
          <li>
            <router-link to="/add-teacher-certificate">
              <h4>Додати дані до Реєстру<br/>сертифікатів педагогічних працівників</h4>
            </router-link>
          </li>
          <li>
            <router-link to="/update-search-teacher-certificate">
              <h4>Редагувати дані у Реєстрі<br/>сертифікатів педагогічних працівників</h4>
            </router-link>
          </li>
          <li>
            <router-link to="/add-education-document">
              <h4>Додати дані до Реєстру<br/>документів про освіту</h4>
            </router-link>
          </li>
          <li>
            <router-link to="/update-search-education-document">
              <h4>Редагувати дані у Реєстрі<br/>документів про освіту</h4>
            </router-link>
          </li>
          <li>
            <router-link to="/add-zno-certificate">
              <h4>Додати дані до Реєстру<br/>сертифікатів ЗНО</h4>
            </router-link>
          </li>
           <li>
            <router-link to="/update-search-zno-certificate">
              <h4>Редагувати дані у Реєстрі<br/>сертифікатів ЗНО</h4>
            </router-link>
          </li>
        </div>
      </ul>
      <router-link to="/administartor">
        <h3>Адміністратор</h3>
      </router-link>
      <router-link to="/login">
        <h3>Увійти в систему</h3>
      </router-link>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleMouseover() {
      this.$refs.submenu.style.animation = 'appear 0.5s 0s forwards';
      this.$refs.submenu.style.display = 'block';
    },
    handleMouseleave() {
      this.$refs.submenu.style.animation = 'disappear 1s 0s forwards';
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app, input {
    font-family: serif;
  }
  .content {
    top: 70px;
    position: relative;
    padding-bottom: 30px;
    min-height: calc(100vh - 100px);
    background-color: #E8F4FA;
    overflow-x: hidden;
  }
  select {
    background-color: white;
  }
  header {
    position: fixed;
    z-index: 2;
    width: 100%;
    padding: 0 30px;
    height: 70px;
    background-color: #005F97;
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
  header figure {
    height: 60px;
    margin: 5px 20px;
    padding: 0 30px;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  header figure img {
    height: 50px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  header a:last-of-type {
    margin-left: auto;
  }
  header a {
    text-decoration: none;
  }
  header h3 {
    margin: 0;
    color: white;
    padding: 0 65px;
    line-height: 70px;
    transition: background-color 0.5s ease-out 50ms;
  }
  header h3:not(:last-of-type) {
    max-width: fit-content;
  }
  header h3:hover, ul:hover {
    background-color: #004C79;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    transition: background-color 0.5s ease-out 50ms;
  }
  ul li:first-of-type {
    display: block;
    height: 70px;
  }
  ul .submenu {
    opacity: 0;
    display: none;
  }
  ul .submenu li {
    background-color: #849fbbd5;
    height: fit-content;
    text-align: center;
    height: 56px;
  }
  ul .submenu li:hover {
    background-color: #3d6591b4;
  }
  ul li h4 {
    margin: 0;
    padding: 0 20px;
    color: white;
    font-weight: lighter;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes disappear {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
