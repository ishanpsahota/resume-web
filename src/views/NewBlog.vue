<template>
    <div id="newlog" class="row w-100 m-0 p-0">
        <vue-headful :title="title" />
        <div class="col-12 w-100 m-0 p-0">
            <h1 class="display-4"> New Blog </h1>
            <!-- <div class="row p-3 w-100"> -->
            <div class="col-12 col-md-8 p-3">
                <form @submit.prevent="newBlog()" id="blogform" enctype="multipart/form-data">                                       
                    <div class="form-group w-100 border-bottom">
                      <label for="">Blog Title</label>
                      <input type="text" name="btitle" id="btitle" class="form-control" v-model="blogTitle" placeholder="Blog Title here" aria-describedby="helpId">                      
                    </div>
                    <div class="form-group w-100 border-bottom">
                        <label for="">Choose Hero Image</label>
                        <input type="file" class="form-control-file" accept="image/*"  name="image" @change="setImage($event, 'hero')" id="image" placeholder="Choose Hero Image" aria-describedby="fileHelpId">
                        <!-- <small id="fileHelpId" class="form-text text-muted">Help text</small> -->
                    </div>
                    <div class="form-group">
                        <button class="btn btn-dark m-1" type="button" v-if="uploadImgbtn" @click="uploadImg('hero')"> Upload Image </button>
                        <button class="btn btn-dark m-1" type="button" disabled v-if="uploadingImg"> Uploading... </button>
                        <button class="btn btn-success m-1" type="button" disabled v-if="uploadedImg"> Uploaded! </button>
                        <button class="btn btn-danger m-1" type="button" disabled v-if="uploadErr"> Error! </button>                                
                    </div>
                    <div class="form-group w-100 border-bottom">
                      <label for="">Image Caption</label>
                      <input type="text" name="caption" id="caption" class="form-control" v-model="heroimg.caption" placeholder="Image Caption Here" aria-describedby="helpId">                      
                    </div>
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
                            <div class="form-group">
                              <label for="">Block Image </label>
                              <input type="file" class="form-control-file" :name="'bimage_' + block" :id="'bimage_' + block" @change="setImage($event, block)" placeholder="" aria-describedby="fileHelpId">                              
                            </div>  
                            <div class="form-group">
                                <button class="btn btn-dark m-1" type="button" v-if="uploadImgbtn" @click="uploadImg(block)"> Upload Image </button>
                                <button class="btn btn-dark m-1" type="button" disabled v-if="uploadingImg == block"> Uploading... </button>
                                <button class="btn btn-success m-1" type="button" disabled v-if="uploadedImg == block"> Uploaded! </button>
                                <button class="btn btn-danger m-1" type="button" disabled v-if="uploadErr == block"> Error! </button>                                
                            </div>
                            <button type="button" class="btn btn-primary btn-sm mx-1" @click="saveBlock()"> Save Block </button>
                            <button class="btn btn-danger btn-sm" v-if="blocksCount > 1" type="button" @click="removeDiv()"> Delete Block </button>                         
                        <!-- </div> -->
                    </div>
                    <button type="submit" class="btn btn-warning m-1">Submit</button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                </form>
            </div>
        </div>  
    </div>
</template>

<script>

import crypto from 'crypto-js'
import services from '../api/index'
import axios from 'axios'
// import FormData from 'form-data'

export default {
    name: 'NewBlog',
    data() {
        return {
            title: 'New Blog',
            blocksCount: 1,
            blogTitle: '',
            heroimg: {
                image: '',
                caption: ''
            },
            blocks: [],
            blockName: '',
            blockHeading: '',
            blockSub: '',
            blockContent: '',
            blockImg: '',
            FILE: null,
            fileName: null,            
            uploadImgbtn: true,
            uploadingImg: null,
            uploadedImg: null,
            uploadErr: null
        }
    },

    methods: {

        getImagePath(image, type)
        {
            image = image.split(".");
            var title = this.blogTitle.split(" ").join("").toLowerCase()
            var link = '../../public/assets/images/blogs/' + title + '_' + type + '.' + image[1]
            return link
        },

        getImageName(image, type) {

            image = image.split(".");
            var title = this.blogTitle.split(" ").join("").toLowerCase() + "_" + type + '.' + image[1]
            return title
        },

        setImage(event, type)
        {

            if(type == 'hero')
            {
                this.heroimg.image = this.getImagePath(event.target.files[0].name, type)    
                this.FILE = event.target.files[0]           
                this.fileName = this.getImageName(event.target.files[0].name, type)                        
            }
            else
            {                
                this.blockImg = this.getImagePath(event.target.files[0].name, type)                
                this.FILE = event.target.files[0]           
                this.fileName = this.getImageName(event.target.files[0].name, type)
                // console.log(this.blocks)
            }

        },

        uploadImg(type)
        {
            this.uploadImgbtn = false
            this.uploadingImg = type
        
            // var imgForm = {
            //     image: this.FILE,
            //     name: this.fileName
            // }
        
            // services.uploadImg(imgForm)
            // .then(res => {
            //     this.uploadingImg = null
            //     this.uploadedImg = type
            //     console.log(res)
            // }).catch(err => {
            //     this.uploadingImg = type
            //     this.uploadedImg = type
            //     console.log(err)
            // })

            axios.post(services.getUrl().uploadImg, this.FILE)
            .then(res => {
                this.uploadingImg = null
                this.uploadedImg = type
                console.log(res)
            }).catch(err => {
                this.uploadingImg = type
                this.uploadedImg = type
                console.log(err)
            })
            
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

        newBlog() {

            var rid = crypto.AES.encrypt(this.blogTitle, 'ishanpsahota@m3ral@wda').toString();
            rid = rid.replace(/[^a-zA-Z0-9]/g,'')
            
            this.blocks.length = this.blocksCount

            var blog = {
                title: this.blogTitle,
                date: Date,
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
            
            // services.createBlog(blog)
            // .then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })


        },

        addDiv()
        {
            this.blocksCount = this.blocksCount + 1
        },

        removeDiv()
        {
            this.blocksCount = this.blocksCount - 1
        }

    }
}
</script>

<style>

</style>