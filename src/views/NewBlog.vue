<template>
    <div id="newlog" class="row w-100 m-0 p-0">
        <vue-headful :title="title" />
        <div class="col-12 w-100 m-0 p-0">
            <h1 class="display-4"> New Blog </h1>
            <!-- <div class="row p-3 w-100"> -->
            <div class="col-12 col-md-8 p-3">
                <form @submit.prevent="newBlog()" ref="blogForm" id="blogform" enctype="multipart/form-data">                                       
                    <div class="form-group w-100 border-bottom">
                      <label for="">Blog Title</label>
                      <input type="text" name="btitle" id="btitle" class="form-control" v-model="blogTitle" placeholder="Blog Title here" aria-describedby="helpId">                      
                    </div>   
                    <!-- <div class="form-group">
                      <label for="image">Hero Image</label>
                      <input type="file" class="form-control-file" name="image" id="image" @change="setImage($event, 'hero')" placeholder="Choose hero image" aria-describedby="fileHelpId">
                    
                    </div>  
                    <div class="form-group">
                      <label for="">Image Caption</label>
                      <input type="text" name="caption" id="caption" class="form-control" v-model="heroimg.caption" placeholder="Set Image Caption here" aria-describedby="helpId">

                    </div>                -->
                    <p>
                        <button class="btn " type="button" @click="addDiv()"> <i class="fa fa-plus-circle fa-3x" aria-hidden="true"></i> </button>
                        <span class="h2"> {{blocksCount}} </span>
                        <button class="btn " v-if="blocksCount > 1" type="button" @click="removeDiv()"> <i class="fa fa-minus-circle fa-3x" aria-hidden="true"></i> </button>
                    </p>                    
                    <div class="my-3" v-for="(block, i) in blocksCount" :key="i">
                        <strong> Block #{{block}} </strong>
                        <!-- <div class="row"> -->
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
                            <button type="button" class="btn btn-primary btn-sm mx-1" @click="saveBlock()"> Save Block </button>
                            <button class="btn btn-danger btn-sm" v-if="blocksCount > 1" type="button" @click="removeDiv()"> Delete Block </button>                         
                        <!-- </div> -->
                    </div>
                    <button type="submit" v-if="createBlog" class="btn btn-warning m-1">Submit</button>
                    <button type="button" v-if="creatingBlog" disabled class="btn btn-warning m-1"> <div class="spinner-border text-light"></div> </button>
                    <button type="submit" v-if="createdBlog" disabled class="btn btn-warning m-1">Created!</button>
                    <button type="submit" v-if="createBlogErr" disabled class="btn btn-warning m-1">Error!</button>                    
                    <button type="reset" class="btn btn-danger">Reset</button>
                    <div v-if="createBlogErr" class="alert alert-danger alert-dismissible fade show" role="alert">
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

// import axios from 'axios'
// import FormData from 'form-data'

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
            fileName: null,            
            uploadImgbtn: true,
            uploadingImg: null,
            uploadedImg: null,
            uploadErr: null,
            createBlog: true,
            creatingBlog: false,
            createdBlog: false,
            createBlogErr: false,
            error: null
        }
    },

    methods: {        

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

        setImage(event, type)
        {
            // var image = new FormData()

            // image.append('file', event.target.files[0])

            if(type == 'hero')
            {
                this.heroimg.image = event.target.files[0]
            }

            if(type === Number)
            {
                this.blockImg = event.target.files[0]
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

        newBlog() {

            this.createBlog = false
            this.creatingBlog = true

            var rid = crypto.AES.encrypt(this.blogTitle, 'ishanpsahota@m3ral@wda').toString();
            rid = rid.replace(/[^a-zA-Z0-9]/g,'')
            
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

                console.log(res)
                
                if(res.status == 200)
                {
                    if(res.data.status === 200)
                    {
                        this.creatingBlog = false;
                        this.createdBlog = true

                        setTimeout(() => {
                            this.$router.push('/edit/blog/' + res.data.blog)
                        }, 2500);
                    }
                    else
                    {
                        this.creatingBlog = false
                        this.createBlogErr = true

                        if(res.data.status == 400)
                        {
                            this.error = "Unauthorized"
                        }

                        if(res.data.status == 401)
                        {
                            this.error = 'Unknown error'
                        }

                        if(res.data.status == 409)
                        {
                            this.errr = 'Similar titled blog may exist already!'
                        }                        

                        setTimeout(() => {
                            this.createBlogErr = false
                            this.createBlog = true
                            this.error = null
                        }, 2500);

                    }
                    
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

#pictureInput
{
    z-index: -10;
}

</style>