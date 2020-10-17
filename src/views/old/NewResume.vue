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
                <div class="col-12 p-3">
                    <div class="mt-3 form-group">
                        <label class="label font-weight-bold h5" for="block_name"> Block name  </label>
                        <input type="text" class="form-control" name="block_name" required id="block_name" v-model="block.block_name" placeholder="Enter Block name" ref="block_name">
                    </div>
                    <div class="my-2 form-group">
                        <label class="label font-weight-bold h5" for="block_heading"> Block heading  </label>
                        <input type="text" class="form-control" name="block_heading" required id="block_heading" ref="block_heading" v-model="block.block_heading" placeholder="Enter Block Heading">
                    </div>
                    <div class="my-2 form-group">
                        <label class="label font-weight-bold h5" for="block_subheading"> Block subheading  </label>                        
                        <textarea class="form-control" name="block_subheading" id="block_subheading" ref="block_subheading" v-model="block.block_subheading" placeholder="Enter subheading/content" rows="3"></textarea>                        
                    </div>                    
                    <div class="my-2 border-top py-3 border-bottom form-group">
                        <label for="list" class="label h5 font-weight-bold"> List </label>    
                        <ul class="list-group my-2">
                            <li v-for="(list, i) in block.block_list" :key="i" class="list-group-item d-flex justify-content-between align-items-center ">{{list}}
                                <span class="badge badge-pill badge-warning "> <i class="fa fa-times" aria-hidden="true"></i> </span>
                            </li>                            
                        </ul>                                                                
                        <div class="input-group">
                            <input ref="list_item"  class="form-control" type="text" name="list_item" id="list_item" placeholder="List item">                        
                            <div class="input-group-append">
                                <button type="button" class="btn bg-theme " @click="addItem('list')"> Add </button>
                            </div>
                        </div>                        
                    </div>
                    <div class="my-2  border-bottom py-2 form-group">
                        <label for="link" class="label h5 font-weight-bold"> Links </label>                                 
                        <div class="input-group mb-3">
                            <input  class=" form-control" ref="link_title" type="text" name="link_title"  id="link_title" placeholder="Link name">
                            <input  class=" form-control" type="text" ref="link_url" name="link" id="link_url" placeholder="Link url">
                            <div class="input-group-append">                                    
                                <button type="button" class="btn bg-theme " @click="addItem('link')"> Add </button>
                            </div>
                        </div>                        
                    </div>                    
                    <button type="button" class="btn bg-theme "> Save Block </button>
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
                <div v-for="(block, index) in resume.blocks" :key="block.block_name" class="card bg-light border m-1 p-2">
                    <h4> <strong> Block {{index+1}} </strong> </h4>
                    <p> Name: 
                        <span v-if="block.block_name != null"> {{block.block_name}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p> Heading: 
                        <span v-if="block.block_heading != null"> {{block.block_heading}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p> Subheading: 
                        <span v-if="block.block_subheading != null"> {{block.block_subheading}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p> Image: 
                        <span v-if="block.block_image != null"> {{block.block_image}}</span> 
                        <span v-else class="font-italic"> Empty </span> 
                    </p>
                    <p>  List: 
                        <ul class="list-group">
                            <li v-for="(list, i) in block.block_list" :key="i" class="list-group-item ">{{list}}</li>                        
                        </ul>
                    </p>
                    <span> Links:  </span>
                    <div class="list-group"> 
                        <a v-for="(link, i) in block.block_link" :key="i" :href="link.url" class="list-group-item list-group-item-action active">{{link.title}}</a>                        
                    </div>
                    
                </div>
            </div>
            <div class="card bg-white my-2 p-3">
                <h3> Current Block </h3>
                <ul class="list-group">
                    <li class="list-group-item"> Block Name: 
                        <span v-if="block.block_name"> {{block.block_name}} </span> 
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block Heading:
                        <span v-if="block.block_heading"> {{block.block_heading}} </span>
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block Subheading/Content: 
                        <span v-if="block.block_subheading"> {{block.block_subheading}} </span>
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block List: 
                        <span v-if="block.block_list != null"> {{block.block_list}} </span> 
                        <span class="font-italic" v-else> Empty </span> 
                    </li>
                    <li class="list-group-item"> Block Links:
                        <span v-if="block.block_link != []"> {{block.block_link}} </span> 
                        <span class="font-italic" v-else> Empty </span> 
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
                blocks: [{}],                 
            }, 
            block: {
                block_name: null,
                block_image: null,
                block_heading: null,
                block_subheading: null,
                block_list: [],
                block_link: [],
            },            
            load: {
                resume: true,
                image: []
            },            

            loading: {
                resume: false,
                image: [],
            },

            loaded: {
                resume: false,
                image: []
            },

            loadErr: {
                resume: false,
                image: []
            },
            error: {
                resume: null,
                image: [],
                list: null,
                link: null
            }
        }
    },

    methods: {

        createResume()
        {
            this.load.resume = false            
            this.loading.resume = true

            var resume = this.resume;

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
       
        addItem(type)
        {

            if(type == 'list')
            {                       
                if(!this.$refs.list_item) { console.log('e'); return}
                else {                     
                    this.block.block_list.push(this.$refs.list_item.value)
                }                
            }

            if(type == 'link')
            {
                if(!this.$refs.link_title || !this.$refs.link_url) return
                else {

                    // console.log(this.$refs.link_title)
                    // console.log(this.$refs.link_url)

                    var link = {
                        title: this.$refs.link_title[0].value,
                        url: this.$refs.link_url[0].value
                    }
                    

                    this.block.block_link.push(link)
                    console.log(this.block.block_link)
                }
                
            }

        },

        removeItem(type, value)
        {
            var index = ''

            if(type == 'list')
            {
                index = this.block_list.indexOf(value)

                this.block_list = this.block_list.splice(index, 1);

                console.log(this.block_list)
            }

            if(type == 'link')
            {
                index = this.block_link.indexOf(value)

                console.log(index)
            }
        }

    },

    mounted() 
    {

    }
}
</script>

<style>

</style>