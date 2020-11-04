<template>
    <div id="welcome" class="row m-0 w-100 bg-white animate__animated animate__fadeIn" >
        <vue-headful :title="title" />	
        <Nav />
		<div v-if="loading.resume" class="row m-0 fullsize w-100 text-dark"	id="loader">
			<div class="m-auto text-center">
				<div class="spinner-border fa-3x "> </div>			
				<h1><em> Let me just wake up the server real quick </em></h1>
				<!-- <p class="zzz h3 "> zzzz </p> -->
			</div>
		</div>
        <div v-else class="row p-0 m-0  text-dark  w-100 ">
            <div class="row fullsize_n m-0 p-5 text-center bg-img-wrapper d-flex flex-column " v-bind:style="{ 'background-image': 'url(\'' + resume.background + '\')'  }">
                    <blockquote class="blockquote"> Life's a truck full of Fs &amp; Oofs.
                        <footer class="blockquote-footer">Quoting myself</footer>
                    </blockquote>
            </div>
            <!-- <div class="row m-0 p-0 fullsize-strict overflow-hidden">                
                <div class="col-12 col-md-6 p-5 m-auto text-center animate__animated animate__fadeIn" >
                    <h1 class="display-4"> {{resume.name}} </h1>
                </div>
                <div class="col-12 col-md-6 p-0 text-center profile-img-def">
                    <img :src="resume.profile" class="" />
                </div>
            </div> -->
            <div class="row m-0 p-0 fullsize w-100 bg_black_row" id="bg_black_row">
                <div class="row m-0 p-5 fullsize " id="about">  
                    <div class="col-12 m-auto">
                        <h1 class="display-3"> ABOUT </h1>
                        <p class=" h3 "> {{resume.bio}} </p>
                        <blockquote class="blockquote">
                            Also does a quite lot of binge-watching 😉
                        </blockquote>
                    </div>
                </div>
                <div class="row m-0 w-100 p-0 fullsize " id="projects">  
                    <div class="col-12 p-5">
                        <h1 class="display-4"> PROJECTS </h1>
                    </div>
                    <div class="col-12 m-auto">                        
                        <div class="row p-0 mx-auto justify-content-center ">
                            <div v-for="(project, p_i) in resume.projects" :key="p_i" v-bind:style="{ 'background-image': 'url(\'' + project.pic + '\')' }" class="col-lg-4 img-box col-md-4 col-sm-6 p-0 d-flex flex-column  m-0 col-10">
                                <div class="h-100 w-100 d-flex flex-column img-box-txt ">
                                    <!-- <div class="w-100 h-100 m-auto "> -->
                                        <a :href="project.url" class=" m-auto  text-center text-light">
                                            <h4 class="m-auto  text-center"> {{project.title}} </h4>
                                        </a>
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row m-0 p-5 fullsize w-100 " id="social">  
                    <div class="col-12">
                        <h1 class="display-4 my-auto"> SOCIAL </h1>
                    </div>
                    <div class="row w-100 p-0 m-0 mt-2 h-50">
                        <div class="col-12 text-center col-md-3 m-auto" id="github">
                            <h1 class="display-4 my-2"> GitHub </h1>
                            <p class="h4"> Check out my
                                <a :href="'https://github.com/' + resume.github" class="btn m-1 btn-block btn-primary">
                                    <i class="fab fa-github fa-2x" aria-hidden="true"></i> 
                                </a> 
                                It's mostly empty though. </p>
                        </div>                    
                        <div class="col-12 col-md-3 m-auto text-center" id="ig">
                            <h1 class="display-4 my-2"> Instagram  </h1>
                            <p class="h4"> Follow me on 
                                <a :href="'https://instagram.com/' + resume.instagram" class="btn btn-block m-1  instagram text-light">
                                    <i class="fab fa-instagram fa-2x" aria-hidden="true"></i> 
                                </a> 
                                It's mostly me though. 
                            </p>                      
                                    
                        </div>    
                        <div class="col-12 col-md-3 m-auto text-center" id="ig">
                            <h1 class="display-4 my-2"> LinkedIn  </h1>
                            <p class="h4"> Connect with me on 
                                <a :href="resume.linkedin" class="btn btn-block m-1  btn-primary text-light">
                                    <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i> 
                                </a> 
                                It's mostly me being professional though. 
                            </p>                      
                                    
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

