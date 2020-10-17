<template>
    <div id="newresume" class="row w-100 p-0 m-0">
        <vue-headful :title="title" />
        <div class="col-12 col-lg-8 p-5">
            <form @submit.prevent="createResume()">
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="name"> Name </label>
                    <input type="text" class="form-control" name="name" id="name" required v-model="resume.name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="instagram"> Instagram <i class="fab fa-instagram    "></i> </label>
                    <input type="text" class="form-control" name="instagram" required id="instagram" v-model="resume.instagram" placeholder="Enter instagram">
                </div>
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="linkedin"> Linkedin <i class="fab fa-linkedin    "></i> </label>
                    <input type="text" class="form-control" name="linkedin" required id="linkedin" v-model="resume.linkedin" placeholder="Enter linkedin">
                </div>
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="email"> Email <i class="fa fa-envelope-open" aria-hidden="true"></i> </label>
                    <input type="email" class="form-control" name="email" required id="email" v-model="resume.email" placeholder="Enter email">
                </div>   
                <div class="my-2 border-bottom py-2 form-group">
                    <label for="p_image" class="label h5 font-weight-bold"> Profile Picture </label>                                 
                    <input type="file" class="form-control" name="p_image" id="p_image" ref="profile_image" @change="setProfileImage()">
                    <button v-if="load.profile" :disabled="!tempImage && !name" class="btn bg-theme btn-lg my-2" @click="uploadProfileImg()" type="button"> Upload </button>
                    <button v-if="loading.profile" class="btn bg-theme btn-md my-1" disabled type="button"> Uploading <i class="fa fa-spinner" aria-hidden="true"></i> </button>
                    <button v-if="loaded.profile" class="btn bg-dark text-light btn-md my-1" disabled type="button"> Uploaded! </button>
                    <button v-if="loadErr.profile" class="btn bg-danger btn-md my-1" disabled type="button"> Upload Error! </button>
                </div>                  
                <div class="col-12 p-3">
                    <div class="mt-3 form-group">
                        <label class="label font-weight-bold h5" for="block_name"> Block name  </label>
                        <input type="text" class="form-control" name="block_name" id="block_name" v-model="block.name" placeholder="Enter Block name" ref="block_name">
                    </div>
                    <div class="my-2 form-group">
                        <label class="label font-weight-bold h5" for="block_heading"> Block heading  </label>
                        <input type="text" class="form-control" name="block_heading" id="block_heading" ref="block_heading" v-model="block.heading" placeholder="Enter Block Heading">
                    </div>
                    <div class="my-2 form-group">
                        <label class="label font-weight-bold h5" for="block_subheading"> Block subheading  </label>                        
                        <textarea class="form-control" name="block_subheading" id="block_subheading" ref="block_subheading" v-model="block.subheading" placeholder="Enter subheading/content" rows="3"></textarea>                        
                    </div>                    
                    <div class="my-2 border-top py-3 border-bottom form-group">
                        <label for="list" class="label h5 font-weight-bold"> List </label>    
                        <ul class="list-group my-2">
                            <li v-for="(list, i) in lists" :key="i" class="list-group-item d-flex justify-content-between align-items-center ">{{list}}
                                <span class="badge badge-pill badge-warning " @click="removeList(i)"> <i class="fa fa-times" aria-hidden="true"></i> </span>
                            </li>                            
                        </ul>                                                                
                        <div class="input-group">
                            <input ref="list_item" v-model="listItem"  class="form-control" type="text" name="list_item" id="list_item" placeholder="List item">                        
                            <div class="input-group-append">
                                <button type="button" class="btn bg-theme " :disabled="!listItem" @click="addList()"> Add </button>
                            </div>
                        </div>                        
                    </div>
                    <div class="my-2  border-bottom py-2 form-group">
                        <label for="link" class="label h5 font-weight-bold"> Links </label>                                 
                        <ul class="list-group my-2">
                            <li v-for="(link, link_i) in links" :key="link_i" class="list-group-item d-flex justify-content-between align-items-center ">
                                {{link.title}} @ <a :href="link.url" class="nav-link icon-link"> {{link.url}} </a>                                
                                <span class="badge badge-pill badge-warning " @click="removeLink(link_i)"> <i class="fa fa-times" aria-hidden="true"></i> </span>
                            </li>                            
                        </ul>          
                        <div class="input-group mb-3">
                            <input  class=" form-control" v-model="linkItem.title" ref="link_title" type="text" name="link_title"  id="link_title" placeholder="Link name">
                            <input  class=" form-control" type="text" v-model="linkItem.url" ref="link_url" name="link" id="link_url" placeholder="Link url">
                            <div class="input-group-append">                                    
                                <button type="button" class="btn bg-theme " :disabled="!linkItem.title || !linkItem.url" @click="addLink()"> Add </button>
                            </div>
                        </div>                        
                    </div>   
                    <div class="my-2 border-bottom py-2 form-group">
                        <label for="image" class="label h5 font-weight-bold"> Block Image </label>                                 
                        <input type="file" class="form-control" name="image" id="image" ref="block_image" @change="setImage()">
                        <button v-if="load.image" :disabled="!tempImage && !block.name" class="btn bg-theme btn-lg my-2" @click="uploadImg()" type="button"> Upload </button>
                        <button v-if="loading.image" class="btn bg-theme btn-md my-1" disabled type="button"> Uploading <i class="fa fa-spinner" aria-hidden="true"></i> </button>
                        <button v-if="loaded.image" class="btn bg-dark text-light btn-md my-1" disabled type="button"> Uploaded! </button>
                        <button v-if="loadErr.image" class="btn bg-danger btn-md my-1" disabled type="button"> Upload Error! </button>
                    </div>                    
                    <button type="button" class="btn bg-theme btn-lg m-1" @click="saveBlock()"> Save Block </button>
                    <button type="button" class="btn btn-danger btn-lg m-1" @click="clearBlock()"> Reset Block </button>
                    <div v-if="loadErr.image && error.image" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Error!</strong> {{error.image}}.
                    </div>
                    <div v-if="loadErr.resume && error.resume" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Error!</strong> {{error.resume}}.
                    </div>
                </div>                
                <button type="submit" class="btn bg-theme m-1 btn-lg btn-block"> Create Resume </button>
                <button type="reset" class="btn btn-danger btn-lg m-1">Reset</button>
            </form>
        </div>
        <div class="col-lg-4 p-5 col-12">
            <div class="card p-3 ">
                <h3> Preview </h3>
                <p> Name: 
                    <span v-if="resume.name != null"> {{resume.name}}</span> 
                    <span v-else class="font-italic"> Empty </span> 
                </p>
                <p> Instagram: 
                    <span v-if="resume.instagram != null"> {{resume.instagram}}</span> 
                    <span v-else class="font-italic"> Empty </span> 
                </p>
                <p> LinkedIn: 
                    <span v-if="resume.linkedin != null"> {{resume.linkedin}}</span> 
                    <span v-else class="font-italic"> Empty </span> 
                </p>
                <p> E-Mail: 
                    <span v-if="resume.email != null"> {{resume.email}}</span> 
                    <span v-else class="font-italic"> Empty </span> 
                </p>
                <div v-for="(rblock, index) in resume.blocks" :key="rblock.name" class="card bg-light border m-1 p-2">
                    <h4> <strong> Block {{index+1}} </strong> </h4>
                    <p> Name: 
                        <span v-if="rblock.name != null"> {{rblock.name}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p> Heading: 
                        <span v-if="rblock.heading != null"> {{rblock.heading}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p> Subheading: 
                        <span v-if="rblock.subheading != null"> {{rblock.subheading}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p> Image: 
                        <span v-if="rblock.image != null"> {{rblock.image}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p>  List: 
                        <ul class="list-group">
                            <li v-for="(list, i) in rblock.list" :key="i" class="list-group-item ">{{list}}</li>                        
                        </ul>
                    </p>
                    <span> Links:  </span>
                    <div class="list-group"> 
                        <a v-for="(link, i) in rblock.link" :key="i" :href="link.url" class="list-group-item list-group-item-action active">{{link.title}}</a>                        
                    </div>
                    
                </div>
            </div>
            <div class="card bg-white my-2 p-3">
                <h3> Current Block </h3>
                <ul class="list-group">
                    <li class="list-group-item"> Block Name: 
                        <span v-if="block.name"> {{block.name}} </span> 
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block Heading:
                        <span v-if="block.heading"> {{block.heading}} </span>
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block Subheading/Content: 
                        <span v-if="block.subheading"> {{block.subheading}} </span>
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block Image: 
                        <span v-if="block.image"> {{block.image}} </span>
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li v-for="(list, l_i) in lists" :key="l_i" class="list-group-item"> Block List: 
                        {{list}}
                    </li>
                    <li v-for="(link, li_i) in links" :key="li_i" class="list-group-item"> Block Links: 
                        {{link}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import api from '../api/index'

export default {

    name: 'NewResume',
    data() {
        return {
            title: 'New Resume',
            resume: {
                name: null,
                email: null,
                instagram: null,
                linkedin: null,
                blocks: [],  
                profile: null               
            }, 
            block: {
                name: null,
                image: null,
                heading: null,
                subheading: null,
                list: null,
                link: null,
            },  
            listItem: null,
            linkItem: {
                title: null,
                url: null
            },
            lists: [],
            links: [],
            tempImage: null,          
            load: {
                resume: true,
                image: true, 
                profile: true               
            },            

            loading: {
                resume: false,
                image: null,
                profile: false,
            },

            loaded: {
                resume: false,
                image: null,
                profile: false
            },

            loadErr: {
                resume: false,
                image: null,
                profile: false
            },
            error: {
                resume: null,
                image: null,
                list: null,
                link: null,
                profile: null
            }
        }
    },

    methods: {

        setImage()
        {            

            if(!this.$refs.block_image)
            {
                this.loadErr.image = true
                this.error.image = 'No Image selected!'
            }
            
            // console.log(this.$refs.block_image.files[0])
            this.tempImage = this.$refs.block_image.files[0];
        },

        uploadImg()
        {
            if(!this.tempImage)
            {
                this.loadErr.image = true
                this.error.image = 'No Image selected/found!'
            }

            this.load.image = false
            this.loading.image = true

            var date = new Date()
            var name = this.block.name.split(" ").join("").toLowerCase() + '_' + date.getTime();

            api.uploadImg(this.tempImage, name, 'resume' )
                .then(res => {
                    if(res.status === 200)
                    {
                        this.loading.image = false
                        this.loaded.image = true
                    
                        this.block.image = res.data.path;
                        this.tempImage = null;

                        setTimeout(() => {
                            this.loaded.image = false
                            this.load.image = true
                        }, 2500);
                    }
                }).catch(err => {
                    if(err)
                    {                        
                        this.loadErr.image = true
                        setTimeout(() => {
                            this.error.image = this.error
                            this.load.image = true
                        }, 2500);                        
                    } 
            })
        },

        setProfileImage()
        {            

            if(!this.$refs.profile_image)
            {
                this.loadErr.profile = true
                this.error.profile = 'No Profile Image selected!'
            }
            
            // console.log(this.$refs.block_image.files[0])
            this.tempImage = this.$refs.profile_image.files[0];
        },

        uploadProfileImg()
        {
            if(!this.tempImage)
            {
                this.loadErr.profile = true
                this.error.profile = 'No Profile Image selected/found!'
            }

            this.load.profile = false
            this.loading.profile = true

            var date = new Date()
            var name = this.resume.name.split(" ").join("").toLowerCase() + '_' + date.getTime();

            api.uploadImg(this.tempImage, name, 'resume' )
                .then(res => {
                    if(res.status === 200)
                    {
                        this.loading.profile = false
                        this.loaded.profile = true
                    
                        this.resume.profile = res.data.path;
                        this.tempImage = null;

                        setTimeout(() => {
                            this.loaded.profile = false
                            this.load.profile = true
                        }, 2500);
                    }
                }).catch(err => {
                    if(err)
                    {                        
                        this.loadErr.profile = true
                        setTimeout(() => {
                            this.error.profile = this.error
                            this.load.profile = true
                        }, 2500);                        
                    } 
            })
        },

        saveBlock()
        {
            this.block.list = this.lists.length > 0 ? this.lists : null
            this.block.link = this.links.length > 0 ? this.links : null

            var block = {
                name: this.block.name,
                image: this.block.image,
                heading: this.block.heading,
                subheading: this.block.subheading,
                list: this.block.list,
                link: this.block.link
            }

            console.log(block)

            this.resume.blocks.push(block);

            // console.log(this.resume);

            this.block.name = 
            this.block.image = 
            this.block.heading = 
            this.block.subheading = null
            this.block.list = []
            this.block.link = []
            this.lists = []
            this.links = []
            

        },

        clearBlock()
        {
            this.block.name = 
            this.block.image = 
            this.block.heading = 
            this.block.subheading = null
            this.block.list = []
            this.block.link = []
        },

        createResume()
        {
            this.load.resume = false            
            this.loading.resume = true

            var resume = this.resume;

            console.log(resume)

            api.createResume(resume)
            .then(res => {
                if(res.status == 200)
                {
                    this.loading.resume = false
                    this.loaded.resume = true

                    setTimeout(() => {
                        this.$router.push('/');
                    }, 3500);
                }
            }).catch(err => {

                this.loading.resume = false
                this.loadErr.resume = true
                this.error.resume = err

                setTimeout(() => {
                    
                    this.loadErr.resume = false
                    this.load.resume = true

                }, 3500);

            })

            
        },

        addDiv(type)
        {
            if(type == 'block')
                this.blocksCount = this.blocksCount + 1
        },

        removeDiv(type)
        {

            if(type == 'block')
                if(this.blocksCount > 1)
                {
                    this.blocksCount = this.blocksCount - 1
                }
        },
       
        addList()
        {
      
            if(!this.listItem) 
            { 
                console.log('e'); 
                return
            }
            else {          
                console.log(this.listItem)           
                this.lists.push(this.listItem)
                console.log('list')
                console.log(this.lists)
                console.log('link')
                console.log(this.links)
                this.listItem = null;
            }                
        },

        removeList(index)
        {            
            this.lists.splice(index, 1);
        },

        addLink()
        {
            if(!this.linkItem.title || !this.linkItem.url) return
            else {                
                
                var link = {
                    title : this.linkItem.title,
                    url : this.linkItem.url
                }

                this.links.push(link)
                console.log('link')
                console.log(this.links)
                
                this.linkItem.title = this.linkItem.url = null;
            }
            
        },

        removeLink(index)
        {            
            this.links.splice(index, 1);            
        }

    },

    mounted() 
    {

    }
}
</script>

<style>

</style>