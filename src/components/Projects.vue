<template>
    <div class="row m-0 w-100 p-3 fullsize " id="projects">  
        <div class="col-12 p-5 my-auto text-center">
            <h1 class="display-4"> PROJECTS </h1>
        </div>
        <div class="col-12 m-auto p-0">                        
            <div class="row p-0 mx-auto justify-content-center ">                            
                <div class="img-box-wrapper col-lg-3 col-md-4 col-sm-6 col-10 mx-2 my-4 text-center" v-for="(project, p_i) in projects" :key="p_i">
                    <div class="img-box" v-bind:style="{ 'background-image': 'url(\'' + project.pic + '\')' }">                                    
                        <div class="img-box-txt d-flex flex-column text-center p-3 h-100 w-100 text-light">
                            <h5 class="mx-auto mt-auto mb-1">
                                {{project.title}}
                            </h5>
                            <a class="btn mx-auto mb-auto mt-1 btn-outline-light rounded-0" :href="project.url">
                                View Project
                            </a>
                        </div>
                    </div>                                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Projects',
    props: {
        projects: Array
    },
    data() 
    {
        return {

            mode: ''

        }
    },

    methods: {

        getMode()
        {
            if(this.mode == 'dark')
            {
                return " bg-theme text-light "
            }
            else return " bg-light text-dark "
        }

    },

    beforeMount()
    {
        this.mode = localStorage.getItem('mode')
    },

    beforeUpdate()
    {
        this.mode = localStorage.getItem('mode')
    }

}
</script>

<style>

</style>