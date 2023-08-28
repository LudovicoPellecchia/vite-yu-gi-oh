<script >
import { getArchetypesFromApi, store } from "../store"


export default {
    data() {
        return {
            store
        }
    },
    mounted(){
        getArchetypesFromApi()
    }

}
</script>

<template>
    <div class="container">
        <select class="form-select mb-4 w-25" aria-label="Default select example">
            <option value=0 > Seleziona Archetipo</option>
            <option value=0 v-for="(item) in store.archetypes">{{item}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>
