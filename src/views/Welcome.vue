<template>
	<div id="welcome" class="row w-100 m-0">
		<vue-headful :title="title" />		
		<div class="row m-0 row-bg  fullsize w-100 animate__animated animate__fadeIn" v-bind:style="bg_m()" id="welcome">			
			<div class="col-12 d-flex flex-column text-center p-4" >
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
			<div class="row w-100 p-md-5 p-3" v-for="exp in resume.workexp" :key="exp.title">
				<div class="col-md-6 col-12 text-left m-auto text-md-right ">
					<h1> <strong> {{exp.org}} </strong> </h1>
				</div>
				<div class="col-md-6 col-12 text-left">
					<ul class="list-group" >
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; {{exp.title}} </li>												
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; <i class="fas fa-map-pin    "></i> {{exp.location}} </li>												
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; <span class="text-warning"> {{getDate(exp.start)}} </span> to <span class="text-warning"> {{getDate(exp.end)}} </span> </li>												
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; <em> Experience &#8628; </em> 
							<ul>
								<li v-for="(detail, i) in exp.details" :key="i" class="h5"> {{detail}} </li>
							</ul>
						</li>												
					</ul>
				</div>				
			</div>
			<a href="#projects" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="projects" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Projects </h1>
			<div class="row w-100 p-md-5 p-3 my-1 border-bottom" v-for="(project, p_i) in resume.projects" :key="p_i">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">
					<a :href="project.url" class="text-light "> 
						<h1> <strong> {{project.title}} </strong> </h1>
					</a>
					<img :src="project.pic" class="img rounded shadow" >
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<ul class="list-group" >
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; 
							<a :href="project.url" class="text-dark btn-lg btn btn-warning"> Visit <i class="fa fa-link" aria-hidden="true"></i> </a>
						</li>															
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; {{project.duration}} </li>
						<li class="list-group-item bg-transparent border-0 h4 font-italic lead"> &nbsp;  {{project.details}} </li>
					</ul>
				</div>
			</div>
			<a href="#education" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="education" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Education </h1>
			<div class="row w-100 p-md-5 p-3" v-for="(edu, e_i) in resume.education" :key="e_i">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1> <strong> {{edu.title}} </strong> </h1>					
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<ul class="list-group" >																					
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; {{edu.institute}} </li>
						<li class="list-group-item bg-transparent border-0 h4"> &nbsp; <i class="fa fa-map-marker" aria-hidden="true"></i> {{edu.location}} </li>
						<li class="list-group-item bg-transparent border-0 h4 font-italic lead"> &nbsp;  {{edu.gpa}} </li>
					</ul>
				</div>
			</div>
			<a href="#skills" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="skills" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Skills </h1>
			<div class="row w-100 p-1" v-for="(skill, s_i) in resume.skills" :key="s_i">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1> <strong> {{skill.title}} </strong> </h1>					
					<h4> <i class="fa fa-star" aria-hidden="true"></i> {{skill.level}}/5 </h4>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<div class="progress">
						<div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
							:style="{'width': getSkill(skill.level) }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="5">{{skill.level}}
						</div>						
					</div>					
				</div>
			</div>
			<a href="#certificates" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div class="row m-0 p-5" id="certificates" data-aos="fade-up">
			<h1 class=" font-weight-bold"> Certificates </h1>
			<div class="row w-100 p-1"  v-for="(cert, c_i) in resume.certificates" :key="c_i">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h3> <strong> {{cert.title}} </strong> </h3>										
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<p class="lead"	> {{getDate(cert.date)}} </p>
				</div>
			</div>
			<a href="#volunteer" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.volunteer" class="row m-0 p-5" id="volunteer" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Volunteer </h1>
			<div class="row w-100 p-1" v-for="(work, v_i) in resume.volunteer" :key="v_i">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h3> <strong> {{work.title}} </strong> </h3>										
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<p class="lead"	> {{work.details}} </p>
				</div>
			</div>
			<a href="#achievements" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.achievements" class="row m-0 p-5" id="achievements" data-aos="fade-up">
			<h1 class=" font-weight-bold"> Achievements </h1>
			<div class="row w-100 p-1" data-aos='' v-for="(achieve, a_i) in resume.achievements" :key="a_i">
				<div class="col-md-6 col-12 text-warning text-left m-auto  p-4 text-md-right ">					
					<h3> <strong> {{achieve.title}} </strong> </h3>										
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<p class="lead"	> {{achieve.details}} </p>
				</div>
			</div>
			<a href="#causes" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.causes" class="row m-0 p-5" id="causes" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> Causes </h1>
			<div class="row w-100 p-1" v-for="(cause, ca_i) in resume.causes" :key="ca_i">
				<div class="col-md-6 col-12  text-left m-auto  p-4 text-md-right ">					
					<h3> <strong> {{cause.title}} </strong> </h3>										
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<p class="lead"	> {{cause.details}} </p>
				</div>
			</div>
			<a href="#references" class="btn rounded-pill text-center mx-auto text-light"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
		</div>
		<div v-if="resume.references" class="row m-0 p-5" id="causes" data-aos="fade-up">
			<h1 class="display-4 font-weight-bold"> References </h1>
			<div class="row w-100 p-1" v-for="(ref, r_i) in resume.references" :key="r_i">
				<div class="col-md-6 col-12  text-left m-auto  p-4 text-md-right ">					
					<blockquote class="blockquote">
						<p class="mb-0"> {{ref.quote}} </p>
						<footer class="blockquote-footer">{{ref.by}}</footer>
					</blockquote>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<p class="lead"	> <i class="fa fa-map-marker" aria-hidden="true"></i> {{cause.location}} </p>
				</div>
			</div>
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
					<a :href="'https://instagram.com/' + resume.instagram" class="text-light lead"> Connect on IG! </a>
				</div>
			</div>
			<div v-if="resume.linkedin" class="row w-100 m-1 p-1" id="connect_linkedin">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="resume.linkedin" class="text-light lead"> Connect on LinkedIn! </a>
				</div>
			</div>	
			<div v-if="resume.github" class="row w-100 m-1 p-1" id="connect_linkedin">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fab fa-github fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="'https://github.com/' + resume.github" class="text-light lead"> Connect on GitHub! </a>
				</div>
			</div>	
			<div v-if="resume.email" class="row w-100 m-1 p-1" id="connect_linkedin">
				<div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
					<h1>
						<i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
					</h1>
				</div>
				<div class="col-md-6 col-12 m-auto p-4 text-left">
					<a :href="'mailto:' + resume.email" class="text-light lead"> Send me an e-mail! </a>
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

import api from '../api/index'

export default {

	name: 'Welcome',
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
			var bg_i = "background: url(" + this.resume.background + "); "
			var bg_p = "background-position: center; "
			var bg_s = "background-size: cover; "
			var bg_a = "background-attachment: fixed; "
			var bg_r = "background-repeat: no-repeat; "
			var bg = bg_i + bg_p + bg_s + bg_a + bg_r
			console.log(bg)
			return bg
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
		}
	},

	beforeMount()
	{
		this.getResume();		
	},
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


</style>