<script>
import { store } from '../store';


export default {
    name: "AppFilmSingleCard",
    data() {
        return {
            store,
            mouseSopraCopertina: ""
        }
    },
    methods: {
        trasformaVoto(votoBase10) {
            let votoInBase5 = Math.ceil(votoBase10 / 2);
            return votoInBase5
        },
        mostraInfo(indice) {
            this.mouseSopraCopertina = indice;
        },
        rimuoviInfo() {
            this.mouseSopraCopertina = "";
        }
    }
}
</script>

<template>
    <ul class="film">
        <li class="container-film" v-for="(elFilm, index) in store.arrayFilm" :key="index" @mouseover="mostraInfo(index)"
            @mouseleave="rimuoviInfo()">
            <div>
                <img class="copertina" :src="`${store.apiImgCopertina}${store.apiImgSize}${elFilm.poster_path}`"
                    :alt="`${elFilm.original_title}`" onerror="this.src='src/assets/img/filmorserienotfound.png'">
            </div>

            <div class="info_film" v-if="mouseSopraCopertina === index">
                <div>Titolo: <span>{{ elFilm.original_title }}</span></div>
                <div>Titolo originale: <span>{{ elFilm.title }}</span></div>

                <div>
                    <img :src="`src/assets/img/${elFilm.original_language}.png`"
                        :alt="`${elFilm.original_language.toUpperCase()}`"
                        onerror="this.src='src/assets/img/international.jpg'">
                </div>

                <div>
                    Voto:
                    <i class="fa-solid fa-star" v-for="(n, index1) in 5" :key="index1"
                        :class="(trasformaVoto(elFilm.vote_average) >= n) ? 'stellaPiena' : ''">
                    </i>
                </div>

                <div>
                    Overview: <span>{{ elFilm.overview }}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.film {
    padding: 30px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .container-film {
        margin-right: 70px;
        width: calc(100% / 3 - 80px);
        height: 100%;
        position: relative;
        margin-bottom: 40px;
        border: 1px solid white;

        .copertina {
            width: 100%;
            height: 460px;
            object-fit: cover;
        }

        .info_film {
            position: absolute;
            z-index: 900;
            background-color: rgb(0, 0, 0);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: white;
            padding: 30px 15px;
            line-height: 1.5;
            overflow: auto;

            span {
                color: rgb(200, 200, 200);
            }

            img {
                width: 30px;
                padding: 10px 0 5px;
            }

            .fa-solid.fa-star {
                color: rgb(168, 166, 166);
            }

            .fa-solid.fa-star.stellaPiena {
                color: #ffbd00;
            }
        }
    }
}
</style>
