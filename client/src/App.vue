<template>
  <div id="app">
    <header>
      <router-link to="/">
       <figure>
          <img src="./assets/images/main_logo.png" />
        </figure>
      </router-link>
      <router-link to="/">
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
  components: {
    
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
    align-items: center;
  }
  header figure {
    height: 60px;
    margin: 0 20px;
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
    text-decoration: none;
  }
  header h3 {
    color: white;
    padding: 0 20px;
    margin: 0 80px;
    line-height: 70px;
    transition: background-color 0.5s ease-out 50ms;
  }
  header h3:hover {
    background-color: #004C79;
  }
</style>
