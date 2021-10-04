<template>
    <div id="app">
    <div class="posts">
      <div class="post">
        <img :src="character.image" :alt="character.name" class="post__image">
        <h2>{{character.name}}</h2>
        <p>{{character.species}}</p>
        <p>{{character.location.name}}</p>
      </div>
    </div>
    <router-link :to="{name: 'home'}" @click="fetchAllCharacters">Ко всем персонажам</router-link>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(['character']),
  methods: mapActions(['fetchCharacter', 'fetchAllCharacters']),
  async mounted() {
    this.fetchCharacter(this.$route.params.id);
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}

.buttons__container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.posts{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.post{
  border: 1px solid blue;
  width:250px;
  height: 600px;
  background-color: white;
}

.disableButton{
  display: none;
}

.activeButton{
  background-color: greenyellow;
  border: none;
  border-radius: 5px;
}

.post__image{
  width: 100%;
  height: 250px;
}
</style>