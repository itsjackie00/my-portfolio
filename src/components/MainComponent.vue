<template>
    <section class="container">
        <div id="text-starter">
            <strong class="fs-1 mt-5">I'm a</strong>
        </div>
        <div class="d-flex">
            <div id="text-main" class="text-white">
                Jr Full Stack Web Developer
                <div id="socials" class="">
                    <a href="https://github.com/itsjackie00?tab=repositories">
                        <i class="fa-brands fa-github px-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jacqueline-wuaku/">
                        <i class="fa-brands fa-linkedin-in mx-5"></i>
                    </a>
                </div>
                <button id="view-projects-btn" class="btn d-block mb-5">View Projects</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainComponent',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+PL:wght@100..400&family=Rubik+Bubbles&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playwrite+PL:wght@100..400&family=Rubik+Bubbles&display=swap');

#text-starter {
    font-family: "Playwrite PL", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 50%;
    width: 100%;
    width: 100%;
    color: #9FA3AB;
    text-shadow: 0px 0px 10px #465ABB;
}
#view-projects-btn {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 20px;
    width: 30%;
    background-color: #465ABB; /* Base color */
  background-image: linear-gradient(to bottom, transparent 0%, #00BCD4 100%);
    border: none;
    border-radius: 10px;
    color: white;


}

#text-main {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    color: #9FA3AB;
    text-shadow: 0px 0px 10px #465ABB;
    width: 600px;

}
</style>