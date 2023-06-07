<script>
import { store } from '../store';

export default {
  name: "AppSearch",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <form action="#">
    <input type="text" v-model.trim="store.searchInput" @keyup.enter="$emit('ricerca')">
    <input type="button" value="Cerca" @click="$emit('ricerca')">
  </form>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
</style>
