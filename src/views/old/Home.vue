<template>
	<div id="home" class="row w-100 m-0 p-2 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
		<!-- <div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row" id="me">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-left">
				<h1 class="display-1"> Hi, </h1>
				<h1> I'm Ishan. </h1>
			</div>
			<div  class="col-12 col-md-6 m-auto">
				<img src="../assets/images/home01.jpg" class="pimg img-fluid my-auto rounded shadow-lg">
			</div>
		</div>
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row-reverse" id="do">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-right">
				<h1 class="display-3"> What do I do? </h1>
				<h2> Glad you asked. <br> I'm a 3rd year student in BC, Canada. </h2>
			</div>
			<div data-aos="fade-down" class="col-12 col-md-6 m-auto">
				<img src="../assets/images/home02.jpg" class="pimg img-fluid my-auto rounded  shadow-lg">
			</div>
		</div>
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row" id="me">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-left">
				<h1 class="display-3"> What do I know? </h1>
				<h6> 
					<ul class="list-group list-group-md-horizontal">						
						<li class="list-group-item bg-theme">MEVN Stack</li>
						<li class="list-group-item bg-theme"> Java, C++ </li>
						<li class="list-group-item bg-theme"> PHP, MySQL, CodeIgniter</li>
						<li class="list-group-item bg-theme">HTML, CSS, BS4, JS</li>
					</ul>
				</h6>
			</div>
			<div data-aos="fade-down" class="col-12 col-md-6 m-auto">
				<img src="../assets/images/home03.jpg" class="pimg img-fluid my-auto rounded shadow-lg">
			</div>
		</div>
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row-reverse" id="do">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-right">
				<h1 class="display-3"> Have I made anything? </h1>
				<h2> I have! <br> I've created some websites. <br> <i class="fa fa-angle-right" aria-hidden="true"></i> </h2>
			</div>
			<div data-aos="fade-down" class="col-12 col-md-6 m-auto">
				<img src="../assets/images/home04.png" class="pimg img-fluid my-auto rounded  shadow-lg" usemap="#webs">
				<map name="webs"> 
					<area shape="rect" coords="0, 0, 240, 130" alt="insomniacsblogger" href="https://insomniacsblogger.herokuapp.com" target="_blank">
					<area shape="rect" coords="0, 0, 50%, 130" alt="insomniacsblogger" href="https://insomniacsblogger.herokuapp.com" target="_blank">
					<area shape="rect" coords="240, 130, 480, 260" alt="insomniacsblogger" href="https://insomniacsblog.000webhostapp.com"  target="_blank">
					<area shape="rect" coords="0, 130, 240, 260" alt="insomniacsblogger" href="https://family-tree-i.netlify.app"  target="_blank">
					<area shape="rect" coords="240, 0, 480, 130" alt="insomniacsblogger" href="https://ishanpsahota.000webhostapp.com"  target="_blank">
				</map>
			</div>
		</div>
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row" id="me">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-left">
				<h1 class="display-3"> Have I worked anywhere before? </h1>
				<h2> I have! </h2>
				<h6> 
					<ul class="list-group list-group-horizontal">						
						<li class="list-group-item bg-theme">Web Development Internship</li>
						<li class="list-group-item bg-theme"> IT Internship </li>						
					</ul>
				</h6>
			</div>
			<div data-aos="fade-down" class="col-12 col-md-6 m-auto">
				<img src="../assets/images/home05.jpg" class="pimg img-fluid my-auto rounded shadow-lg">
			</div>
		</div>
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row-reverse" id="do">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-right">
				<h1 class="display-3"> My Interests? </h1>
				<h2 class=""> Not one! <br> </h2>
				<ul class="list-group  mx-auto ml-sm-auto">
					<li class="list-group-item bg-theme"> Machine Learning </li>
					<li class="list-group-item bg-theme"> Driving </li>
					<li class="list-group-item bg-theme"> Reading </li>
					<li class="list-group-item bg-theme"> Music </li>
					<li class="list-group-item bg-theme"> Cooking, and many more... </li>
				</ul>
			</div>
			<div data-aos="fade-down" class="col-12 col-md-6 m-auto">
				<img src="../../public/assets/images/resume/home06.jpg" class="pimg img-fluid my-auto rounded  shadow-lg" >
				
			</div>
		</div>
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row flex-md-row" id="me">
			<div data-aos="fade-up" class="col-md-6 col-12 m-auto text-center text-md-left">
				<h1 class="display-3"> Anything else? </h1>
				<h2> Wait for it. </h2>
				<h6> 
					<ul class="list-group ">						
						<li class="list-group-item bg-theme">Certificate in Machine Learning from Coursera</li>
						<li class="list-group-item bg-theme"> CCA's Level 1 certificate in HTML, CSS, PHP </li>				
					</ul>
				</h6>
			</div>
			<div data-aos="fade-down" class="col-12 col-md-6 m-auto">
				<img src="https://imgix.bustle.com/rehost/2016/9/13/eb416b5c-45d4-4bb4-b00d-f4a636cd8c06.png?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2" class="pimg img-fluid my-auto rounded shadow-lg">
			</div>
		</div> -->
		<v-touch class="row justify-content-center p-0 m-0  fullsize" v-on:swiperight="prevCard" v-on:swipeleft="nextCard">
			<!-- <div class="row justify-content-center p-0 m-0  fullsize">	 -->
				<div v-if="active != null" class=" col-lg-4 col-md-4 col-sm-5 col-12 m-auto" >
					<div class="card p-0 m-auto" :id="active.block_name" ref="card_home">
						<img :src="active.image" class="card-img">
						<div class="card-body text-center">
							<h4> <strong> {{active.block_heading}} </strong> </h4>
							<p class="h5"> {{active.block_subheading}} </p>
							<button v-if="active.list != null" type="button" class="btn btn-warning rounded-circle" data-toggle="collapse" :data-target="'#' + active.block_name + '_list'">
								<i class="fa fa-angle-down" aria-hidden="true"></i>
							</button>
							<button v-if="active.links != null" type="button" class="btn btn-warning rounded-circle" data-toggle="collapse" :data-target="'#' + active.block_name + '_link'">
								<i class="fa fa-angle-down" aria-hidden="true"></i>
							</button>
						</div>
						<ul class="list-group list-group-flush text-center collapse bg-top text-white" :id="active.block_name + '_list'">
							<li v-for="(list, i) in active.list" :key="i" class="list-group-item bg-transparent"> {{list}} </li>					
						</ul>								
						<ul class="list-group list-group-flush text-center collapse bg-top text-white border-0" :id="active.block_name + '_link'">
							<li v-for="(link, i) in active.links" :key="i" class="list-group-item bg-transparent"> {{link.title}} 
								<a :href="link.url" class=" text-warning "> <i class="fa fa-link" aria-hidden="true"></i> </a>
							</li>					
						</ul>		
					</div>				
				</div>	
				<div v-else class="m-auto text-center">
					<button type="button" class="btn m-auto btn-warning btn-lg" @click="setActive(0)"> Start </button>
				</div>			
			<!-- </div> -->
			<div v-if="resume.blocks" class="col-12 m-1 p-1 text-center">
				{{swipe}}
				<div class="col-12 my-2">
					<!-- <button v-for="(block, i) in resume.blocks" :key="i" type="button" class="btn rounded-circle m-1 btn-sm " v-bind:class=" index == i ? ' btn-primary ' : ' btn-warning ' " @click="setActive(i)"> <i class="far fa-circle    "></i> </button> -->
					<i v-for="(block, i) in resume.blocks" :key="i"  class="fas fa-lg fa-circle   m-1  " v-bind:class=" index == i ? ' text-primary ' : ' text-warning ' " @click="setActive(i)" aria-hidden="true"></i>
				</div>
				<button type="button" v-if="index > 0" class="btn m-1 btn-warning rounded-circle" @click="prevCard()"> <i class="fa fa-angle-left" aria-hidden="true"></i> </button>
				<button type="button"  class="btn m-1 btn-warning rounded-circle" @click="nextCard()"> <i class="fa fa-angle-right" aria-hidden="true"></i> </button>
			</div>
		</v-touch>
	</div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default {
	name: 'Home',
	data() {
		return {
			title: 'Home',
			resume: '',
			visited: '',			
			index: 0,
			active: null,
			swipe: null
		}
	},

	methods: {

		getResume()
		{
			this.resume = {
				blocks: [
					{
						block_name: 'Introduction',
						block_heading: 'Hi, I\'m Ishan',
						block_subheading: '',
						list: null,
						links: null,
						image: 'https://imgix.bustle.com/rehost/2016/9/13/eb416b5c-45d4-4bb4-b00d-f4a636cd8c06.png?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2'
					},
					{
						block_name: 'Little about me',
						block_heading: 'What do I do?',
						block_subheading: 'Glad you asked! \n I\'m a third year student in BC, Canada!',
						list: null,
						links: null,
						image: 'https://imgix.bustle.com/rehost/2016/9/13/eb416b5c-45d4-4bb4-b00d-f4a636cd8c06.png?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2'
					},
					{
						block_name: 'WorkExperience',
						block_heading: 'Have I worked before?',
						block_subheading: 'I have!',
						list: [
							'Web Development',
							'IT Internship'							
						],
						links: null,
						image: 'https://imgix.bustle.com/rehost/2016/9/13/eb416b5c-45d4-4bb4-b00d-f4a636cd8c06.png?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2'
					},
					{
						block_name: 'Skills',
						block_heading: 'What do I know?',
						block_subheading: ' ',
						list: [
							'MEVN Stack',
							'Java, C++'
						],
						links: null,
						image: 'https://imgix.bustle.com/rehost/2016/9/13/eb416b5c-45d4-4bb4-b00d-f4a636cd8c06.png?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2'
					},
					{
						block_name: 'Projects',
						block_heading: 'Have I made anything?',
						block_subheading: 'I have! ',
						list: null,
						links: [
							{
								title: 'Blog Website 1.0',
								url: 'https://insomniacsblog.000webhostapp.com'
							},
							{
								title: 'Blog Website 2.0',
								url: 'https://bit.ly/insomniacblogger'
							}
						],						
						image: 'https://imgix.bustle.com/rehost/2016/9/13/eb416b5c-45d4-4bb4-b00d-f4a636cd8c06.png?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2'
					}
				]
			}

		},	
		
		setActive(index)
		{
			if(index != null) {
				this.index = index;
				this.active = this.resume.blocks[index]
			}
			else this.active = this.resume.blocks[0];
		},

		prevCard()
		{
			if(this.index == 0) return
			else {
				this.index -= 1;				
				this.setActive(this.index)
			}
		},

		nextCard()
		{
			if(this.index == this.resume.blocks.length-1) return
			else {
				this.index += 1;	
				this.setActive(this.index)			
			}
		},

		
	},

	mounted()
	{
		this.getResume();	
		this.setActive(this.index)	
	}
}
</script>

<style >

.hrow
{
	height: 90vh;
}

.home
{
	scroll-behavior: smooth;
}

.himg
{
	height: auto;
	width: 10vw;
}

</style>
