<script>
import { store } from '../store';

export default {
    name: "AppList",
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container" v-for="(el, index) in store.arrayFilm" :key="index">
        <div>Titolo: {{ el.original_title }}</div>
        <div>Titolo Originale: {{ el.title }}</div>
        <div>Lingua: {{ el.original_language }}</div>
        <div>Voto: {{ el.vote_average }}</div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.container {
    margin-bottom: 30px;
}
</style>
