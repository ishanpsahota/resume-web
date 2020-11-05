<template>
    <div id="welcome" class="row m-0 w-100 bg-white animate__animated animate__fadeIn" >
        <vue-headful :title="title" />	
        <Nav />
		<div v-if="loading.resume" class="row m-0 fullsize w-100 text-dark"	id="loader">
			<div class="m-auto text-center">
				<div class="spinner-border fa-3x "> </div>			
				<h1><em> Sorry I fell asleep <i class="fa fa-bed" aria-hidden="true"></i> </em></h1>
				<!-- <p class="zzz h3 "> zzzz </p> -->
			</div>
		</div>
        <div v-else class="row p-0 m-0  text-dark  w-100 animate__animated animate__fadeIn">
            <!-- <div class="row fullsize_n m-0 p-5 text-center bg-img-wrapper d-flex flex-column " v-bind:style="{ 'background-image': 'url(\'' + resume.background + '\')'  }"> -->
            <div class="row fullsize_n m-0 p-5 text-center " >
                <div class="col-12">
                    <blockquote class="blockquote"> Life's a truck full of Fs &amp; Oofs.
                        <footer class="blockquote-footer">Quoting myself</footer>
                    </blockquote>
                </div>
                <div class="col-10 mx-auto ">
                    <img :src="resume.background" class="img-fluid profile-img" />
                </div>
                <div class="col-12 p-3">
                    <h1 class="text-uppercase">{{resume.name}} </h1>
                </div>
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
                <div class="row m-0 w-100 p-0 fullsize " id="projects">  
                    <div class="col-12 p-5 my-auto text-center">
                        <h1 class="display-4"> PROJECTS </h1>
                    </div>
                    <div class="col-12 m-auto p-0">                        
                        <div class="row p-0 mx-auto justify-content-center ">                            
                            <div class="img-box-wrapper col-lg-3 col-md-4 col-sm-6 col-10 mx-2 my-4 text-center" v-for="(project, p_i) in resume.projects" :key="p_i">
                                <div class="img-box" v-bind:style="{ 'background-image': 'url(\'' + project.pic + '\')' }">                                    
                                    <div class="img-box-txt d-flex flex-column text-center p-3 h-100 w-100 text-light">
                                        <h5 class="mx-auto mt-auto mb-1">
                                            {{project.title}}
                                        </h5>
                                        <a class="btn mx-auto mb-auto mt-1 btn-outline-light rounded-0" :href="project.url">
                                            View Project
                                        </a>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row m-0 p-4 fullsize bg-gray" id="education">                    
                    <div class="col-12 m-auto text-center">
                        <h1 class="display-4 d-none d-md-block"> EDUCATION </h1>
                        <h1 class="d-md-none"> EDUCATION </h1>
                        <blockquote class="blockquote">
                            The more I learn, the less I know
                            <footer class="blockquote-footer"> Albert Einsten </footer>
                        </blockquote>
                    </div>                          
                    <div class="row w-100 m-0 p-0 mb-auto justify-content-center">
                        <div v-for="(edu, e_i) in resume.education" :key="e_i" class=" edu-box card rounded-0 m-2 p-4 text-center col-10 col-sm-6 col-md-4 col-lg-3 ">                                
                            <h2 class="card-title d-none d-md-block"> {{edu.title}} </h2>
                            <h4 class="card-title d-block d-md-none "> {{edu.title}} </h4>
                            <div class="card-body">
                                <p class="lead">
                                    {{edu.institute}}
                                </p>
                                <p class="card-text gpa">
                                    {{edu.gpa}}
                                </p>
                            </div>
                        </div>                            
                    </div>                    
                </div>
                <div class="row m-0 p-md-4 fullsize" id="skills">
                    <div class="col-12 m-auto text-center">
                        <h1 class="display-4 d-none d-md-block"> SKILLS </h1>
                        <h1 class="d-md-none"> SKILLS </h1>
                    </div>
                    <div class="row w-100 mb-auto mx-auto p-0">                        
                        <ul class="list-group mb-auto mx-auto col-lg-6 p-1 col-12 list-group-flush ">
                            <li class="list-group-item h4" v-for="(skill, s_i) in resume.skills" :key="s_i">
                                {{skill.title}}
                                <span class="float-right skill-star">
                                    <span class="mx-1 " v-for="i in getSkill(skill.level)" :key="i">
                                        <i class="fa fa-star " aria-hidden="true"> </i>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row m-0 p-4 fullsize bg-gray" id="work">                    
                    <div class="col-12 m-auto text-center">
                        <h1 class="display-4 d-none d-md-block"> WORK EXPERIENCE </h1>
                        <h1 class="d-md-none"> WORK EXPERIENCE </h1>
                        <blockquote class="blockquote">
                            Passion is the difference between having a job &amp; having a career.
                            <footer class="blockquote-footer"> Unknown </footer>
                        </blockquote>
                    </div>                          
                    <div class="row w-100 m-0 p-0 mb-auto justify-content-center">
                        <div v-for="(work, w_i) in resume.workexp" :key="w_i" class=" work-box card rounded-0 m-2 p-4 text-center col-10 col-sm-6 col-md-4 col-lg-3 ">                                
                            <h2 class="card-title d-none d-md-block"> {{work.title}} </h2>
                            <h4 class="card-title d-block d-md-none "> {{work.title}} </h4>
                            <div class="card-body">
                                <p class="lead">
                                    {{work.org}}
                                </p>
                                <p class="card-text gpa">                                    
                                    <span v-for="(detail, d) in work.details" :key="d">
                                        <i class="fa fa-star" aria-hidden="true"></i> {{detail}} <br>
                                    </span>                                    
                                </p>
                            </div>
                        </div>                            
                    </div>                    
                </div>
                <Footer :resume=resume />
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
import Footer from '../components/Footer'

export default {

    name: 'Welcome',

    components: {
        Nav,
        // IgSvg
        Footer
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
            flip: false
			
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
                        $('#bg_black_row').addClass(' bg-black-aa ').removeClass(' bg-black-rr ')
                    }
                    else
                    {
                        $('#bg_black_row').removeClass(' bg-black-aa ').addClass(' bg-black-rr ')
                    }

                })        
            })
        },

        getSkill(level)
        {
            return Number(level)
        }

        // getSkill(level)
        // {
        //     var levels = ''

        //     for (let index = 0; index < level; index++) {
                
        //         levels +=  <i class="fa fa-circle" aria-hidden="true"></i> 
                
        //     }

        //     console.log(levels.toString())
        //     return levels
        // }
        
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