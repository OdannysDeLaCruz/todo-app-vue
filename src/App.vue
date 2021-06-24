<template>
  <main class="app font-nunito">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    background: linear-gradient(to bottom, #63D9CF, #4D8DE2);
    height: 100vh;
  }
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .nav {
    max-width: 500px;
    margin: auto;
    background: #fff;
    padding: 10px;
    margin-bottom: 50px;
  }
  .nav ul {
    display: flex;
    justify-content: space-around;
  }
  .nav ul li {
    background: purple;
    padding: 5px 15px;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
  }
</style>
