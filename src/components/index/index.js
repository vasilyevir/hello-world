import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
const axios = require('axios');


Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage,
  reducer: (state) => ({ link: state.link }),
})


export default new Vuex.Store({
  state: {
    link: '',
    characters: {},
    episode: {},
    character: {},
    obj: {
      name: '',
      status: ''
    },
  },
  mutations: {
    updateCharacters(state, characters) {
      state.characters = characters;
    },
    updateCharacter(state, character) {
      state.character = character;
    },
    updateEpisode(state, episode) {
      state.episode = episode;
    },
    updateName(state, e) {
      console.log(e)
      state.obj.name = e.target.value
    }, 
    updateStatus(state, e) {
      state.obj.status = e.target.value
    }, 
  },
  actions: {
    async fetchAllCharacters(ctx, link = "https://rickandmortyapi.com/api/character"){
      console.log(link, vuexLocalStorage)
      if (link === undefined || link === ''){
        if(vuexLocalStorage.storage.link !== undefined && vuexLocalStorage.storage.link !== '' && link !== true){
          link = vuexLocalStorage.storage.link;
        } else {
          link = "https://rickandmortyapi.com/api/character";
        }
      }
      console.log(link)
      const param = await axios.get(link);
      const characters = await param.data;
      characters.results.forEach(character => {
          let i = 0;
          const episodesInfo = []
          while(i < 5 && i < character.episode.length){
              const episodes = {}
              axios.get(character.episode[i]).then(function(response){
                  episodes['id'] = response.data.id;
                  episodes['name'] = response.data.name;

                  episodesInfo.push(episodes)
                  return episodes;
              });
              i++;
          }

          character.episode = episodesInfo
      });
      vuexLocalStorage.storage.link = link
      console.log(vuexLocalStorage.storage.link)
      ctx.commit('updateCharacters', characters)
    },

    async fetchCharacter(ctx, link){
      console.log(ctx, link);
      const param = await axios.get("https://rickandmortyapi.com/api/character/" + link);
  
      const character = await param.data;
      console.log(character);
      character.link = link;
      ctx.commit('updateCharacter', character)
    },

    async fetchEpisode(ctx, link){
      const param = await axios.get("https://rickandmortyapi.com/api/episode/" + link);
      const episode = await param.data;
      const characters = [];
      episode.characters.forEach(character => {
        axios.get(character).then(function(response){
          const object = {};
          object.image = response.data.image;
          object.id = response.data.id
          object.link = 'https://rickandmortyapi.com/api/character/' + response.data.id;
          characters.push(object);
        });
      })
      episode.characters = characters;
      vuexLocalStorage.storage.link = "https://rickandmortyapi.com/api/episode/" + link
      ctx.commit('updateEpisode', episode)
    },

    async fetchForm(ctx, e){
      e.preventDefault();
      const link = this.state.obj.name !== '' ? 
                   this.state.obj.status !== '' ? 
                  '?name=' + this.state.obj.name + '&status=' + this.state.obj.status : 
                  '?name=' + this.state.obj.name :
                    this.state.obj.status !== '' ?
                    '?&status=' + this.state.obj.status :
                    '';
      const param = await axios.get("https://rickandmortyapi.com/api/character/" + link);
      const characters = await param.data;
      characters.results.forEach(character => {
        let i = 0;
        const episodesInfo = []
          while(i < 5 && i < character.episode.length){
              const episodes = {}
              axios.get(character.episode[i]).then(function(response){
                  episodes['id'] = response.data.id;
                  episodes['name'] = response.data.name;
                  episodesInfo.push(episodes)
                  return episodes;
              });
              i++;
          }

          character.episode = episodesInfo
      });
      vuexLocalStorage.storage.link = "https://rickandmortyapi.com/api/character/" + link
      ctx.commit('updateCharacters', characters)
    }
  },
  getters: {
    allCharacters(state) {
      return state.characters
    },
    character(state) {
      return state.character;
    },
    episode(state) {
      return state.episode;
    },
    formsData(state) {
      return state.obj;
    },
    link() {
      return vuexLocalStorage.storage.link;
    }
  },
  plugins: [vuexLocalStorage.plugin]
})