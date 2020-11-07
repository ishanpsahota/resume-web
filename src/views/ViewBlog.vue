<template>
    <div id="vblog" class="row w-100 p-0 m-0">
        <vue-headful :title=title />               
        <div class="row blog-hero m-0 p-0" v-bind:style="{ 'background-image': 'url(\'' + blog.heroimg.image + '\')' }">
            <div class="col-12 d-flex blog-hero-txt">                
                <div class="col-12 my-auto">                    
                    <h1 class="display-4 d-none d-md-block"> {{blog.title}} </h1>
                    <h3 class="d-md-none"> {{blog.title}} </h3>
                    <h5  class=" blog-hero-caption"> {{blog.heroimg.caption}} </h5>                    
                </div>
            </div>
        </div>
        <div class="row w-100 m-0 border-bottom p-3 bg-light sticky-top justify-content-center text-center">
            <nav class="navbar nav  blog-links px-3 text-center">
                <a v-for="(block, i) in blog.blocks" :key="i" class=" px-3 text-dark" :href="'#' + block.name" > {{block.name}} </a>
            </nav>
        </div>
        <div v-for="(block, b_i) in blog.blocks" :key="b_i" class="row blog-content w-100 m-0 p-5" :id="block.name">
            <div class="col-11 col-md-6 p-2 p-md-4 d-flex blog-content-txt">
                <div class="m-auto col-12">
                    <span class="badge badge-pill bg-theme"> {{block.name}} </span>
                    <h1> {{block.heading}} </h1>
                    <p class="lead"> {{block.subheading}} </p>
                    <p> {{block.content}} </p>
                </div>
            </div>
            <div class="col-11 col-md-6 d-flex flex-column text-center blog-content-img">
                <img :src="block.image" class="m-auto img-fluid" />
                <p  class=" my-2 blog-hero-caption"> <small> {{block.caption}} </small> </p>                    
            </div>
        </div>
    </div>
</template>

<script>

import api from '../api/index'

export default {
    name: 'ViewBlog',
    data() {
        return {
            title: '',
            blog: '',
            loading: {
                blog: true
            },
            loaded: {
                blog: false
            },
            loadErr: {
                blog: false
            }
        }
    },

    methods: {

        getBlog()
        {
            this.loading.blog = true

            var id = this.$route.params.blogid

            console.log(id)

            api.getBlog(id)
            .then(res => {

                if(res.status === 200)
                {
                    this.loading.blog = false
                    this.loaded.blog = true
                    this.blog = res.data.blog
                    this.title = this.blog.title
                    console.log(this.blog)
                }

            })
        }

    },

    mounted() {
        this.getBlog();
    }
}
</script>

<style>

div
{
    scroll-behavior: smooth;
}

</style>