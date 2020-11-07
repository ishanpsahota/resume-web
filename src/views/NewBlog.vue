<template>
    <div id="newlog" class="row w-100 m-0 p-0">
        <vue-headful :title="title" />
        <div class="row w-100 m-0 p-4">
            <div class="col-12 ">
                <h1 class="display-4"> New Blog </h1>        
            </div>
            <div class="col-md-8 col-12 p-3 ">
                <form @submit.prevent="create_blog()">
                    <div class="form-group">
                        <input v-model="blog_title" name="blog_title" class="form-control form-control-lg border-top-0 border-left-0 border-right-0 border-bottom" type="text" placeholder="Title here" />
                    </div>
                    <div class="form-group">                                   
                        <div class="form-check  my-2 border-bottom p-3">
                            <label class="form-check-label">                                
                                <input type="radio" ref="heroimg_img" :disabled=" heroimg_type == 'url' " @click="heroimg_type = 'img'" name="" id="" autocomplete="off" > Hero Image                                
                                <input type="file" ref="heroimg_input" class="form-control-file" @change="set_image('hero')" :disabled="heroimg_type == 'url' || heroimg_type == null" name="heroimg" id="heorimg" placeholder="Choose hero image" aria-describedby="fileHelpId">                                                                                              
                                <button v-if="load.upload_hero" class="btn btn-dark m-2" type="button" @click="upload_image('hero')" :disabled=" blog_title == '' || heroimg.caption == '' || heroimg_type == 'url' || heroimg_type == null || temp_image == null "> Upload Image </button>
                                <button class="btn btn-dark m-2" v-if="loading.upload_hero" type="button" disabled> Uploading
                                    <div class="spinner-border text-light"> </div>
                                </button>
                                <button class="btn btn-dark m-2" v-if="loaded.upload_hero" type="button" disabled> Uploaded! </button>
                                <button class="btn btn-dark m-2" v-if="loadErr.upload_hero" type="button" disabled> Upload Error! </button>                                
                                <p v-if="error.heroimg_input"> {{error.heroimg_input}} </p>
                                
                          </label>
                          <br><small> Enter a Blog Title &amp; the hero image caption to enable the upload button </small>
                        </div>
                        <div class="form-check my-2 p-3">
                          <label class="form-check-label">                                
                                <input type="radio" name="heroimg_url" ref="heroimg_url"  id="" :disabled="heroimg_type == 'img' " @click="heroimg_type = 'url'" autocomplete="off" >  Hero Image URL                                
                                <input type="text" class="form-control " v-model="heroimg.image" name="" id=""  :disabled="heroimg_type == 'img' || heroimg_type == null " aria-describedby="helpId" placeholder="">                                                                
                          </label>
                        </div>                          
                        <button class="btn btn-danger m-2 btn-sm" type="button" @click="reset_choices('hero')"> Reset choice </button>
                    </div>
                    <div class="form-group">
                        <label for="heroimg_cap"> Image caption </label>
                        <input type="text" class="form-control" v-model="heroimg.caption" name="heroimg_cap" id="heroimg_cap" placeholder="Hero Image caption here" aria-describedby="helpId" >                                                
                    </div>
                    <div class="row m-1 py-3 ">
                        <div class="col-12 p-0">
                            <h3> Block Content </h3>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label for="block_name"> Block Name </label>
                                <input type="text" class="form-control" name="block_name" id="block_name" v-model="block.name" placeholder="Enter Block Name here" />
                            </div>
                            <div class="form-group">
                                <label for="block_heading"> Block Heading </label>
                                <input type="text" class="form-control" name="block_heading" id="block_heading" v-model="block.heading" placeholder="Enter Block Heading here" />
                            </div>
                            <div class="form-group">
                                <label for="block_subheading"> Block Subheading </label>
                                <input type="text" class="form-control" name="block_subheading" id="block_subheading" v-model="block.subheading" placeholder="Enter Block Subheading here" />
                            </div>
                            <div class="form-group">
                                <label for="block_content"> Block Content </label>                                
                                <textarea class="form-control" v-model="block.content" name="block_content" id="block_content" rows="3"></textarea>
                            </div>
                            <div class="form-group">                                   
                            <div class="form-check  my-2 border-bottom p-3">
                                <label class="form-check-label">                                
                                    <input type="radio" ref="blockimg_img" :disabled=" blockimg_type == 'url' " @click="blockimg_type = 'img'" name="" id="" autocomplete="off" > Block Image                                
                                    <input type="file" class="form-control-file" :disabled="blockimg_type == 'url' || blockimg_type == null" name="blockimg" id="blockimg" placeholder="Choose block image" aria-describedby="fileHelpId">                                                                                              
                                    <button class="btn btn-dark m-2" type="button" :disabled=" block.caption == '' || blockimg_type == 'url' || blockimg_type == null  "> Upload Image </button>
                                </label>
                                <br><small> Enter block image caption to enable the upload button </small>
                            </div>
                            <div class="form-check my-2 p-3">
                                <label class="form-check-label">                                
                                    <input type="radio" name="blockimg_url" ref="blockimg_url"  id="" :disabled="blockimg_type == 'img' " @click="blockimg_type = 'url'" autocomplete="off" >  Block Image URL                                
                                    <input type="text" class="form-control " ref="blockimg_input" v-model="block.image" name="" id=""  :disabled="blockimg_type == 'img' || blockimg_type == null " aria-describedby="helpId" placeholder="">                                                                
                                </label>
                                </div>                          
                                <button class="btn btn-danger m-2 btn-sm" type="button" @click="reset_choices('block')"> Reset choice </button>
                            </div>
                            <div class="form-group">
                                <label for="blockimg_cap"> Image caption </label>
                                <input type="text" class="form-control" v-model="block.caption" name="blockimg_cap" id="blockimg_cap" placeholder="Block Image caption here" aria-describedby="helpId" >                                                
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn btn-dark" @click="save_block()"> Save Block </button>
                        </div>
                        <div class="col-12 p-2">
                            <button v-if="load.create_blog" class="btn bg-theme btn-block btn-lg" :disabled=" blog_title == null || blocks == [] " @click="create_blog()"> Create Blog </button>
                            <button v-if="loading.create_blog" class="btn btn-warning disabled" disabled> <div class="spinner-border text-dark"> </div> </button>
                            <button v-if="loaded.create_blog" class="btn btn-success" disabled> Blog Created! </button>
                            <button v-if="loadErr.create_blog" class="btn btn-danger" disabled> Error creating blog </button>
                            <p class="text-danger" v-if="error.create_blog"> {{error.create_blog}} </p>
                            <button class="btn btn-info" v-if="load.redirect" @click="push(load.redirect)"> Visit the blog </button>
                        </div>
                    </div>
                    
                </form>
            </div>
            <div class="col-md-4 d-none d-md-block overflow-hidden">
                <h3> Preview </h3>
                <p> Title: {{blog_title}} </p>
                <p> Hero Image Caption: {{heroimg.caption}} </p>
                <p class="text-wrap"> Hero Image: {{heroimg.image}} </p>
                <div v-for="block in blocks" :key="block.name" class="card p-0">
                    <div class="card-header">
                        <h4> {{block.heading}} </h4>
                        <p> {{block.subheading}} </p>
                    </div>
                    <img :src="block.image" class="img-fluid w-25 h-25">
                    <div class="card-body">
                        <p> {{block.content}} </p>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import crypto from 'crypto-js'
