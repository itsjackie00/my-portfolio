<template>
    <nav class="container text-white p-5">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
            <img id="nav-logo" src="/src/assets/img/Screenshot 2024-06-20 at 18.41.05.png" alt="JW lOGO">
            <div id="nav-list">
                <ul class="d-flex flex-wrap">
                    <li><a href="#" class="active"> Home</a></li>
                    <li><a href="#"> About</a></li>
                    <li><a href="#"> Services</a></li>
                    <li><a href="#"> Contact</a></li>
                    <li><a href="#"> Blog</a></li>
                    <li><a href="#"> Projects</a></li>
                </ul>
            </div>
            <div id="nav-social">
                <a href="https://github.com/itsjackie00?tab=repositories">
                    <i class="fa-brands fa-github"></i>
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
#nav-logo{
    width: 100px;
    height: 100px;
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