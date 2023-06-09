<script>
import AppSearch from './AppSearch.vue';

export default {
    name: "AppHeader",
    components: {
        AppSearch
    }
}
</script>

<template>
    <header>
        <div>
            <img src="./../assets/img/logo.png" alt="logo">
        </div>

        <nav>
            <AppSearch @ricercaOnSearch="$emit('ricercaOnHeader')" />
        </nav>
    </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px 10px;

    img {
        width: 120px;
        position: relative;
        right: 10px;
        top: 2px;
    }
}
</style>
