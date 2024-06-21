<template>
    <section class="container">
        <div id="text-starter">
            <strong class="fs-1 mt-5 animated-fade-in">Hello <i class="fa-solid fa-hand"></i>,</strong>
        </div>
        <div class="d-flex">
            <div id="text-main" class="text-white">
                <div id="text-name" class="animated-slide-in">
                    I'm a Jr Full Stack Web Developer
                </div>
                <div class="socials">
                    <a href="https://github.com/itsjackie00?tab=repositories" class="social-icon">
                        <i class="fs-1 fa-brands fa-github px-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jacqueline-wuaku/" class="social-icon">
                        <i class="fs-1 fa-brands fa-linkedin-in mx-5"></i>
                    </a>
                </div>
                <button class="btn d-block mb-5 my-btn animated-button">View Projects</button>
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
    width: 100%;
    color: #9FA3AB;
}

.my-btn {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 20px;
    width: 30%;
    background-color: #465ABB;
    /* Base color */
    background-image: linear-gradient(to bottom, transparent 0%, #00BCD4 100%);
    border: none;
    border-radius: 10px;
    color: white;
    transition: transform 0.3s ease; /* Smooth grow effect on hover */

    &:hover {
        transform: scale(1.05);
    }
}

#text-main {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 55px;
    letter-spacing: 5px;
    color: #9FA3AB;
    text-shadow: 0px 0px 10px #465ABB;
    width: 580px;
    opacity: 0; /* Start hidden for the fade-in effect */
    animation: fadeIn 2s forwards; /* Fade in animation on load */
}

.socials {
    i {
        color: white;
        transition: transform 0.3s ease; /* Smooth transition on hover */

        &:hover {
            color: #007bff;
            transform: scale(1.2); /* Grow effect on hover */
        }
    }
}

.animated-fade-in {
    opacity: 0; /* Start hidden for the fade-in effect */
    animation: fadeIn 2s forwards; /* Fade in animation */
}

.animated-slide-in {
    opacity: 0; /* Start hidden for the slide-in effect */
    transform: translateX(-100%); /* Start off-screen to the left */
    animation: slideIn 2s forwards; /* Slide in animation */
}

.animated-button {
    opacity: 0; /* Start hidden for the fade-in effect */
    animation: fadeIn 3s forwards; /* Fade in animation with a delay */
}

/* Keyframes for animations */
@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateX(0); /* Slide into place */
    }
}
</style>
