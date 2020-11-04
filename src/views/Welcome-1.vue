<template>
	<div id="welcome" class="row w-100 m-0" >
		<vue-headful :title="title" />	
		<div v-if="loading.resume" class="row m-0 fullsize w-100"	id="loader">
			<div class="m-auto text-center">
				<div class="spinner-border fa-3x text-light"> </div>			
				<h1><em> Let me just wake up the server real quick </em></h1>
				<!-- <p class="zzz h3 "> zzzz </p> -->
			</div>
		</div>
		<div class="row m-0 row-bg  fullsize w-100 animate__animated animate__fadeIn" v-bind:style="bg_m()" id="welcome">			
			<div class="col-12 d-flex row-bg-i flex-column text-center p-4" >
				<div class="m-auto text-light">
					<h1 class="display-1"> {{resume.name}}</h1>	
					<h2 class=""> professional bio  </h2>		
					<a href="#about" class="btn btn-danger rounded-pill text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
				</div>
			</div>
		</div>		
		<div class="row m-0 p-5 text-center fullsize d-flex flex-column" id="about">
			<div class="col-12 p-5 m-auto text-center" data-aos="fade-down">				
				<h1 class="my-3"> {{resume.title}} </h1>
				<div class="profile-img my-4 mx-auto p-0">
					<img :src="resume.profile" class=" p-0" />
				</div>
				<p class="lead">					
					{{resume.bio}}
				</p>
				<a href="#work" class="btn rounded-pill text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
			</div>
			<hr class="def-hr">
		</div>
		<div class="row m-0 p-5" id="work" data-aos="fade-up">
			<h1 class=" font-weight-bold"> Work Experience </h1>			
			<WorkExp v-for="(exp, e_i) in resume.workexp" :key="e_i" :exp=exp  />
			<a href="#projects" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="projects" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Projects </h1>
			<Projects v-for="(project, p_i) in resume.projects" :key="p_i" :project=project  />
			<a href="#education" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="education" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Education </h1>
			<Education v-for="(edu, ed_i) in resume.education" :key="ed_i" :edu=edu />
			<a href="#skills" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="skills" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Skills </h1>
			<Skills v-for="(skill, s_i) in resume.skills" :key="s_i" :skill=skill />
			<a href="#certificates" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="certificates" data-aos="fade-up">
			<h1 class=" font-weight-bold"> Certificates </h1>
			<Certificates v-for="(cert, c_i) in resume.certificates" :key="c_i" :cert=cert />
			<a href="#volunteer" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.volunteer" class="row m-0 p-5" id="volunteer" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Volunteer </h1>
			<Volunteer v-for="(work, w_i) in resume.volunteer" :key="w_i" :work=work />
			<a href="#achievements" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.achievements" class="row m-0 p-5" id="achievements" data-aos="fade-up">
			<h1 class=" font-weight-bold"> Achievements </h1>
			<Achievements v-for="(achieve, a_i) in resume.achievements" :key="a_i" :achieve=achieve />
			<a href="#causes" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.causes" class="row m-0 p-5" id="causes" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Causes </h1>
			<Causes v-for="(cause, c_i) in resume.causes" :key="c_i" :cause=cause />
			<a href="#references" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.references" class="row m-0 p-5" id="causes" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> References </h1>
			<References v-for="(ref, r_i) in resume.references" :key="r_i" :ref=ref />
			<a href="#interests" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.interests" class="row w-100 m-0 p-5" id="interests" data-aos="fade-up">
			<!-- <h1 class="display-4 font-weight-bold"> Interests </h1> -->
			<Interests :interests=resume.interests />
			<a href="#connect" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5 w-100" id="connect" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Let's connect! </h1>			
			<div v-if="resume.instagram" class="row w-100 m-1 p-1" id="connect_ig">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fab fa-instagram fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="'https://instagram.com/' + resume.instagram" :class=" mode == 'dark' ?' text-light' : ' text-dark ' + ' lead '"> Connect on IG! </a>
				</div>
			</div>
			<div v-if="resume.linkedin" class="row w-100 m-1 p-1" id="connect_linkedin">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="resume.linkedin" :class=" mode == 'dark' ?' text-light' : ' text-dark ' + ' lead '"> Connect on LinkedIn! </a>
				</div>
			</div>	
			<div v-if="resume.github" class="row w-100 m-1 p-1" id="connect_linkedin">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fab fa-github fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="'https://github.com/' + resume.github" :class=" mode == 'dark' ?' text-light' : ' text-dark ' + ' lead '"> Connect on GitHub! </a>
				</div>
			</div>	
			<div v-if="resume.email" class="row w-100 m-1 p-1" id="connect_linkedin">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="'mailto:' + resume.email" :class=" mode == 'dark' ?' text-light' : ' text-dark ' + ' lead '"> Send me an e-mail! </a>
				</div>
			</div>			
			<!-- <a href="#references" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> -->
		</div>
	</div>	
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

import WorkExp from '../components/WorkExp'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Causes from '../components/Causes'
import References from '../components/References'
import Volunteer from '../components/Volunteer'
import Certificates from '../components/Certificates'
import Interests from '../components/Interests'

import api from '../api/index'

export default {

	name: 'Welcome',

	components: {

		WorkExp,
		Projects,
		Education,
		Skills,
		Achievements,
		Causes,
		Certificates,
		References,
		Volunteer,
		Interests

	},

	data() {
		return {
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
			mode: null			
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
		
		getDate(date)
        {
            const d = new Date(date)                
            return d.toDateString()
		},
		
		getSkill(level)
		{
			var l = (level / 5) * 100 
			return l.toString() + '%';
		},

		getMode()
		{

			if(localStorage.getItem('mode') == 'dark')
			{
				this.mode = 'dark'
				return " bg-theme text-light "
			}
			else 
			{ 
				this.mode = 'light'
				return " bg-white text-dark "
			}

		}
	},

	beforeMount()
	{
		this.getResume();		
	},

	mounted()
	{
		this.getMode()
	},

	updated()
	{
		this.getMode();
	}
}
</script>

<style>

/* .icon-link
{
	background-color: #254666;
	color: #fff;
}

.icon-link:hover
{
	background-color:#91142f;
	color: #fff;
	border: none;
	transition: 0.75s;
} */

.zzz
{
    overflow: hidden;
    width: 0;
	animation: zz 5s linear infinite;
	display: inline;
}

@keyframes zz
{
    0% {
        width: 0px;
    }

    20% {
        width: 20px;
    }

    40% {
        width: 40px;
    }

    60% {
        width: 60px;
    }

    80% {
        width: 80px;
    }

    100% {
        width: 100px;
    }

}



</style>