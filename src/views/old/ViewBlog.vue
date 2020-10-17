<template>
    <div id="vblog" class="row w-100 p-0 m-0">
        <vue-headful :title=title />               
        <div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row" id="me">
            <div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-left">
                <h1 class="display-1"> {{blog.title}} </h1>
                
            </div>
            <div  class="col-12 col-md-6 m-auto">
                <img :src="blog.heroimg.image" class="pimg img-fluid my-auto rounded shadow-lg">
                <small v-if="blog.heroimg.caption"> {{blog.heroimg.caption}} </small>
                <small v-else> Caption Here </small>
            </div>
        </div>
        <div v-for="(block, i) in blog.blocks" :key="i" class="row w-100 p-1 m-0">
            <div v-if="i / 2 != 0" class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row" :id="block.name">                
                <div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-left">
                    <span class="badge badge-pill px-3 py-1 bg-warning"> {{block.name}} </span>
                    <h1 class="display-4 my-2"> {{block.heading}} </h1>
                    <h1> {{block.subheading}} </h1>
                    <p class="h5 my-2"> {{block.content}} </p>
                </div>
                <div  class="col-12 col-md-6 m-auto">
                    <img :src="block.image" :alt="block.heading" class="pimg img-fluid my-auto rounded shadow-lg">
                </div>
            </div>
            <div v-if="i / 2 == 0" class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row-reverse" :id="block.name">
                <div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-right">
                    <span class="badge badge-pill px-3 py-1 bg-warning"> {{block.name}} </span>
                    <h1 class="display-4 my-2"> {{block.heading}} </h1>
                    <h3> {{block.subheading}} </h3>
                    <p class="h5  border-top py-2 font-weight-bold my-2"> {{block.content}} </p>
                </div>
                <div data-aos="fade-down" class="col-12 col-md-6 m-auto">
                    <img :src="block.image" :alt="block.heading" class="pimg img-fluid my-auto rounded shadow-lg">
                </div>
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

            api.getBlog(id)
            .then(res => {

                if(res.status === 200)
                {
                    this.loading.blog = false
                    this.loaded.blog = true
                    this.blog = res.data.blog
                    this.title = this.blog.title
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

</style>