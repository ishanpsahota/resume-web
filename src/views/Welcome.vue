<template>
	<div id="welcome" class="row w-100 m-0 p-0 animate__animated animate__fadeIn">
		<vue-headful :title="title" />
		<!-- <div v-if="load.resume || error.resume || loadErr.resume" class="alert alert-danger alert-dismissible fade show" role="alert">
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				<span class="sr-only">Close</span>
			</button>
			<strong>Not found!</strong> <button class="btn bg-theme btn-block" type="button" @click="getResume()"> Try again!. </button>
		</div> -->
		<!-- {{resume}}	 -->
		<!-- {{resume.blocks[0].name}} -->
		<div  class="row fullsize p-0 m-0 d-flex flex-column flex-md-row">			
			<div class="col-12 p-0 m-0 d-flex flex-column ">
				<span class="mx-auto mt-auto">
					<h1 class="display-1 d-none d-md-block"> Hi, I'm {{resume.name}} </h1>
					<h1 class="d-md-none display-3"> Hi, I'm {{resume.name}} </h1>
				</span>
				<span class="text-center mx-auto mb-auto">
					<h1 class="display-4 d-none d-md-block"> Nice to meet ya! </h1>
					<h1 class="d-md-none display-4"> Nice to meet ya! </h1>
					<h4>
						<a :href="'#' + resume.blocks[0].name" class="text-dark"> 
							<i class="fa fa-angle-down" aria-hidden="true"></i> 
						</a>
					</h4>
				</span>
			</div>
		</div>
		<div class="w-100 row p-2" data-aos="fade-up" v-for="(block, i) in resume.blocks" :key="block.name">
			<div v-if="i % 2 !== 0" class="row fullsize m-0 d-flex flex-row " :id="block.name" >
				<div  class="col-md-6 col-12 p-0 m-auto col-def-img shadow">
					<img :src="block.image" class="col-img m-auto p-0 ">
				</div>
				<div class="col-md-6 text-center col-12 bg-white col-default m-0 d-flex flex-column">				
					<span class="mx-auto mt-auto">
						<h1 class="display-1 d-none d-md-block"> {{block.heading}}</h1>
						<h1 class="d-md-none display-4"> {{block.heading}} </h1>
					</span>
					<span class="mx-auto my-1 text-center">
						<h1 class=" d-none d-md-block"> {{block.subheading}}  </h1>
						<h2 class="d-md-none "> {{block.subheading}} </h2>
					</span>
					<span v-if="block.list" class="mx-auto my-2 d-none d-md-block text-center h2 text-light">
						<span v-for="(list, l_i) in block.list" :key="l_i" class="badge badge-pill bg-theme px-3 py-2 m-1"> {{list}} </span>
					</span>
					<span v-if="block.list" class="mx-auto my-2 text-center h4 d-md-none text-light">
						<span v-for="(list_s, l_s) in block.list" :key="l_s" class="badge badge-pill bg-theme px-3 py-2 m-1"> {{list_s}} </span>
					</span>
					<ul v-if="block.link" class="list-group border-theme-right my-2 h5">
						<a v-for="(link, lk_i) in block.link" :key="lk_i" :href="link.url" target="_blank" class="list-group-item  bg-theme text-light "> {{link.title}} <i class="fa fa-link" aria-hidden="true"></i> </a>										
					</ul>
					<span class="mx-auto mb-auto text-center">						
						<h4 v-if="i+1 < block_length">
							<a :href="'#' + resume.blocks[i+1].name" class="text-dark"> 
								<i class="fa fa-angle-down" aria-hidden="true"></i> 
							</a>
						</h4>
						<h4 v-else>
							<a href="#connect" class="text-dark"> 
								<i class="fa fa-angle-down" aria-hidden="true"></i> 
							</a>
						</h4>
					</span>
				</div>			
			</div>		
			<div v-else class="row fullsize m-0 d-flex flex-row-reverse " :id="block.name">
				<div  class="col-md-6 col-12 p-0 m-auto col-def-img shadow">
					<img :src="block.image" class="col-img m-auto p-0 ">
				</div>
				<div class="col-md-6 text-center col-12 bg-white col-default m-0 d-flex flex-column">				
					<span class="mx-auto mt-auto">
						<h1 class="display-1 d-none d-md-block"> {{block.heading}}</h1>
						<h1 class="d-md-none display-4"> {{block.heading}} </h1>					
					</span>	
					<span class="mx-auto my-1 text-center">
						<h1 class=" d-none d-md-block"> {{block.subheading}}  </h1>
						<h2 class="d-md-none "> {{block.subheading}} </h2>						
					</span>				
					<span v-if="block.list" class="mx-auto my-2 d-none d-md-block text-center h2 text-light">
						<span v-for="(list, l_i) in block.list" :key="l_i" class="badge badge-pill bg-theme px-3 py-2 m-1"> {{list}} </span>
					</span>
					<span v-if="block.list" class="mx-auto my-2 text-center h4 d-md-none text-light">
						<span v-for="(list_s, l_s) in block.list" :key="l_s" class="badge badge-pill bg-theme px-3 py-2 m-1"> {{list_s}} </span>
					</span>
					<ul v-if="block.link" class="list-group border-theme-right my-2 h5">
						<a v-for="(link, lk_i) in block.link" :key="lk_i" :href="link.url" target="_blank" class="list-group-item  bg-theme text-light "> {{link.title}} <i class="fa fa-link" aria-hidden="true"></i> </a>										
					</ul>
					<span class="mx-auto mb-auto text-center">
						<h4 v-if="i+1 < block_length">
							<a :href="'#' + resume.blocks[i+1].name" class="text-dark"> 
								<i class="fa fa-angle-down" aria-hidden="true"></i> 
							</a>
						</h4>
						<h4 v-else>
							<a href="#connect" class="text-dark"> 
								<i class="fa fa-angle-down" aria-hidden="true"></i> 
							</a>
						</h4>
					</span>
				</div>			
			</div>			
		</div>
		<div class="row fullsize p-0 m-0 " id="connect">
			<div data-aos="fade-down" class="col-12 d-flex flex-column">
				<div class="mx-auto mt-auto">
					<h1 class="display-1 d-none d-md-block">
						Let's connect!
					</h1>
					<h1 class="display-4 d-md-none">
						Let's connect
					</h1>
				</div>
				<div class="mx-auto mt-3 mb-auto">
					<div class="col-12 text-center">					
						<a class="m-1" target="_blank" :href="resume.instagram">
							<button class="btn m-1 icon-link" type="button"  >
								<h1>
									Follow Me <i class="fab fa-instagram    "></i>
								</h1>
							</button>
						</a> <br>
						<a class="m-1" target="_blank" :href="resume.linkedin">
							<button class="btn m-1 icon-link" type="button"  >
								<h1> Connect With Me <i class="fab fa-linkedin    "></i> </h1>
							</button>
						</a> <br>
						<a class="m-1" target="_blank" :href="'mailto:' + resume.email">
							<button class="btn m-1 icon-link" type="button" >
								<h1> Mail Me <i class="fa fa-envelope-open " aria-hidden="true"></i> </h1>
							</button>
						</a>						
					</div>				
				</div>
			</div>
		</div>	
		<!-- <div class="row fullsize p-0 m-0 d-flex flex-row " id="me" >
			<div  class="col-md-6 col-12 p-0 m-auto col-def-img shadow">
				<img src="../assets/images/home02-1.jpg" class="col-img m-auto p-0 ">
			</div>
			<div class="col-md-6 text-center col-12 bg-white col-default p-0 m-0 d-flex flex-column">				
				<span class="mx-auto mt-auto">
					<h1 class="display-1 d-none d-md-block"> A little about me</h1>
					<h1 class="d-md-none display-4"> A little about me </h1>
				</span>
				<span class="mx-auto mb-auto text-center">
					<h1 class=" d-none d-md-block"> I'm a 3<sup>rd</sup> year CIS student in BC, Canada </h1>
					<h2 class="d-md-none "> I'm a 3<sup>rd</sup> year CIS student in BC, Canada </h2>
					<h4>
						<a href="#skills" class="text-dark"> 
							<i class="fa fa-angle-down" aria-hidden="true"></i> 
						</a>
					</h4>
				</span>
			</div>			
		</div>		
		<div class="row fullsize p-0 m-0 d-flex flex-row-reverse " id="skills">
			<div  class="col-md-6 col-12 p-0 m-auto col-def-img shadow">
				<img src="../assets/images/home03-1.jpg" class="col-img m-auto p-0 ">
			</div>
			<div class="col-md-6 text-center col-12 bg-white col-default p-0 m-0 d-flex flex-column">				
				<span class="mx-auto mt-auto">
					<h1 class="display-1 d-none d-md-block"> What do I know?</h1>
					<h1 class="d-md-none display-4"> What do I know? </h1>					
				</span>
				<span class="mx-auto my-2 d-none d-md-block text-center h2 text-light">
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> MEVN Stack </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Java, C++ </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> PHP, MySQL, CodeIgniter </span>	
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> HTML, CSS, BS4, JS </span>					
				</span>
				<span class="mx-auto my-2 text-center h4 d-md-none text-light">
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> MEVN Stack </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Java, C++ </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> PHP, MySQL, CodeIgniter </span>	
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> HTML, CSS, BS4, JS </span>					
				</span>
				<span class="mx-auto mb-auto text-center">
					<h4>
						<a href="#work" class="text-dark"> 
							<i class="fa fa-angle-down" aria-hidden="true"></i> 
						</a>
					</h4>
				</span>
			</div>			
		</div>
		<div class="row fullsize p-0 m-0 d-flex flex-row " id="work">
			<div  class="col-md-6 col-12 p-0 col-def-img shadow m-auto">
				<img src="../assets/images/home05-1.jpg" class="col-img m-md-auto mb-0 p-0 ">
			</div>
			<div class="col-md-6 text-center col-12 bg-white col-default py-2 m-0 d-flex flex-column">				
				<span class="mx-auto mt-md-auto mt-2">
					<h1 class="display-1 d-none d-md-block"> Have I worked before?</h1>
					<h1 class="d-md-none display-4"> Have I worked before? </h1>
					<h2 class=""> I have! </h2 >
				</span>
				<span class="mx-auto mb-auto d-none d-md-block text-center h4 my-3 ">
					<ul class="list-group  border-theme-right">
						<li class="list-group-item bg-theme text-light rounded-0"> Web Internship </li>						
						<li class="list-group-item bg-theme text-light rounded-0"> IT Internship </li>						
					</ul>
				</span>
				<span class="mx-auto mb-auto d-md-none text-center h6 my-3 ">
					<ul class="list-group  border-theme-right">
						<li class="list-group-item bg-theme text-light rounded-0"> Web Internship </li>						
						<li class="list-group-item bg-theme text-light rounded-0"> IT Internship </li>						
					</ul>
				</span>
				<span class="mx-auto mb-auto text-center h4 d-md-none text-light">
					<h4>
						<a href="#projects" class="text-dark"> 
							<i class="fa fa-angle-down" aria-hidden="true"></i> 
						</a>
					</h4>
				</span>
			</div>			
		</div>
		<div class="row fullsize p-0 m-0 d-flex flex-row-reverse " id="projects">
			<div  class="col-md-6 col-12 p-0 m-md-auto mt-auto col-def-img shadow">
				<img src="../assets/images/home04-1.jpg" class="col-img m-auto p-0 ">
			</div>
			<div  class="col-md-6 text-center col-12 bg-white col-default m-0 d-flex flex-column">				
				<span class="mx-auto mt-auto">
					<h1 class="display-1 d-none d-md-block"> Have I made anything?</h1>
					<h1 class="d-md-none display-4"> Have I made anything? </h1>
					<h3> I have! </h3>
				</span>
				<ul class="list-group border-theme-right my-2 h5">
					<a href="https://insomniacsblog.000webhostapp.com/" target="_blank" class="list-group-item  bg-theme text-light "> Blog Website 1.0 <i class="fa fa-link" aria-hidden="true"></i> </a>					
					<a href="https://insomniacsblogger.herokuapp.com/" target="_blank" class="list-group-item  bg-theme text-light "> Blog Website 2.0 <i class="fa fa-link" aria-hidden="true"></i> </a>					
					<a href="https://family-tree-i.netlify.app/" target="_blank" class="list-group-item  bg-theme text-light "> Family Tree <i class="fa fa-link" aria-hidden="true"></i> </a>					
					<a href="https://ishanpsahota.000webhostapp.com/" target="_blank" class="list-group-item  bg-theme text-light "> Resume Website <i class="fa fa-link" aria-hidden="true"></i> </a>					
				</ul>
				<span class="mx-auto mb-auto text-center">
					<h4>
						<a href="#interests" class="text-dark"> 
							<i class="fa fa-angle-down" aria-hidden="true"></i> 
						</a>
					</h4>
				</span>
			</div>			
		</div>
		<div class="row fullsize p-0 m-0 d-flex flex-row " id="work">
			<div  class="col-md-6 col-12 p-0 col-def-img shadow m-auto">
				<img src="../assets/images/home06-1.jpg" class="col-img m-md-auto mb-0 p-0 ">
			</div>
			<div  class="col-md-6 text-center col-12 bg-white col-default py-2 m-0 d-flex flex-column">				
				<span class="mx-auto mt-md-auto  mt-2">
					<h1 class="display-1 d-none d-md-block"> What are my interests?</h1>
					<h1 class="d-md-none display-4"> What are my interests? </h1>
					<h2 class=""> ! </h2 >
				</span>
				<span class="mx-auto my-2 d-none d-md-block text-center h2 text-light">
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Machine Learning </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Driving </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Cooking </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Music </span>	
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Reading </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> and many more ... </span>
				</span>
				<span class="mx-auto my-2 text-center h4 d-md-none text-light">
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Machine Learning </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Driving </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Cooking </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Music </span>	
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> Reading </span>
					<span class="badge badge-pill bg-theme px-3 py-2 m-1"> and many more ... </span>
				</span>
				<span class="mx-auto mb-auto text-center h4 ">
					<h4>
						<a href="#connect" class="text-dark"> 
							<i class="fa fa-angle-down" aria-hidden="true"></i> 
						</a>
					</h4>
				</span>
			</div>			
		</div>	
		<div class="row fullsize p-0 m-0 " id="connect">
			<div data-aos="fade-down" class="col-12 d-flex flex-column">
				<div class="mx-auto mt-auto">
					<h1 class="display-1 d-none d-md-block">
						Let's connect!
					</h1>
					<h1 class="display-4 d-md-none">
						Let's connect
					</h1>
				</div>
				<div class="mx-auto mt-3 mb-auto">
					<div class="col-12 text-center">					
						<a class="m-1" target="_blank" href="https://instagram.com/ishanpsahota">
							<button class="btn m-1 icon-link" type="button"  >
								<h1>
									Follow Me <i class="fab fa-instagram    "></i>
								</h1>
							</button>
						</a> <br>
						<a class="m-1" target="_blank" href="https://www.linkedin.com/in/ishan-prasad-b35a91181/">
							<button class="btn m-1 icon-link" type="button"  >
								<h1> Connect With Me <i class="fab fa-linkedin    "></i> </h1>
							</button>
						</a> <br>
						<a class="m-1" target="_blank" href="mailto:ishanprasad.sahota@gmail.com">
							<button class="btn m-1 icon-link" type="button" >
								<h1> Mail Me <i class="fa fa-envelope-open " aria-hidden="true"></i> </h1>
							</button>
						</a>						
					</div>				
				</div>
			</div>
		</div>			 -->
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
			block_length: 0
		}
	},

	methods: {

		getResume()
        {
            this.load.resume = false
            this.loading.resume = true

            api.getResume()
            .then(res => {

                console.log(res)

                if(res.status == 200)
                {                    
                    this.loading.resume = false
                    this.loaded.resume = true
					this.resume = res.data.resume  
					this.block_length = this.resume.blocks.length;
					// console.log('l ' + this.block_length)                  
                }
            }).catch(err => {

                this.loading.resume = false
                this.loadErr.resume = true
				this.error.resume = err;
				this.load.resume = true
            

            })
        }

	},

	beforeMount()
	{
		this.getResume();
		AOS.init();
	},

	beforeUpdate()
	{
		AOS.refresh();
	}
}
</script>

<style>

.icon-link
{
	background-color: #254666;
	color: #fff;
}

.icon-link:hover
{
	background-color:#91142f;
	color: #fff;
	transition: 0.75s;
}

</style>