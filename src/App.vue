<template>
	<div ref="app" id="app" class="container-fluid p-0 m-0">
		<div class="sticky-top">
			<Nav />
		</div>
		<router-view />
	</div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

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