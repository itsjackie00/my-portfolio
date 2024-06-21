<template>
    <nav class="container text-white" id="nav">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
            <img id="nav-logo" src="/src/assets/img/Screenshot 2024-06-20 at 18.41.05.png" alt="JW Logo"
                class="nav-logo">
            <div id="nav-list">
                <ul class="d-flex flex-wrap">
                    <li><a href="#" class="active px-4 nav-item">Home</a></li>
                    <li><a href="#" class="px-4 nav-item">About</a></li>
                    <li><a href="#" class="px-4 nav-item">Services</a></li>
                    <li><a href="#" class="px-4 nav-item">Contact</a></li>
                    <li><a href="#" class="px-4 nav-item">Blog</a></li>
                    <li><a href="#" class="px-4 nav-item">Projects</a></li>
                </ul>
            </div>
            <button class="btn btn-hire-me animated-pulse">Hire Me</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComponent',
    mounted() {
        // Add event listener for sticky navigation
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        // Remove event listener when component is destroyed
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

nav {
    padding-top: 30px;
    padding-bottom: 50px;
    position: relative;
    width: 100%;
    // background-color: #222;
    z-index: 10;
    transition: all 0.3s ease-in-out;

    &.sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        background-color: #222;
        padding-top: 20px;
        padding-bottom: 20px;
    }
}

#nav-logo {
    width: 90px;
    height: 60px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 1px solid #007bff;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 10px #007bff;
    }
}

ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

ul li {
    animation: slideIn 0.5s forwards;
    opacity: 0;

    &:nth-child(1) {
        animation-delay: 0.2s;
    }

    &:nth-child(2) {
        animation-delay: 0.4s;
    }

    &:nth-child(3) {
        animation-delay: 0.6s;
    }

    &:nth-child(4) {
        animation-delay: 0.8s;
    }

    &:nth-child(5) {
        animation-delay: 1s;
    }

    &:nth-child(6) {
        animation-delay: 1.2s;
    }
}

ul li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
    padding: 0px 10px;
    border-bottom: 1px solid transparent;
    transition: color 0.3s ease, transform 0.3s ease, border-bottom 0.3s ease;

    &.active {
        color: #007bff;
    }

    &:hover {
        color: #007bff;
        border-bottom: 1px solid #007bff;
        transform: scale(1.05);
    }
}

.btn-hire-me {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 20px;
    width: 12%;
    background-color: #465ABB;
    background-image: linear-gradient(to bottom, transparent 0%, #00BCD4 100%);
    border: none;
    border-radius: 10px;
    color: white;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 10px #00BCD4;
    }
}

/* Keyframes for animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated-pulse {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}
</style>
