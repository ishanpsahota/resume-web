<template>
    <div id="newresume" class="row w-100 p-0 m-0">
        <vue-headful :title="title" />
        <div class="col-12 col-lg-8 p-5">
            <form @submit.prevent="createResume()">
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="name"> Name </label>
                    <input type="text" class="form-control" name="name" id="name" required v-model="name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="instagram"> Instagram <i class="fab fa-instagram    "></i> </label>
                    <input type="text" class="form-control" name="instagram" required id="instagram" v-model="instagram" placeholder="Enter instagram">
                </div>
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="linkedin"> Linkedin <i class="fab fa-linkedin    "></i> </label>
                    <input type="text" class="form-control" name="linkedin" required id="linkedin" v-model="linkedin" placeholder="Enter linkedin">
                </div>
                <div class="form-group">
                    <label class="label font-weight-bold h4" for="email"> Email <i class="fa fa-envelope-open" aria-hidden="true"></i> </label>
                    <input type="email" class="form-control" name="email" required id="email" v-model="email" placeholder="Enter email">
                </div>
                <button type="button" class="btn bg-theme " @click="addDiv('block')"> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
                <span class="h4 m-1"> {{blocksCount}} </span>
                <button type="button" v-if="blocksCount > 1" class="btn bg-theme " @click="removeDiv('block')"> <i class="fa fa-minus-circle" aria-hidden="true"></i> </button>
                <div v-for="block in blocksCount" :key="block" class="col-12 p-3">
                    <h4 ><strong> Block #{{block}} </strong> </h4>
                    <div class="mt-3 form-group">
                        <label class="label font-weight-bold h5" :for="'block_name_' + block"> Block {{block}} name  </label>
                        <input type="text" class="form-control" :name="'block_name_' + block" required :id="'block_name_' + block" v-model="block_name" :placeholder="'Enter Block #' + block + ' name'">
                    </div>
                    <div class="my-2 form-group">
                        <label class="label font-weight-bold h5" :for="'block_heading_' + block"> Block {{block}} heading  </label>
                        <input type="text" class="form-control" :name="'block_heading_' + block" required :id="'block_heading_' + block" v-model="block_heading" :placeholder="'Enter Block #' + block + ' heading'">
                    </div>
                    <div class="my-2 form-group">
                        <label class="label font-weight-bold h5" :for="'block_subheading_' + block"> Block {{block}} subheading  </label>
                        <input type="text" class="form-control" :name="'block_subheading_' + block" required :id="'block_subheading_' + block" v-model="block_subheading" :placeholder="'Enter Block #' + block + ' subheading'">
                    </div>                    
                    <div class="my-2 border-top py-2 border-bottom form-group">
                        <label for="list" class="label h5 font-weight-bold"> List </label>
                        {{block_list}}
                        <input v-for="list in listCount" :key="list" @change="updateList($event)" class="my-2 form-control" type="text" name="list" :id="'list_' + list" :placeholder="'List item ' + list">
                        <button type="button" class="btn bg-theme " @click="addDiv('list')"> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
                        <span class="h6 m-1"> {{listCount}} </span>
                        <button type="button" v-if="listCount > 1" class="btn bg-theme " @click="removeDiv('list')"> <i class="fa fa-minus-circle" aria-hidden="true"></i> </button>
                    </div>
                    <div class="my-2  border-bottom py-2 form-group">
                        <label for="link" class="label h5 font-weight-bold"> Links </label>
                        {{block_link}}
                        <input v-for="link in linkCount" :key="link" class="my-2 form-control" type="text" name="link" :id="'link_' + link" :placeholder="'Link item ' + link">
                        <button type="button" class="btn bg-theme " @click="addDiv('link')"> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
                        <span class="h6 m-1"> {{linkCount}} </span>
                        <button type="button" v-if="linkCount > 1" class="btn bg-theme " @click="removeDiv('link')"> <i class="fa fa-minus-circle" aria-hidden="true"></i> </button>
                    </div>
                    <button type="submit" class="btn bg-theme m-1 btn-lg"> Create Resume </button>
                    <button type="reset" class="btn btn-danger m-1">Reset</button>
                </div>
            </form>
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
            block_name: null,
            block_image: null,
            block_heading: null,
            block_subheading: null,
            block_list: [],
            block_link: [{
                title: null,
                url: null
            }],
            blocksCount: 1,
            listCount: 1,
            linkCount: 1,            
            linkItem: {
                name: null,
                url: null
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
                image: []
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
            
            if(type == 'list')
                if(this.block_list.length == this.listCount)
                    this.listCount += 1
            
            if(type == 'link')
                if(this.block_link.length == this.linkCount)
                    this.linkCount += 1
        },

        removeDiv(type)
        {

            if(type == 'block')
                if(this.blocksCount > 1)
                {
                    this.blocksCount = this.blocksCount - 1
                }
            
            if(type == 'list')
                if(this.listCount > 1)
                    this.listCount -= 1
            
            if(type == 'link')
                if(this.linkCount > 1)
                    this.linkCount -= 1
        },

        updateList(event)
        {
            this.block_list.push(event.target.value);
        }

    }
}
</script>

<style>

</style>