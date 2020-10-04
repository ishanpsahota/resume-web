<template>
    <div id="newlog" class="row border-bottom w-100 m-0 p-0">
        <vue-headful :title="title" />
        <div class="col-12 w-100  m-0 p-0">
            <h1 class="display-4"> New Blog </h1>            
            <div class="col-12 col-md-8 p-3">
                <form @submit.prevent="newBlog()" ref="blogForm" id="blogform" enctype="multipart/form-data">                                       
                    <div class="form-group w-100 border-bottom">
                      <label for=""> <strong> Blog Title </strong>  </label>
                      <input type="text" name="btitle" id="btitle" class="form-control" v-model="blogTitle" placeholder="Blog Title here" aria-describedby="helpId">                      
                    </div> 
                    <div class="form-group">
                        <label for="heroimg_img" > <strong> Hero Image </strong> </label>
                        <input type="file" accept="image/*" class="form-control-file" @change="setImage($event, 'hero')"  name="heroimg_img" id="heroimg_img" ref="heroimg_image" placeholder="Choose hero image">
                        <input type="text" class="form-control my-2" name="heroimg_cap" id="heroimg_cap" v-model="heroimg.caption" placeholder="Image Caption">
                        <button class="btn my-2 bg-theme" v-if="load.heroimg" type="button" :disabled="!heroimg.image || !heroimg.caption || !blogTitle" @click="uploadImg('hero')"> Upload Image </button>
                        <button type="button" v-if="loading.heroimg" disabled class="btn btn-warning m-1"> <div class="spinner-border text-light"></div> </button>
                        <button type="button" v-if="loaded.heroimg" disabled class="btn btn-warning m-1">Created!</button>
                        <button type="button" v-if="error.heroimg" disabled class="btn btn-warning m-1">Error!</button>                    
                    </div>
                    <p>
                        <button class="btn " type="button" @click="addDiv()"> <i class="fa fa-plus-circle fa-3x" aria-hidden="true"></i> </button>
                        <span class="h2"> {{blocksCount}} </span>
                        <button class="btn " v-if="blocksCount > 1" type="button" @click="removeDiv()"> <i class="fa fa-minus-circle fa-3x" aria-hidden="true"></i> </button>
                    </p>                    
                    <div class="my-3" v-for="(block, i) in blocksCount" :key="i">
                        <strong> Block #{{block}} </strong>                        
                            <div class="form-group">
                                <label :for="'bname_' + block">Block Name</label>
                                <input type="text" :name="'bname_' + block" :id="'bname_' + block" :v-model="'bname_' + block" @change="getBlock($event, 'name')" class="form-control" :placeholder="'Block #' + block + ' name here'" aria-describedby="helpId">                      
                            </div>
                            <div class="form-group">
                                <label :for="'btitle_' + block">Block Title</label>
                                <input type="text" :name="'btitle_' + block" :id="'btitle_' + block" class="form-control" :v-model="'btitle_' + block" @change="getBlock($event, 'heading')" :placeholder="'Block #' + block + ' title here'" aria-describedby="helpId">                      
                            </div>
                            <div class="form-group">
                                <label :for="'bsub_' + block">Block Subheading</label>
                                <input type="text" :name="'bsub_' + block" :id="'bsub_' + block" class="form-control" :v-model="'bsub_' + block" @change="getBlock($event, 'subheading')" :placeholder="'Block #' + block + ' subheading here'" aria-describedby="helpId">                      
                            </div>
                            <div class="form-group">
                                <label :for="'bcontent' + block">Block Content</label>
                                <textarea :name="'bcontent_' + block" :v-model="'bcontent_' + block" :id="'bcontent_' + block" @change="getBlock($event, 'content')" class="form-control" cols="30" rows="10"></textarea>
                            </div>    
                            <div class="form-group">
                                <label :for="'block_' + block" > <strong> Block #{{block}} Image </strong> </label>
                                <input type="file" accept="image/*" class="form-control-file" @change="setImage($event, 'block_' + block)"  :name="'block_' + block" :id="'block_' + block" :ref="'block_' + block" :placeholder="'Choose block #' + block + ' image'">                                
                                <button class="btn my-2 bg-theme" v-if="load.image" type="button" :disabled="!blockImg || !blockHeading" @click="uploadImg(block)"> Upload Image </button>
                                <button type="button" v-if="loading.image" disabled class="btn btn-warning m-1"> <div class="spinner-border text-light"></div> </button>
                                <button type="button" v-if="loaded.image" disabled class="btn btn-warning m-1">Created!</button>
                                <button type="button" v-if="error.image" disabled class="btn btn-warning m-1">Error!</button>                    
                            </div>                         
                            <button type="button" class="btn btn-primary btn-sm mx-1" @click="saveBlock()"> Save Block </button>
                            <button class="btn btn-danger btn-sm" v-if="blocksCount > 1" type="button" @click="removeDiv()"> Delete Block </button>                                                 
                    </div>
                    <button type="submit" v-if="load.blog" class="btn btn-warning m-1">Submit</button>
                    <button type="button" v-if="loading.blog" disabled class="btn btn-warning m-1"> <div class="spinner-border text-light"></div> </button>
                    <button type="submit" v-if="loaded.blog" disabled class="btn btn-warning m-1">Created!</button>
                    <button type="submit" v-if="error.blog" disabled class="btn btn-warning m-1">Error!</button>                    
                    <button type="reset" class="btn btn-danger">Reset</button>
                    <div v-if="error.blog" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Error!</strong> {{error}}
                    </div>
                </form>
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
            blocksCount: 1,
            blogTitle: '',            
            blocks: [],
            blockName: '',
            blockHeading: '',
            blockSub: '',
            blockContent: '',
            blockImg: '',   
            heroimg: {
                image: null,
                caption: null
            },       
            
            load: {
                blog: true,
                heroimg: true,
                image: true
            },
            loading: {
                blog: false,
                heroimg: false,
                image: false
            },
            loaded: {
                blog: false,
                heroimg: false,
                image: false
            },
            error: {
                blog: false,
                heroimg: false,
                image: false
            }
        }
    },

    methods: {    
        
        setImage(event, type)
        {
            if(type == 'hero')
            {
                this.heroimg.image = event.target.files[0];

            }

            if(type === Number)
            {
                this.blockImg = event.target.files[0]
            }
        },

        uploadImg(type)
        {
            this.load.heroimg = false
            this.loading.heroimg = true

            var date = new Date()
            var name = this.blogTitle.split(" ").join("").toLowerCase() + '_' + date.getTime() + '_hero'

            // if(type == 'hero')
            // {
                services.uploadImg(this.heroimg.image, name, 'blog' )
                .then(res => {
                    if(res.status === 200)
                    {
                        this.loading.heroimg = false
                        this.loaded.heroimg = true

                        if(type == 'hero')
                        {
                            this.heroimg.image = res.data.path
                            console.log(this.heroimg.image)
                        }
                        else {
                            this.blockImg = res.data.path
                            console.log(this.blockImg)    
                        }
                    }
                }).catch(err => {
                    if(err)
                    {
                        if(type == 'hero')
                        {
                            this.error.heroimg = true
                            setTimeout(() => {
                                this.error.heroimg = false
                                this.load.heroimg = true
                            }, 2500);
                        }
                        else
                        {
                            this.error.image = true
                            setTimeout(() => {
                                this.error.image = false
                                this.load.image = true
                            }, 2500);
                        }
                    } 


                })
            // }
        },

        getBlock(event, type) 
        {

            if(type == 'name')
            {
                this.blockName = event.target.value
            }
            if(type == 'heading')
            {
                this.blockHeading = event.target.value
            }
            if(type == 'subheading')
            {
                this.blockSub = event.target.value
            }
            if(type == 'content')
            {
                this.blockContent = event.target.value
            }

        },

        saveBlock() 
        {            
            var block = {
                name: this.blockName,
                heading: this.blockHeading,
                subheading: this.blockSub,
                content: this.blockContent,
                image: this.blockImg
            }

            this.blocks.push(block)
            console.log(this.blocks)
        },

        getId(id)
        {
            const start = Math.floor(Math.random() * 10)
    
            id = id.substr(start, 14);

            console.log(id)

            return id
        },

        newBlog() {

            var rid = crypto.AES.encrypt(this.blogTitle, 'ishanpsahota@m3ral@wda').toString();
            rid = rid.replace(/[^a-zA-Z0-9]/g,'')
            rid = this.getId(rid);
            
            this.blocks.length = this.blocksCount

            var blog = {
                title: this.blogTitle,
                date: new Date(Date.now()),
                heroimg: {
                    image: this.heroimg.image,
                    caption: this.heroimg.caption
                },
                blocks: this.blocks,
                status: 1, 
                hits: 0,
                randomId: rid
            }
                        
            console.log(blog)            
            
            services.createBlog(blog)
            .then(res => {                
                
                if(res.status == 200)
                {
                    this.creatingBlog = false;
                    this.createdBlog = true

                    setTimeout(() => {
                        this.$router.push('/blogs/' + res.data.blog)
                    }, 2500);
                }
                else
                {
                    this.creatingBlog = false
                    this.createBlogErr = true

                    if(res.status == 400)
                    {
                        this.error = "Unauthorized"
                    }

                    if(res.status == 401)
                    {
                        this.error = 'Unknown error'
                    }

                    if(res.status == 409)
                    {
                        this.errr = 'Similar titled blog may exist already!'
                    }                        

                    setTimeout(() => {
                        this.createBlogErr = false
                        this.createBlog = true
                        this.error = null
                    }, 2500);

                }

            }).catch(err => {
                if(err)
                {
                    this.creatingBlog = false
                    this.createBlogErr = true
                    this.error = 'Error in creating blog'

                    setTimeout(() => {
                        this.createBlogErr = false
                        this.createBlog = true
                        this.error = null
                    }, 2500);
                }
            })

        },

        addDiv()
        {
            this.blocksCount = this.blocksCount + 1
        },

        removeDiv()
        {
            if(this.blocksCount > 1)
            {
                this.blocksCount = this.blocksCount - 1
                this.blocks.length = this.blocksCount;
            }
            
            // console.log(this.blocks)
            
        }

    }
}
</script>

<style>


</style>