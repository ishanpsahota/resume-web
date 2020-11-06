<template>
	<div ref="app" id="app" class="container-fluid p-0 m-0 ">
		<!-- <div class="row bg-black m-0 p-2 w-100">
			<button class="btn btn-outline-light m-1" type="button" v-if="mode == 'dark'" @click="changeMode(mode)"> <i class="fas fa-sun    "></i> </button>
            <button class="btn btn-outline-light m-1" type="button" v-if="mode == 'light'" @click="changeMode(mode)"> <i class="fas fa-moon    "></i> </button>
		</div>			 -->
		<!-- <div class="sticky-top m-0 shadow"> -->
		<Nav />		
		<!-- </div>		 --> 
		<div class="row p-0 m-0 fullsize w-100 " >
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
		
			mode: localStorage.getItem('mode')

		}
	},

	methods: {

		getMode()
		{
			// console.log(localStorage.getItem('mode'))

			if(localStorage.getItem('mode') == 'dark')
			{ 
				// console.log('h')
				return " bg-theme text-light "
			}
			else { 
				// console.log('ah')
				return " bg-light text-dark "
			}
		},

		changeMode(mode)
		{
			if(mode == 'dark')
            {
                localStorage.setItem('mode', 'light')
                this.mode = 'light'
            }
            else
            {
                localStorage.setItem('mode', 'dark')
				this.mode = 'dark'
			}

			this.getMode();
			
			// console.log(mode)
		}
		
	},

	beforeMount()
	{
		localStorage.setItem('mode', 'dark');
	},

	mounted() {

		this.getMode();

	},

	beforeUpdate()
	{
		this.getMode();
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