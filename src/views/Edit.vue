<template>
    <div id="edit" class="row w-100 m-0 p-0 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
        <div class="row w-100 p-0 m-0">
            <h1 class="display-3"> Edit </h1>
            <div class="col-12 border-bottom p-3">
                <h1 class=""> Your Blogs </h1>
                <div class="row w-100 p-0 m-0">
                    <div v-if="blogs.length > 0">
                    <div v-for="blog in blogs" :key="blog.randomId" class="card col-12 col-md-3 shadow-sm p-0">
                        <img v-if="blog.heroimg.image" :src="blog.heroimg.image" :alt="blog.title" class="img-fluid card-img-top">
                        <img v-else src="../assets/images/default.jpg" class="card-img-top img-fluid" :alt="blog.title" />
                        <div class="card-body text-center">
                            <a :href="'/blogs/' + getPath(blog.title) " class="text-dark">
                                <h1 class=" "> {{blog.title}} </h1>                            
                            </a>    
                            <span class="badge badge-pill badge-dark"> {{getDate(blog.date)}} </span>
                        </div>
                        <div class="card-footer m-0 text-center">
                            <button type="button" class="btn btn-dark m-1"> <i class="fas fa-edit    "></i> </button>
                            <button type="button" class="btn btn-danger m-1"> <i class="fas fa-trash    "></i> </button>
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
            <div class="col-12 p-3 border-bottom">
                <h1 class=""> Your Details </h1>
                <div class="row w-100 p-0 m-0">
                    <div v-if="self">                        
                    </div>
                    <div v-else>
                        <h3> No blogs present. Add one <a href="/new"> now! </a> </h3>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>

import api from '../api/index'

export default {
    name: 'Edit',
    data() {
        return {
            title: 'Edit',
            blogs: [],
            self: []
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
                    if(res.data.status === 200)
                    {
                        this.loader = false
                        this.blogs = res.data.blogs
                    }
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

    }
}
</script>

<style>

</style>