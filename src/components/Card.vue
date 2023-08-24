<script >


export default {
    props: {
        card: Object,
    }
    
}
</script>

<template>
    <div class="card my-card">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="">
        <div class="card-body">
            <h4>{{ card.name }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-card{
    height: 100%;
    background-color: orange;


    h4{
        color: white;
    }

}

</style>