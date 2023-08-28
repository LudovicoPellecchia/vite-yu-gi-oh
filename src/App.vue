<script >
import NavBar from "./components/NavBar.vue"
import CardList from "./components/CardList.vue"
import FilterSelect from "./components/FilterSelect.vue"

export default {
    components: {
        NavBar,
        CardList,
        FilterSelect,
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <header>
        <NavBar></NavBar>
    </header>
    <main>
        <FilterSelect></FilterSelect>
        <CardList></CardList>
    </main>
</template>

<style lang="scss" >
main {
    padding: 40px;
    background-color: orange;
}

.card-container {
    background-color: white;
}
</style>
