<template>
    <div class="row w-100 p-md-5 p-3 my-1 border-bottom">
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">
            <a :href="project.url" :class="getMode() "> 
                <h1> <strong> {{project.title}} </strong> </h1>
            </a>
            <img :src="project.pic" class="img rounded shadow" >
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <ul class="list-group" >
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; 
                    <a :href="project.url" class="text-dark btn-lg btn btn-warning"> Visit <i class="fa fa-link" aria-hidden="true"></i> </a>
                </li>															
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; {{project.duration}} </li>
                <li class="list-group-item bg-transparent border-0 h4 font-italic lead"> &nbsp;  {{project.details}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Projects',
    props: {
        project: Object
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