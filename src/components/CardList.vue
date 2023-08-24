<script >
import { store, getCardFromApi } from "../store"
import Card from "./Card.vue"


export default {
    components: {
        Card
    },
    data() {
        return {
            store

        }
    },

    methods: {

    },

    mounted() {
        getCardFromApi()
    }
}

</script>

<template>
    <div class="container my-cards-container">
        <div class="row row-cols-5 gy-4">
            <div class="col" v-for="singleCard in store.cardList">
                <Card :card="singleCard" ></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-cards-container{
    background-color: white;
    padding: 40px;

}
</style>
