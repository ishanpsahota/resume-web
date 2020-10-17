<template>
    <div id="rBar" class="p-0 sticky-top mt-5 pt-5">
        <div class="mt-4 p-2">
            <h5> <strong> Search </strong> </h5>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control w-100" type="text" placeholder="Search">            
            </form>
        </div>
        <div class="my-2 p-2">
            <h5> <strong> Recent Blogs </strong> </h5>
            <ul class="list-group ">
                <li v-for="blog in blogs" :key="blog.randomId" class="list-group-item border-0 social"> <i class="fa fa-angle-right" aria-hidden="true"></i> <a :href="'/blogs/' + blog.randomId" class=""> {{blog.title}} </a> </li>
            </ul>
        </div>
        <div class="my-2 p-2">
            <h5> <strong> Get In Touch </strong> </h5>
            <ul class="list-group  list-group-horizontal">
                <li class="list-group-item border-0 social"> <a href="https://instagram.com/ishanpsahota" class=""> <i class="fab fa-instagram fa-lg" aria-hidden="true"></i> </a> </li>
                <li class="list-group-item social border-0"> <a href="mailto:ishanprasad.sahota@gmail.com" class=""> <i class="fa fa-envelope fa-lg" aria-hidden="true"></i> </a> </li>
                <li class="list-group-item social border-0" > <a href="https://www.linkedin.com/in/ishan-prasad-b35a91181/" class=""> <i class="fab fa-linkedin fa-lg" aria-hidden="true"></i> </a> </li>
            </ul>
        </div>
        <div class="my-2 p-2">
            <h5> <strong> Quick Links </strong> </h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item p-1 social " > <a href="https://family-tree-i.netlify.app" class=""> Family Tree Creator </a> </li>
                <li class="list-group-item p-1  social"> <a href="https://ishanpsahota.00webhostapp.com" class=""> Resume Website 1.0 </a> </li>                
                <li class="list-group-item p-1 social "> <a href="https://insomniacsblogger.herokuapp.com" class=""> Blog Website - ExpressJS </a> </li>
                <li class="list-group-item p-1 social " > <a href="https://insomniacsblog.000webhostapp.com" class=""> Blog Website - CorePHP Version </a> </li>
            </ul>
        </div>
    </div>
</template>

<script>

import api from '../api/index'

export default {

    name: 'RightBar',
    data() {
        return {
            blogs: []
        }
    },

    methods: {

        getBlogs()
        {
            api.getBlogs()
            .then(res => {
                var bArray = res.data.blogs
                var length = bArray.length

                for (let index = length-1; index > -1; index--) {
                    this.blogs.push(bArray[index])
                }

                if(length > 5) this.blogs.length = 5;

            })
        }

    },

    mounted() 
    {
        this.getBlogs();
    }

}
</script>

<style scoped>

    .social > a
    {
        color: #000
    }
    .social > a:hover
    {
        color: #2e9cca;
        transition: 0.75s;
        text-decoration: none;
    }

    #rBar
    {
        z-index: 0;
    }
</style>