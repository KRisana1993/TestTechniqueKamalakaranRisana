<template>
  <div id="app">
    <nav class="crumbs">
      <li class="crumbs robotDemoApp">RobotDemoApp</li>
      <li class="crumbs"><a href="#" class="accueil">Accueil</a></li>
      <li class="crumbs"><a href="#" class="articles">Liste des articles</a></li>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-color: black;
}
nav {
  border-bottom: 1px solid black;
}

.crumbs {
  display: inline-block;
  padding: 10px;
}
.robotDemoApp {
  list-style-type: none;
  color: white;
  font-size: 20px;
  top: 15px;
}

.accueil {
  text-decoration: none;
  color: white;
  margin-left: 50px;
}
.articles {
  text-decoration: none;
  color: white;
  margin-left: 50px;
}
</style>
