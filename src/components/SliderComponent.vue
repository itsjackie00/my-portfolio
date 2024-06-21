<template>
    <div class="slider">
        <button class="nav-button prev" @click="scrollPrev">&#10094;</button>
        <div class="slider-container" ref="sliderContainer">
            <img class="img-fluid" src="/public/img/Vite-App-img.png" alt="Netflix">
            <img src="/public/img/dc-comics.png" alt="Dc Comics">
            <img src="/public/img/Screenshot.png" alt="Yugi-Oh">
            <img src="/public/img/Boolando.png" alt="Boolando">
            <img class="img-fluid" src="/public/img/Buzzap.png" alt="Buzzap">

        </div>
        <button class="nav-button next" @click="scrollNext">&#10095;</button>
    </div>
</template>



<script>
export default {
    name: 'SliderComponent',
    methods: {
        scrollNext() {
            const slider = this.$refs.sliderContainer;
            slider.scrollBy({ left: 300, behavior: 'smooth' }); // Scorri 300px a destra
        },
        scrollPrev() {
            const slider = this.$refs.sliderContainer;
            slider.scrollBy({ left: -300, behavior: 'smooth' }); // Scorri 300px a sinistra
        }
    }
}

</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

.slider-container {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    width: 100%;
    scroll-snap-type: x mandatory;
}

.slider-container::-webkit-scrollbar {
    display: none;
    /* Nascondi la scrollbar */
}


.nav-button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 2em;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    padding: 10px;
    border-radius: 50%;
}

.nav-button.prev {
    left: 10px;
}

.nav-button.next {
    right: 10px;
}

.nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>