import services from '../api/index'

export default {
    name: 'NewBlog',
    components:{
        
    },
    data() {
        return {
            title: 'New Blog',
            blog_title: '',
            heroimg_type: null,  
            blockimg_type: null,
            temp_image: null,          
            heroimg: {
                image: '',
                caption: ''
            },
            blocks: [],
            block: {
                name: '',
                heading: '',
                subheading: '',
                content: '',
                image: '',
                caption: ''
            },
            load: {
                create_blog: true,
                upload_hero: true,
                upload_block: true,
                redirect: null
            },
            loading: {
                create_blog: false,
                upload_hero: false,
                upload_block: false
            },
            loaded: {
                create_blog: false,
                heroimg_input: null,
                upload_hero: false,
                upload_block: false
            },
            loadErr: {
                create_blog: false,
                upload_hero: false,
                upload_block: false
            },
            error: {
                create_blog: false,
                blockimg_input: null,
                heroimg_input: null
            }
            
        }
    },

    methods: {    
        
        reset_choices(type)
        {
            if(type == 'hero')
                this.$refs.heroimg_img.checked = false
                this.$refs.heroimg_url.checked = false
                this.heroimg_type = null
            
            if(type == 'block')
                this.$refs.blockimg_img.checked = false
                this.$refs.blockimg_url.checked = false
                this.blockimg_type = null
        },

        set_image(type)
        {
            if(type == 'block')
            {
                if(!this.$refs.blockimg_input)
                {
                    this.error.blockimg_input = 'No file selected!'
                }
                else this.temp_image = this.$refs.blockimg_input.files[0]
            }

            if(type == 'hero')
            {
                if(!this.$refs.heroimg_input)
                {
                    this.error.heroimg_input = 'No file selected!'
                }
                else this.temp_image = this.$refs.heroimg_input.files[0]
            }
        },

        push(id)
        {
            this.$router.push('/blog/' + id)
        },

        upload_image(type)
        {
            var date = new Date()
            var name = ''

            if(type == 'hero')
            {                
                this.load.upload_hero = false
                this.loading.upload_hero = true
                name = this.blog_title.split(" ").join("").toLowerCase() + '_' + date.getTime();                
            }

            if(type == 'block')
            {             
                this.load.upload_block = false
                this.loading.upload_block  = true   
                name = this.block.name.split(" ").join("").toLowerCase() + '_' + date.getTime();
            }

            services.uploadImg(this.temp_image, name, 'blog')
            .then(res => {

                if(res.status == 200)
                {
                    if(type == 'hero')
                        this.loading.upload_hero = false
                        this.loaded.upload_hero = true
                        this.heroimg.image = res.data.path
                    
                    if(type == 'block')
                        this.loading.upload_block = false
                        this.loaded.upload_block = true
                        this.block.image = res.data.path

                    this.temp_image = null
                }

            }).catch(err => {

                if(err)
                {
                    if(type == 'hero')
                    {
                        this.loading.upload_hero = false
                        this.loadErr.upload_hero = true
                        this.error.heroimg_input = 'Error uploading image'
                    }
                    else 
                    {
                        this.loading.upload_block = false
                        this.loadErr.upload_block = true
                        this.error.blockimg_input = ' Error uploading image'
                    }

                    this.temp_image = null
                }

            })
        },

        save_block()
        {
            var block = {

                name: this.block.name,
                heading: this.block.heading,
                subheading: this.block.subheading,
                content: this.block.content,
                image: this.block.image,
                caption: this.block.caption

            }

            this.blocks.push(block)

            this.block.name = 
            this.block.heading = 
            this.block.subheading = 
            this.block.content = 
            this.block.image = this.block.caption = ''
        },

        generate_random(title)
        {
            var id = crypto.AES.encrypt(title, 'M3raL@wdaN!k@lL@wd3').toString()
            var rand_int = Math.ceil(Math.random() * 11)
            id = id.substring(rand_int, 17)
            id = id.replace(/[^a-zA-Z0-9]/g,'')
            return id

        },  

        create_blog()
        {            

            if(this.blog_title == '' || this.heroimg.image == '' || this.heroimg.image == '' || this.blocks == []) return
            else
            {
                this.load.create_blog = false
                this.loading.create_blog = true
                var blog = {
                    title: this.blog_title,
                    date: new Date(),
                    heroimg: {
                        image: this.heroimg.image,
                        caption: this.heroimg.caption
                    },
                    blocks: this.blocks,
                    status: 1,
                    hits: 1,
                    randomId:  this.generate_random(this.blog_title)                   
                }

                services.createBlog(blog)
                .then(res => {

                    if(res.status == 200)
                    {

                        this.loading.create_blog = false
                        this.loaded.create_blog = true

                        this.load.redirect = res.data.blog

                    }

                }).catch(err => {

                    this.loading.create_blog = false
                    this.loadErr.create_blog = true
                    this.error.create_blog = err

                    setTimeout(() => {

                        this.loadErr.create_blog = false
                        this.load.create_blog = true
                        this.error.create_blog = null

                    }, 3000);

                })
            }

        }

    }
}
</script>

<style>


</style>