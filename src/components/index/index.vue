<template>
    <div id="app">
    
    <form @submit="fetchForm" class="form">
        <input v-model="formsData.name" placeholder="name" @input="updateName" class="form__input"/>
        <select v-model="formsData.status" @input="updateStatus" class="form__select">
            <option value="">Выберите один из вариантов</option>
            <option>Alive</option>
            <option>Dead</option>
            <option>Unknown</option>
        </select>
        <button class="form__button">Поиск</button>
    </form>
    <div class="posts">
      <div class="post" v-for="post in allCharacters.results" :key="post.id">
        <img :src="post.image" :alt="post.name" class="post__image">
        <router-link :to="{name: 'character', params: {id: post.id}}">{{post.name}}</router-link>
        <p>{{post.species}}</p>
        <div class="episodes" v-for="episode in post.episode" :key="episode.id">
            <router-link :to="{name: 'episode', params: {id: episode.id}}">{{episode.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="buttons__container">
      <button 
        v-on:click="allCharacters.info.prev ? fetchAllCharacters(allCharacters.info.prev) : ''" 
        v-bind:class="[{disableButton: !allCharacters.info.prev}, {activeButton: allCharacters.info.prev}]"
        :disabled="!allCharacters.info.prev"
      >
        Prev
      </button>
      <button 
        v-on:click="allCharacters.info.next ? fetchAllCharacters(allCharacters.info.next) : ''"
        v-bind:class="[{disableButton: !allCharacters.info.next}, {activeButton: allCharacters.info.next}]"
        :disabled="!allCharacters.info.next"
      >
      Next
      </button>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(['allCharacters', 'formsData', 'link']),
  methods: {...mapActions(['fetchAllCharacters', 'fetchForm']), ...mapMutations(['updateName', 'updateStatus'])},
  async mounted() {
    if(!this.$store.getters.link.includes("https://rickandmortyapi.com/api/character/") || this.$store.getters.link === ''){
        this.fetchAllCharacters("https://rickandmortyapi.com/api/character/") 
    } else {
        this.fetchAllCharacters(this.$store.getters.link);
    }
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

.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.form__input{
    width: 250px;
    border: none;
    background: none;
    border-bottom: 1px solid white;
    color: #fff;
}

.form__select{
    width: 250px;
    border: none;
    background: none;
    border-bottom: 1px solid white;
    color: #fff;
}

.form__button{
    border: none;
    width: 250px;
    height: 30px;
    background: none;
    border: 1px solid white;
    color: #fff;
}
</style>