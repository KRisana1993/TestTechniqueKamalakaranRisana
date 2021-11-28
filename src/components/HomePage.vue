<template>
  <div id="mainPage">
    <p id="mainPageText">Bienvenue sur votre page d'accueil</p>
    <p class="content">Test technique pour les développeurs Angular, React ou Vue.js</p>
    <button id="goToArticle" v-on:click="articlesList">Voir la liste des articles</button>
  </div>
</template>

<script>
export default {
  'name': 'homePage',
  'data' () {
  },
  'created' () {},
  methods: {
    articlesList: function () {
      this.$router.push('/articles')
      console.log('AZERT')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#mainPage {
  padding-top: 115px;
  left: 0px;
  width: 100%;
  height: 443px;
  background: #4A4A4A 0% 0% no-repeat padding-box;
}
#mainPageText {
  top: 190px;
  left: 800px;

  color : white;
  font: normal normal normal 28px Sergoe UI;
  opacity: 1;
  font-weight: bold;
  letter-spacing: 0px;
  text-align: center;
  font-size: 24px;
}
.content {
  color: white;
  font-size: 22px;
  letter-spacing: 0px;

  text-align: center;
  margin-top: 3%;
}
#goToArticle {
  background-color: #FFF130;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 3px;

  top: 326px;
  left: 835px;
  width: 251px;
  height: 47px;

  margin-top: 2%;

  margin-left: 43%;
  color: #4A4A4A;
}
</style>
