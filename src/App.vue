<script>
import { store } from './store.js'
import axios from 'axios'
import AppSearch from './components/AppSearch.vue'
import AppList from './components/AppList.vue'

export default {
  components: {
    AppSearch,
    AppList,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFilmAndSerie() {
      let myUrlFilm = `${store.apiUrl}${store.apiUrlFilm}${store.apiKey}${store.apiSearch}`;
      let myUrlSerie = `${store.apiUrl}${store.apiUrlSerie}${store.apiKey}${store.apiSearch}`;
      if (store.searchInput !== "") {
        myUrlFilm += `${store.searchInput}`;
        myUrlSerie += `${store.searchInput}`;

        axios
          .get(myUrlFilm)
          .then(
            risultato => {
              store.arrayFilm = risultato.data.results;
              store.loading = false;
            })
          .catch(errore => {
            console.log(errore);
          })

        axios
          .get(myUrlSerie)
          .then(
            risultato => {
              store.arraySerie = risultato.data.results;
              store.loading = false;
            })
          .catch(errore => {
            console.log(errore);
          })
      }
    },
  },
  created() {
  }
}
</script>

<template>
  <AppSearch @ricerca="getFilmAndSerie" />
  <AppList />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>