import $ from 'jquery'
import api from '../api/index'

import Nav from '../components/Nav'
// import IgSvg from '../components/IgSvg'

export default {

    name: 'Welcome',

    components: {
        Nav,
        // IgSvg
    },

    data() {
		return {

            igsvg: require('../../public/assets/illus/ig.svg'),

			title: 'Home',
			load: {
				resume: false,
			},
			loading: {
				resume: false
			},
			loadErr: {
				resume: false
			},
			loaded: {
				resume: false
			},
			resume: null,
			error: {
				resume: false
			},
			
		}
    },
    
    methods: {

		getResume()
        {
            this.load.resume = false
            this.loading.resume = true

            api.getResume()
            .then(res => {               

                if(res.status == 200)
                {                    
                    this.loading.resume = false
                    this.loaded.resume = true
					this.resume = res.data.resume
					this.bg = 'url(' + this.resume.background + ')'
                }
            }).catch(err => {

                this.loading.resume = false
                this.loadErr.resume = true
				this.error.resume = err;
				this.load.resume = true
            })
		},
		
		bg_m()
		{
			// if(this.resume)
			// {
				var bg_i = "background: url(" + this.resume.background + "); "
				var bg_p = "background-position: center; "
				var bg_s = "background-size: cover; "
				var bg_a = "background-attachment: fixed; "
				var bg_r = "background-repeat: no-repeat; "
				var bg = bg_i + bg_p + bg_s + bg_a + bg_r
				// console.log(bg)
				return bg
			// }			
        },

        change_bg()
        {                        

            $(window).on('load', function()
            {                

                $(window).scroll(function() {

                    var box_pos_top = $('.bg_black_row').offset().top;

                    var s_top = $(window).scrollTop();   
                    
                    // console.log(s_top + ' ' + box_pos_top )

                    if(s_top - box_pos_top >= 0)
                    {
                        $('#bg_black_row').addClass(' bg-black-a ').removeClass(' bg-black-r ')
                    }
                    else
                    {
                        $('#bg_black_row').removeClass(' bg-black-a ').addClass(' bg-black-r ')
                    }

                })        
            })
        }
        
        // resizeImg()
        // {
            
        //     var box = $('#welcome-box-01');
        //     var img = $('#profile_img')
        //     var box_ht = box.height();
        //     var box_wdth = box.width();      
        //     // var pos  = img.position()      
        //     var img_left = img.position().left;
        //     var img_top = img.position().top;            
        //     var img_top_pc = (img_top / box_ht) * 100;
        //     var img_left_pc = (img_left / box_wdth) * 100;

        //     // console.log(pos)
        //     // console.log(img_top + ' ' + box_ht)
        //     // console.log(box_wdth + ' ' + img_left)

        //     $(window).scroll(function() {

        //         var scroll = $(window).scrollTop();
        //         var scroll_in_pc = (scroll / box_ht) * 100;                

        //         var new_top = img_top_pc - scroll_in_pc + 7;
        //         var new_left = img_left_pc - scroll_in_pc + 7;                                

        //         if(scroll == 0)
        //         {
        //             img.css('left',  '50%');
        //             img.css('top',  '50%');
        //         }
        //         else
        //         {
        //             if(new_left < 5)
        //             {
        //                 img.css('left', '5%');
        //             }
        //             else img.css('left', new_left + '%');

        //             if(new_top < 25.5)
        //             {
        //                 img.css('top', '25.5%');    
        //             }
        //             else img.css('top', new_top + '%');
        //         }            

        //     })

        // }
    },

    beforeMount()
	{
		this.getResume();		
    },
    
    mounted()
    {
        this.change_bg();
        
    }


}
</script>

<style>

</style>