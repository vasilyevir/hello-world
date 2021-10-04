<template>
    <div id="app">
      <h2>{{episode.name}}</h2>
      <p>{{episode.air_date}}</p>
      <div class="episodes">
        <div class="episode" v-for="characters in episode.characters" :key="characters.id">
          <router-link :to="{name: 'character', params: {id: characters.id}}">
            <img :src="characters.image" class="post__image">
          </router-link>
        </div>
      </div>
    <router-link :to="{name: 'home'}" @click="fetchAllCharacters" class="button">Ко всем персонажам</router-link>
      
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(['episode']),
  methods: mapActions(['fetchEpisode', 'fetchAllCharacters']),
  async mounted() {
    this.fetchEpisode(this.$route.params.id);
  }
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
  align-items: center;
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

.episodes{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.button{
  width: 150px;
  background-color: #ccc;
}
</style>