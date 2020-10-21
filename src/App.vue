<template>
	<div ref="app" id="app" class="container-fluid p-0 m-0 bg-theme text-light">		
		<div class="sticky-top shadow">
			<Nav />		
		</div>		
		<div class="fullsize w-100">
			<router-view />
		</div>
	</div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

import 'pattern.css/dist/pattern.css'

import Nav from './components/Nav'

export default {
	name: 'App',
	components: {
		Nav
	},
	data() {
		return {
			
		}
	},

	methods: {

		
	},

	mounted() {


	}
}
</script>

<style>
	body
	{
		scroll-behavior: smooth;
	}

	#app
	{
		scroll-behavior: smooth;
	}
</style>