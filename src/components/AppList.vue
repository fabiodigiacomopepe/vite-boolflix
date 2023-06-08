<script>
import { store } from '../store';

export default {
    name: "AppList",
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    created() {

    },
}
</script>

<template>
    <div class="film">
        <div class="container-film" v-for="(el, index) in store.arrayFilm" :key="index">
            <div>Titolo: {{ el.original_title }}</div>
            <div>Titolo Originale: {{ el.title }}</div>

            <div>
                <img :src="`src/assets/img/${el.original_language}.png`" :alt="`${el.original_language.toUpperCase()}`"
                    onerror="this.src='src/assets/img/international.jpg'">
            </div>

            <div>Voto: {{ el.vote_average }}</div>
        </div>
    </div>

    <div class="serie">
        <div class="container-serie" v-for="(el, index) in store.arraySerie" :key="index">
            <div>Titolo: {{ el.name }}</div>
            <div>Titolo Originale: {{ el.original_name }}</div>

            <img :src="`src/assets/img/${el.original_language}.png`" :alt="`${el.original_language.toUpperCase()}`"
                onerror="this.src='src/assets/img/international.jpg'">

            <div>Voto: {{ el.vote_average }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.film,
.serie {
    border: 2px solid black;
}

.container-film,
.container-serie {
    margin: 30px 0;
}

img {
    width: 30px;
}
</style>
