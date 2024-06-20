<template>
    <div class="row" id="main-content-bottom">
        <div class="col-2">
            <div class="d-flex text-experience">
                <div class="big-number">
                    <h1 class="text-white">3</h1>
                </div>
                <div class="text-white experience-text">
                    <h4 class="text-uppercase">Years of Experience</h4>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="d-flex text-experience">
                <div class="big-number ">
                    <h1 class="text-white">10</h1>
                </div>
                <div class="text-white experience-text">
                    <h4 class="text-uppercase">Projects Completed</h4>
                </div>
            </div>
        </div>
        <div class="col-6" id="icons-logo">
            <div class="d-flex">
                <img class="img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/free-html5-41-1175209.png"
                    alt="HTML logo">
                <img class="img-fluid mx-3" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg"
                    alt="CSS logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="Javascript logo" class="img-fluid mx-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2048px-Vue.js_Logo_2.svg.png"
                    alt="Vue logo" class="img-fluid mx-3">
                <img src="https://seekvectors.com/files/download/node%20js%20logo.png" alt="Node logo"
                    class="img-fluid mx-3">
                <img src="https://download.logo.wine/logo/Laravel/Laravel-Logo.wine.png" alt="Laravel logo"
                    class="img-fluid mx-3">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainComponentBottom',
}
</script>

<style lang="scss" scoped>
.text-experience {
    width: 25%;

    h1 {
        font-size: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    h4 {
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .experience-text {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    .big-number {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
}

#icons-logo {
    img {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
}

#main-content-bottom {
    background-color: #0E1630;
    padding: 10px;
    margin-top: -40px;
    padding: 20px;
}

.debug {
    border: 2px solid red;
}
</style>