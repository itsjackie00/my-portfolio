<template>
    <section class="container">
        <div class="row" id="main-content-bottom">
            <div class="col-xl-2 col-lg-3 col-sm-5">
                <div class="d-flex text-experience">
                    <div class="big-number">
                        <h1 class="text-white">3</h1>
                    </div>
                    <div class="text-white experience-text">
                        <h4 class="text-uppercase">Years of Experience</h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-5">
                <div class="d-flex text-experience">
                    <div class="big-number">
                        <h1 class="text-white">10</h1>
                    </div>
                    <div class="text-white experience-text">
                        <h4 class="text-uppercase">Projects Completed</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-7" id="icons-logo">
                <div class="d-flex flex-wrap justify-content-center">
                    <img class="img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/free-html5-41-1175209.png" alt="HTML logo">
                    <img class="img-fluid mx-3" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg" alt="CSS logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript logo" class="img-fluid mx-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2048px-Vue.js_Logo_2.svg.png" alt="Vue logo" class="img-fluid mx-3">
                    <img src="https://seekvectors.com/files/download/node%20js%20logo.png" alt="Node logo" class="img-fluid mx-3">
                    <img src="https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png" alt="Laravel logo" class="img-fluid mx-3">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainComponentBottom',
}
</script>

<style lang="scss" scoped>
/* Importo i font */
@import url('https://fonts.googleapis.com/css2?family=Playwrite+PL:wght@100..400&family=Rubik+Bubbles&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playwrite+PL:wght@100..400&family=Rubik+Bubbles&display=swap');

/* Stile di base per l'esperienza */
.text-experience {
    display: flex;
    align-items: center;

    h1 {
        font-size: 70px;
        margin: 0;
    }

    h4 {
        font-size: 20px;
        margin: 0;
    }

    .experience-text {
        width: 150px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .big-number {
        width: 100px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* Stile per le icone dei loghi */
#icons-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 50px;
        height: 50px;
        margin: 5px; /* Aggiunge uno spazio tra le immagini */
    }
}

/* Stile per il contenitore principale */
#main-content-bottom {
    background-color: #0E1630;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
}

/* Stili per la responsività */
@media (max-width: 992px) {
    .text-experience h1 {
        font-size: 50px; /* Riduce la dimensione del font sui tablet e schermi medi */
    }
    .text-experience h4 {
        font-size: 16px; /* Riduce la dimensione del font sui tablet e schermi medi */
    }
    .experience-text {
        width: 120px; /* Riduce la larghezza della casella di testo */
    }
}

@media (max-width: 768px) {
    .text-experience {
        flex-direction: column; /* Dispone verticalmente i numeri e i testi */
        align-items: center;
    }
    .big-number,
    .experience-text {
        width: auto; /* Adatta la larghezza al contenuto */
        text-align: center;
    }
    #icons-logo img {
        width: 40px; /* Riduce la dimensione delle icone */
        height: 40px;
    }
}

@media (max-width: 576px) {
    .text-experience h1 {
        font-size: 40px; /* Riduce ulteriormente la dimensione del font sui telefoni */
    }
    .text-experience h4 {
        font-size: 14px; /* Riduce ulteriormente la dimensione del font sui telefoni */
    }
    #icons-logo img {
        width: 30px; /* Riduce ulteriormente la dimensione delle icone */
        height: 30px;
    }
}
</style>
