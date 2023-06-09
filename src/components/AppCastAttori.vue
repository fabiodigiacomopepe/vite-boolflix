<script>
import { store } from '../store';

export default {
    name: "AppCastAttori",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div v-if="store.attoriFilm.length > 0 && store.mostraAttori === 'attoriFilm'">
        <li v-for="attore in store.attoriFilm">
            - {{ attore }}
        </li>
    </div>
    <div v-else-if="store.mostraAttori === 'attoriFilm'">
        - Lista attori FILM non presente
    </div>

    <div v-if="store.attoriSerie.length > 0 && store.mostraAttori === 'attoriSerie'">
        <li v-for="attore in store.attoriSerie">
            - {{ attore }}
        </li>
    </div>
    <div v-else-if="store.mostraAttori === 'attoriSerie'">
        - Lista attori SERIE non presente
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

div {
    color: rgb(200, 200, 200);
}
</style>
