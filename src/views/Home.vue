<template>
	<div id="home" class="row w-100 m-0 p-0 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
		<div class="row p-0 m-0 w-100 hrow border-bottom d-flex flex-row" id="me">
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
					<!-- <area shape="rect" coords="0, 0, 50%, 130" alt="insomniacsblogger" href="https://insomniacsblogger.herokuapp.com" target="_blank"> -->
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
						<!-- <li class="list-group-item bg-theme"> PHP, MySQL, CodeIgniter</li>
						<li class="list-group-item bg-theme">HTML, CSS, BS4, JS</li> -->
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
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default {
  name: 'Home',
  data() {
		return {
			title: 'Home'
		}
  },
  components: {

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
