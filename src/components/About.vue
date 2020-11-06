<template>
     <div class="row m-0 p-md-5 p-2 fullsize about-wrapper " id="about">  
        <div class="col-12 col-md-11 m-auto d-flex flex-md-row about bg-gray p-5 flex-column " >
            <div class="col-12 col-md-6 m-auto about-text p-0 text-center text-md-left">
                <h1 class="display-3 "> ABOUT </h1>
                <!-- <p class="lead d-inline px-2 py-1 my-2 rounded  text-dark bg-light"> {{resume.title}} </p> -->
                <p class="lead"> {{resume.title}} </p>
                <p class=" h4 my-2"> {{resume.bio}} </p>
                <blockquote class="blockquote">
                    Also does a quite lot of binge-watching 😉
                </blockquote>                            
            </div>
            <div class="col-12 col-md-6 m-auto text-center ">
                <img :src="resume.profile" class="img-fluid profile-img about-img" />
            </div>
        </div>
        <div class="col-12 text-center d-none d-md-block">
            <button @click="flipDiv()" class="btn" type="button">
                <i  class="fa fa-cube" aria-hidden="true"></i> Click to flip!
            </button>
        </div>
    </div>
</template>

<script>

import $ from 'jquery'

export default {

    name: 'About',
    props: {
        resume: Object
    },

    data() {

        return {
            flip: false
        }
    },

    methods: {

        flipDiv()
        {
            if(this.flip == false)
            {
                // console.log(this.flip) 
                this.flip = true
                $('.about').removeClass(' flex-md-row ').addClass(' flex-md-row-reverse about-reverse ')
                $('.about-text').addClass(' text-right ')
                $('.about-img').addClass(' profile-img-flip ')
                return
            }
            
            if(this.flip == true)
            {
                // console.log(this.flip) 
                this.flip = false
                $('.about').removeClass(' flex-md-row-reverse about-reverse ').addClass(' flex-md-row ')
                $('.about-text').removeClass(' text-right  ')
                $('.about-img').removeClass(' profile-img-flip ')
                return
            }

        },

    }

}
</script>

<style>

</style>