<template>
  <div>
    <ul>
      <li>
        <div>
          <div class="articleList" v-for='item in posts' :key='item.id' v-bind:id="'articles' + item.id">
            {{ item.label }}
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'ArticlesList',
  'data' () {
    return {
      posts: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        { id: 1, label: 'Mon titre', content: '...'},
        // eslint-disable-next-line standard/object-curly-even-spacing
        { id: 2, label: 'Mon titre', content: '...'}
      ]
    }
  },
  'created' () {},
  methods: {}
}
</script>

<style scoped>
.articleList {
  background-color: white;
  height: 50px;
  width: 270px;
  padding: 20px;
}
li {
  list-style-type: none;
}
</style>
