<script>
import { store } from '../store';
import axios from 'axios';
import AppCastAttori from './AppCastAttori.vue';

export default {
    name: "AppSerieSingleCard",
    components: {
        AppCastAttori
    },
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
            store.mostraAttori = "attoriSerie";
        },
        rimuoviInfo() {
            this.mouseSopraCopertina = "";
        },
        trovaAttori(serieSingolo) {
            let myUrlSerieCast = `${store.apiUrl}/tv/${serieSingolo.id}/credits?api_key=${store.apiKey}`;

            axios
                .get(myUrlSerieCast)
                .then(
                    risultato => {
                        store.arraySerieCast = [];
                        store.attoriSerie = [];
                        store.arraySerieCast.push(risultato.data.cast);
                        /*  console.log(store.arraySerieCast[0]); */
                        for (let i = 0; i < 5; i++) {
                            if (store.arraySerieCast[0][i] !== undefined) {
                                store.attoriSerie.push(store.arraySerieCast[0][i].original_name);
                            }
                        }
                        /*      console.log(store.attoriSerie); */
                    })
                .catch(errore => {
                    console.log(errore);
                })
        }
    }
}
</script>

<template>
    <ul class="serie">
        <li class="container-serie" v-for="(elSerie, index) in store.arraySerie" :key="index" @mouseover="mostraInfo(index)"
            @mouseleave="rimuoviInfo()">
            <div>
                <img class="copertina" :src="`${store.apiImgCopertina}${store.apiImgSize}${elSerie.poster_path}`"
                    :alt="`${elSerie.original_title}`" onerror="this.src='src/assets/img/filmorserienotfound.png'">
            </div>

            <div class="info_serie" v-if="mouseSopraCopertina === index">
                <div>Titolo: <span>{{ elSerie.name }}</span></div>
                <div>Titolo originale: <span>{{ elSerie.original_name }}</span></div>

                <div>
                    <img :src="`src/assets/img/${elSerie.original_language}.png`"
                        :alt="`${elSerie.original_language.toUpperCase()}`"
                        onerror="this.src='src/assets/img/international.jpg'">
                </div>

                <div>
                    Voto:
                    <i class="fa-solid fa-star" v-for="(n, index1) in 5" :key="index1"
                        :class="(trasformaVoto(elSerie.vote_average) >= n) ? 'stellaPiena' : ''">
                    </i>
                </div>

                <div>
                    Overview: <span>{{ elSerie.overview }}</span>
                </div>

                <div>
                    Attori:{{ trovaAttori(elSerie) }}
                    <AppCastAttori />
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.serie {
    padding: 30px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .container-serie {
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

        .info_serie {
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
