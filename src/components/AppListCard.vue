<script>
import { store } from '../store';
import AppFilmSingleCard from './AppFilmSingleCard.vue';
import AppSerieSingleCard from './AppSerieSingleCard.vue';

export default {
    name: "AppListCard",
    data() {
        return {
            store
        }
    },
    components: {
        AppFilmSingleCard,
        AppSerieSingleCard
    }
}
</script>

<template>
    <section>
        <div v-if="store.arrayFilm.length > 0">
            <h2>- Film</h2>
            <AppFilmSingleCard />
        </div>
        <div v-else>
            <h2>- Nessun FILM presente per questa ricerca</h2>
        </div>

        <div v-if="store.arraySerie.length > 0">
            <h2>- Serie</h2>
            <AppSerieSingleCard />
        </div>
        <div v-else>
            <h2>- Nessuna SERIE presente per questa ricerca</h2>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section {
    padding: 20px;

    div {
        margin-bottom: 100px;

        h2 {
            margin-left: 20px;
            color: white;
            font-size: 40px;
        }
    }
}
</style>
