<template>
    <div id="welcome" class="row m-0 w-100 bg-white animate__animated animate__fadeIn" >
        <vue-headful :title="title" />	
        
		<!-- <div v-if="loading.resume"> -->
            <Loader v-if="loading.resume" />
		<!-- </div> -->
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
                <!-- About -->
                    <About :resume=resume />
                <!-- About end -->
                <!-- Projects -->
                    <Projects :projects=resume.projects />
                <!-- Projects block end -->
                <!-- Work experience  -->
                    <WorkExp :exp=resume.workexp />
                <!-- Work exp end -->
                <!-- Skills -->
                    <Skills :skills=resume.skills />
                <!-- Skills block end -->
                <!-- Education -->                
                    <Education :education=resume.education />
                <!-- Education block end -->                                
                <!-- Footer  -->
                    <Footer :resume=resume />
                <!-- Footer end -->
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

// import Nav from '../components/Nav'
// import IgSvg from '../components/IgSvg'
import Loader from '../components/Loader'
import Footer from '../components/Footer'

import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import WorkExp from '../components/WorkExp'

export default {

    name: 'Welcome',

    components: {
        Education,
        Skills,
        Projects,
        WorkExp,
        About,
        // Nav,
        // IgSvg
        Loader,
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