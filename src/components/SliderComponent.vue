<template>
    <div class="slider">
        <button class="nav-button prev" @click="scrollPrev">&#10094;</button>
        <div class="slider-container" ref="sliderContainer">
            <img class="img-fluid" src="/public/img/Vite-App-img.png" alt="Netflix">
            <img class="img-fluid" src="/public/img/dc-comics.png" alt="Dc Comics">
            <img class="img-fluid" src="/public/img/Screenshot.png" alt="Yugi-Oh">
            <img class="img-fluid" src="/public/img/Boolando.png" alt="Boolando">
            <img class="img-fluid" src="/public/img/Buzzap.png" alt="Buzzap">
            <img class="img-fluid" src="/public/img/Screenshot 2024-06-22 at 14.17.09.png" alt="">
            <img class="img-fluid" src="/public/img/Dropbox.png" alt="Dropbox">
            <img class="img-fluid" src="/public/img/Our Team.png" alt="Our team">
            <img class="img-fluid" src="/public/img/Bootstrap-Dashboard.png" alt="Bootstrap Dashboard">
            <img class="img-fluid" src="/public/img/Discord.png" alt="Discord">
            <img class="img-fluid" src="/public/img/Biglietto-treno-form.png" alt="Biglietto treno form">
            <img class="img-fluid" src="/public/img/To-do-list.png" alt="To do list">

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

.slider-container img {
    width: 700px;
    height: 400px;
    object-fit: cover;
    margin-right: 30px;
    scroll-snap-align: start;
    border-radius: 10px;
    
}
</style>