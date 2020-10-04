<template>
    <div id="blogs" class="row w-100 m-0 p-0 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
        <div class="col-12">
            <h1 class="display-1"> Blogs </h1>
            <div v-if="loader">
                <h1 class="display-4"> Fetching blogs for you. </h1>
                <div class="spinner-border text-dark"></div>
            </div>
            <div v-else class="row w-100 m-0 p-0">
                <div v-if="blogs.length > 0">
                    <div v-for="blog in blogs" :key="blog.randomId" class="card col-12 col-md-4">
                        <img v-if="blog.heroimg.image" :src="blog.heroimg.image" :alt="blog.title" class="img-fluid card-img-top">
                        <img v-else src="../assets/images/default.jpg" class="card-img-top img-fluid" :alt="blog.title" />
                        <div class="card-body text-center">
                            <a :href="'/blogs/' + blog.randomId " class="text-dark">
                                <h1 class="card-title "> {{blog.title}} </h1>                            
                            </a>    
                            <span class="badge badge-pill bg-theme"> {{getDate(blog.date)}} </span>
                        </div>
                    </div>
                </div>
                <div v-else-if="blogErr">
                    <div class="alert alert-danger" role="alert">
                        <strong>Error!</strong> {{blogErr}}
                    </div>
                </div>
                <div v-else>
                    <h3> No blog present for now. Wait for the creator to add some! </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import api from '../api/index'
// import cryptoJs from 'crypto-js'

export default {
    name: 'Blogs',
    components: {

    },
    data() {
        return {
            title: 'Blogs',
            blogs: [],
            loader: true,
            blogErr: false
        }
    },
    
    methods: {

        getBlogs()
        {
            this.loader = true;            

            api.getBlogs()
            .then(res => {
                if(res.status == 200)
                {
                    // if(res.data.status === 200)
                    // {
                        this.loader = false
                        this.blogs = res.data.blogs
                    // }
                }                
            }).catch(err => {
                this.loader = false
                this.blogErr = err
            })
        },

        getPath(title)
        {
            return title.toLowerCase().split(" ").join("-")
        },

        getDate(date)
        {
            const d = new Date(date)                
            return d.toLocaleString()
        }

    },

    mounted() {

        this.getBlogs()
        this.getDate()

    }
}
</script>

<style>

</style>