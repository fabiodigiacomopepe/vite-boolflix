<script>
import { store } from '../store';

export default {
  name: "AppHelloWorld",
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <form action="#">
    <input type="text" v-model.trim="store.searchInput" />
  </form>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
</style>
