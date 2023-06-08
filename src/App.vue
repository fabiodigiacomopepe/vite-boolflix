<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import AppListCard from './components/AppListCard.vue'
import AppFilmSingleCard from './components/AppFilmSingleCard.vue'
import AppSerieSingleCard from './components/AppFilmSingleCard.vue'

export default {
  components: {
    AppHeader,
    AppSearch,
    AppListCard,
    AppFilmSingleCard,
    AppSerieSingleCard
  },
  data() {
    return {
      store,
      loading: true
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
              this.loading = false;
            })
          .catch(errore => {
            console.log(errore);
          })

        axios
          .get(myUrlSerie)
          .then(
            risultato => {
              store.arraySerie = risultato.data.results;
              this.loading = false;
            })
          .catch(errore => {
            console.log(errore);
          })
      }
    }
  }
}
</script>

<template>
  <AppHeader @ricercaOnHeader="getFilmAndSerie()" />
  <AppListCard v-if="loading === false" />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>
