<script >
import NavBar from "./components/NavBar.vue"
import CardList from "./components/CardList.vue"

export default {
    components: {
        NavBar,
        CardList,
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
