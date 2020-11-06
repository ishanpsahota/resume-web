<template>
    <div class="row m-0 p-4 fullsize bg-gray" id="education">                    
        <div class="col-12 m-auto text-center">
            <h1 class="display-4 d-none d-md-block"> EDUCATION </h1>
            <h1 class="d-md-none"> EDUCATION </h1>
            <blockquote class="blockquote">
                The more I learn, the less I know
                <footer class="blockquote-footer"> Albert Einsten </footer>
            </blockquote>
        </div>                          
        <div class="row w-100 m-0 p-0 mb-auto justify-content-center">
            <div v-for="(edu, e_i) in education" :key="e_i" class=" edu-box card rounded-0 m-2 p-4 text-center col-10 col-sm-6 col-md-4 col-lg-3 ">                                                            
                <h2 class="card-title d-none d-md-block"> {{edu.title}} </h2>
                <h4 class="card-title d-block d-md-none "> {{edu.title}} </h4>
                <div class="card-body">
                    <p class="lead">
                        {{edu.institute}}
                    </p>
                    <p class="card-text gpa">
                        {{edu.gpa}}
                    </p>
                </div>
            </div>                            
        </div>                    
    </div>   
</template>

<script>
export default {

    name: 'Education',
    props: {

        education: Array

    }

}
</script>

<style>

</style>