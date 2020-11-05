<template>
    <div id="footer" class="row footer w-100 m-0 p-5 text-light ">
        <div class="col-12 mt-auto mx-auto text-center">
            <h1 class="display-4"> Did you like this website? </h1>   
            <h1 > Let's connect! </h1>
        </div>
        <div class="my-3 text-center border-bottom p-3 justify-content-center mx-auto col-12">
            <span class="social-icon mx-3">
                <button class="btn  ">
                    <a :href="'https://instagram.com/' + resume.instagram" class="text-light">
                        <i class="fab fa-3x fa-instagram" aria-hidden="true"></i>
                    </a>
                </button>
            </span>
            <span class="social-icon mx-3">
                <button class="btn  ">
                    <a :href="'https://github.com/' + resume.github" class="text-light">
                        <i class="fab fa-3x fa-github" aria-hidden="true"></i>
                    </a>
                </button>
            </span>
            <span class="social-icon mx-3">
                <button class="btn  ">
                    <a :href="resume.linkedin" class="text-light">
                        <i class="fab fa-3x fa-linkedin" aria-hidden="true"></i>
                    </a>
                </button>
            </span>
            <span class="social-icon mx-3">
                <button class="btn  ">
                    <a :href="'mailto:' + resume.email" class="text-light">
                        <i class="fas fa-3x fa-envelope-open" aria-hidden="true"></i>
                    </a>
                </button>
            </span>
        </div>
        <div class="col-12 my-2 border-bottom navbar justify-content-center">            
            <nav class="navbar text-uppercase font-weight-bold" >
                <a href="/" class="h4 mx-3 font-weight-bold text-light"> Home </a>
                <a href="/blogs" class="h4 mx-3 font-weight-bold text-light"> Blogs </a>                                
            </nav>
        </div>
        <div class="col-12 my-2 navbar p-3 justify-content-center">            
            <nav class="navbar text-uppercase " >
                <a href="#about" class="h6 mx-3  text-light"> About </a>
                <a href="#projects" class="h6 mx-3  text-light"> Projects </a>
                <a href="#education" class="h6 mx-3  text-light"> Education </a>
                <a href="#skills" class="h6 mx-3  text-light"> Skills </a>     
                <a href="#work" class="h6 mx-3  text-light"> work experience </a>                           
            </nav>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'Footer',
    props: {
        resume: Object
    }
}
</script>

<style>
   
   

</style>