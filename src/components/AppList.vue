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
        trasformaVoto(votoBase10) {
            let votoInBase5 = Math.ceil(votoBase10 / 2);
            return votoInBase5
        }
    },
    created() {

    },
}
</script>

<template>
    <div class="film">
        <div class="container-film" v-for="(elFilm, index) in store.arrayFilm" :key="index">
            <div>
                <img :src="`${store.apiImgCopertina}${store.apiImgSize}${elFilm.poster_path}`"
                    :alt="`${elFilm.original_title}`">
            </div>
            <div>Titolo: {{ elFilm.original_title }}</div>
            <div>Titolo Originale: {{ elFilm.title }}</div>

            <div>
                <img :src="`src/assets/img/${elFilm.original_language}.png`"
                    :alt="`${elFilm.original_language.toUpperCase()}`"
                    onerror="this.src='src/assets/img/international.jpg'">
            </div>

            <div>
                Voto:
                <i class="fa-solid fa-star" v-for="n in 5"
                    :class="(trasformaVoto(elFilm.vote_average) >= n) ? 'stellaPiena' : ''">
                </i>
            </div>
        </div>
    </div>

    <div class="serie">
        <div class="container-serie" v-for="(elSerie, index) in store.arraySerie" :key="index">
            <div>
                <img :src="`${store.apiImgCopertina}${store.apiImgSize}${elSerie.poster_path}`"
                    :alt="`${elSerie.original_title}`">
            </div>
            <div>Titolo: {{ elSerie.name }}</div>
            <div>Titolo Originale: {{ elSerie.original_name }}</div>

            <img :src="`src/assets/img/${elSerie.original_language}.png`"
                :alt="`${elSerie.original_language.toUpperCase()}`" onerror="this.src='src/assets/img/international.jpg'">

            <div>
                Voto:
                <i class="fa-solid fa-star" v-for="n in 5"
                    :class="(trasformaVoto(elFilm.vote_average) >= n) ? 'stellaPiena' : ''">
                </i>
            </div>
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

.fa-solid.fa-star {
    color: rgb(225, 225, 225);
}

.fa-solid.fa-star.stellaPiena {
    color: rgb(233, 233, 111);
}
</style>
