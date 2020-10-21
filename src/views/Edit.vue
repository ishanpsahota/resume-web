<template>
    <div id="edit" class="row w-100 m-0 p-4 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
        <div class="row w-100 p-0 m-0 text-light">
            <h1 class="display-3"> Edit </h1>
            <div class="col-12 border-bottom p-3">
                <button class="btn bg-theme text-right float-right btn-md" type="button" @click="getBlogs()"> <i class="fas fa-sync-alt    "></i> Refresh </button>
                <button class="btn bg-theme text-right float-right btn-md" type="button" @click="push(null, 'newblog')"> <i class="fa fa-plus" aria-hidden="true"></i> New </button>
                <h1 class=""> Your Blogs </h1>
                <div class="row w-100 p-0 m-0">
                    <div v-if="loading.blogs" class="spinner-border text-theme"> </div>
                    <div v-if="blogs.length > 0">
                    <div v-for="(blog, i) in blogs" :key="i" class="card bg-theme border text-lightcol-12 col-lg-3 col-md-4 col-sm-6 shadow-sm p-0">                        
                        <img v-if="blog.heroimg.image" :src="blog.heroimg.image" :alt="blog.title" class="img-fluid card-img-top">
                        <img v-else src="../assets/images/default.jpg" class="card-img-top img-fluid" :alt="blog.title" />
                        <div class="card-body text-center">
                            <a :href="'/blogs/' + blog.randomId " class="text-light">
                                <h1 class=" "> {{blog.title}} </h1>                            
                            </a>    
                            <span class="badge badge-pill badge-dark"> {{getDate(blog.date)}} </span>
                        </div>
                        <div class="card-footer m-0 text-center">
                            <!-- edit button -->
                            <button type="button" data-toggle="tooltip" title="Edit" data-placement="bottom" class="btn btn-dark m-1" @click="push(blog.randomId)"> <i class="fas fa-edit    "></i> </button>
                            <!-- delete buttons -->
                            <button type="button" v-if="load.delete[i].delete && blog.status == 1" data-toggle="tooltip" title="Delete" data-placement="bottom" class="btn btn-danger m-1" @click="deleteBlog(blog.randomId, i)"> <i class="fas fa-trash    "></i> </button>
                            <button type="button" v-if="loading.delete[i].delete" disabled  class="btn btn-danger m-1" > <div class="spinner-border"> </div> </button>
                            <!-- <button type="button" v-if="loaded.delete[i].delete"  disabled  class="btn btn-danger m-1" > <i class="fa fa-check-circle" aria-hidden="true"></i> </button>
                            <button type="button" v-if="loadErr.delete[i].delete" disabled  class="btn btn-danger m-1" > <i class="fa fa-exclamation" aria-hidden="true"></i> </button> -->
                            
                            <!-- show button -->
                            <button type="button" v-if="load.show[i].show && blog.status == 0" data-toggle="tooltip" title="Show Blog" data-placement="bottom" class="btn btn-success" @click="showBlog(blog.randomId, i)">  <i class="fa fa-eye" aria-hidden="true"></i> </button>
                            <button type="button" v-if="loading.show[i].show" disabled  class="btn btn-success m-1" > <div class="spinner-border"> </div> </button>
                            <!-- <button type="button" v-if="loaded.show[i].show"  disabled  class="btn btn-success m-1" > <i class="fa fa-check-circle" aria-hidden="true"></i> </button>
                            <button type="button" v-if="loadErr.show[i].show" disabled  class="btn btn-success m-1" > <i class="fa fa-exclamation" aria-hidden="true"></i> </button> -->

                            <!-- errormsg -->
                            <p v-if="loadErr.delete[i].delete == true && error.delete"> Delete Error!  </p>
                            <p v-if="loadErr.delete[i].delete == true && error.show"> Show Blog Error!  </p>
                        </div>
                    </div>
                </div>
                <div v-else-if="loadErr.blog">
                    <div class="alert alert-danger" role="alert">
                        <strong>Error!</strong> {{error.blog}}
                    </div>
                </div>
                <div v-else>
                    <h3> No blog present for now. Wait for the creator to add some! </h3>
                </div>
                </div>
            </div>
            <div class="col-12 p-3 border-bottom">
                <button class="btn bg-theme border text-right float-right btn-md" type="button" @click="getResume()"> <i class="fas fa-sync-alt    "></i> Refresh </button>
                <h1 class=""> Your Details </h1>
                <div class="row w-100 p-0 m-0">
                    <div v-if="loading.resume" class="spinner-border text-theme"> </div>
                    <div v-if="resume">
                        <div class="card bg-theme border text-center">
                            <img :src="resume.profile" class="card-img-top card-img">
                            <div class="card-body">
                                <h1> {{resume.name}} </h1>
                                <!-- <div v-for="block in resume.blocks" :key="block.name">
                                    <div class="card">
                                        <button class="btn bg-theme" type="button" data-toggle="collapse" :data-target="block.name">
                                            {{block.name}}
                                        </button>
                                        <img :src="block.image" class="card-img card-img-top">
                                        <div class="card-body collapse " :id="block.name">
                                            <h4> {{block.heading}} </h4>
                                            <p> {{block.subheading}} </p>
                                            <span class="badge badge-pill px-3 py-2 bg-theme"> {{block.name}} </span>
                                            <ul class="list-group">
                                                <li class="list-group-item" v-for="(list, i) in block.list" :key="i">
                                                    {{list}}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>                                    
                                </div> -->
                            </div> 
                            <div class="card-footer">
                                <a :href="'https://instagram.com' + resume.instagram" class="text-light">
                                    <button class="btn bg-primary  m-1 text-light " type="button"> <i class="fab fa-instagram    "></i> </button>
                                </a>
                                <a :href="resume.linkedin" class="text-light">
                                    <button class="btn bg-primary  m-1 text-light " type="button"> <i class="fab fa-linkedin    "></i> </button>
                                </a>
                                <a :href="'mailto:' + resume.email" class="text-light">
                                    <button class="btn bg-primary  m-1 text-light " type="button"> <i class="fas fa-envelope-open    "></i> </button>
                                </a>
                                <a href="/edit/resume" class="text-light">
                                    <button class="btn btn-block bg-primary  m-1 text-light " type="button"> <i class="fas fa-edit    "></i> </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h3> No resume present. Add one <a href="/new/resume"> now! </a> </h3>
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
            resume: [],
            load: {
                blogs: true,
                delete: [],    
                show: [],
                resume: true
            },
            loading: {
                blog: true,
                delete: [],
                show: [],
                resume: false
            },
            loadErr: {
                blog: false,
                delete: [],
                show: [],
                resume: false
            },
            loaded: {
                delete: [],
                resume: false,
                show: [],
            },
            error: {
                blog: null,
                resume: null,
                delete: null,
                show: null
            }
        }
    },
    methods: {

        getBlogs()
        {
            this.load.blogs = true;  
            
            var deleteT = {
                delete: true
            }

            var deleteF = {
                delete: false
            }

            var showF = {
                show: false
            }

            var showT = {
                show: true
            }

            api.getBlogs()
            .then(res => {
                if(res.status == 200)
                {
                    
                    this.load.blogs = false
                    this.blogs = res.data.blogs
                                        
                    for (let index = 0; index < this.blogs.length; index++) {
                        this.load.delete.push(deleteT)
                        this.loading.delete.push(deleteF)
                        this.loadErr.delete.push(deleteF)
                        this.loaded.delete.push(deleteF)                        
                        this.load.show.push(showT)
                        this.loading.show.push(showF)
                        this.loadErr.show.push(showF)
                        this.loaded.show.push(showF)
                        
                        // console.log(this.load)
                        // console.log(this.loading)
                        // console.log(this.loadErr)
                    }
                                        
                }                
            }).catch(err => {
                this.load.blogs = false
                this.loadErr.blog = true
                this.error.blog = err
            })
        },

        push(link, type)
        {
            if(type == 'editblog')
                this.$router.push('/edit/blog/' + link)
            
            if(type == 'newblog')
                this.$router.push('/new/')
        },

        deleteBlog(link, i)
        {
            this.load.delete[i].delete = false
            this.loading.delete[i].delete = true

            api.deleteBlog(link)
            .then(res => {
                if(res.status == 200)
                {
                    this.loading.delete[i].delete = false
                    this.loaded.delete[i].delete = true
                    this.loadErr.delete[i].delete = false                    

                    this.getBlogs()

                    setTimeout(() => {
                        
                        this.loaded.delete[i].delete = false
                        this.load.show[i].show = true

                    }, 2500);
                }
            }).catch(err => {

                this.loading.delete[i].delete = false
                this.loaded.delete[i].delete = false
                this.loadErr.delete[i].delete = true
                this.error.delete= err
            })
            
        },

        showBlog(link, i)
        {
            this.load.show[i].show = false
            this.loading.show[i].show = true

            api.showBlog(link)
            .then(res => {
                if(res.status == 200)
                {
                    this.loading.show[i].show = false
                    this.loaded.show[i].show = true
                    this.loadErr.show[i].show = false

                    this.getBlogs()

                    setTimeout(() => {
                        
                        this.loaded.show[i].show = false
                        this.load.delete[i].delete = true

                    }, 2500);
                }
            }).catch(err => {

                this.loading.show[i].show = false
                this.loaded.show[i].show = false
                this.loadErr.show[i].show = true
                this.error.show = err;
            })

        },

        getDate(date)
        {
            const d = new Date(date)                
            return d.toLocaleString()
        },

        getResume()
        {
            this.load.resume = false
            this.loading.resume = true

            api.getResume()
            .then(res => {

                console.log(res)

                if(res.status == 200)
                {                    
                    this.loading.resume = false
                    this.loaded.resume = true
                    this.resume = res.data.resume                    
                }
            }).catch(err => {

                this.loading.resume = false
                this.loadErr.resume = true
                this.error.resume = err;
                this.resume = null;
            

            })
        }



    },

    mounted() {

        this.getBlogs()
        this.getResume()

    }
}
</script>

<style>

</style>