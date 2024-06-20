<template>
    <nav class="container text-white">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
            <img id="nav-logo" src="/src/assets/img/Screenshot 2024-06-20 at 18.41.05.png" alt="JW lOGO">
            <div id="nav-list">
                <ul class="d-flex flex-wrap">
                    <li><a href="#" class="active px-4"> Home</a></li>
                    <li><a href="#" class="px-4"> About</a></li>
                    <li><a href="#" class="px-4"> Services</a></li>
                    <li><a href="#" class="px-4"> Contact</a></li>
                    <li><a href="#" class="px-4"> Blog</a></li>
                    <li><a href="#" class="px-4"> Projects</a></li>
                </ul>
            </div>
            <div id="nav-social">
                <a href="https://github.com/itsjackie00?tab=repositories">
                    <i class="fa-brands fa-github px-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/jacqueline-wuaku/">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComponent',
}
</script>

<style lang="scss" scoped>
nav{
    padding-top: 50px;
    padding-bottom: 50px;
}
#nav-logo{
    width: 90px;
    height: 90px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 1px solid #007bff;
}
ul{
    list-style: none;
}
ul li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
    padding: 0px 10px;
    border-bottom: 1px solid transparent; 

    &.active{
        color: #007bff;
    }

    &:hover{
        color: #007bff;
        border-bottom: 3px solid #007bff;
    }

}
#nav-social{
    a{
        text-decoration: none;
        color: white;
        font-size: 25px;
        padding: 0px 10px;

        &:hover{
            color: #007bff;
        }
    }
}
</style>