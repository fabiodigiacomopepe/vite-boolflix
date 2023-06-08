<script>
import AppFilmSingleCard from './AppFilmSingleCard.vue';
import AppSerieSingleCard from './AppSerieSingleCard.vue';

export default {
    name: "AppListCard",
    components: {
        AppFilmSingleCard,
        AppSerieSingleCard
    }
}
</script>

<template>
    <section>
        <div>
            <h2>- Film</h2>
            <AppFilmSingleCard />
        </div>

        <div>
            <h2>- Serie</h2>
            <AppSerieSingleCard />
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
