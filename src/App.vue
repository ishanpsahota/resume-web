<template>
	<div id="app" class="container-fluid p-0 m-0">
		<div v-if="state == 'activenow'" class="row p-0 w-100 m-auto bg-white">
			<div class="col-md-10 col-12 mx-auto w-100">				
				<div class="row p-0">
					<Top />
					<div class="col-12 p-0 sticky-top">
						<Nav />
					</div>
					<div class="col-md-10 px-3 py-2 col-12">						
						<router-view />
					</div>
					<div class="col-md-2 py-3 d-md-inline d-none col-12">
						<RightBar />
					</div>
				</div>
			</div>
			<div class="col-12 p-0">
				<Footer />
			</div>
		</div>
		<div v-if="state == 'notActive'">
			<Shutdown />
		</div>
		<div v-if="loading">
			<Loader />
		</div>
	</div>
</template>

<script>

import Nav from './components/Nav'
import RightBar from './components/RightBar'
import Footer from './components/Footer'
import Top from './components/Top'
import Shutdown from './views/Shutdown'
import Loader from './views/Loader'
import services from './api/index'

export default {
	name: 'App',
	components: {
		Nav,
		RightBar,
		Footer,
		Top,
		Shutdown,
		Loader
	},
	data() {
		return {
			state: 'activenow',
			loading: false
		}
	},

	methods: {

		getState() {			

			services.getState()
			.then(res => {

				if(res.status === 200)
				{
					if(res.data.status === 200)
					{
						if(res.data.state == 'activenow')
						{
							setTimeout(() => {
								
								this.loading = false
								this.state = 'activenow'								

							}, 500);

						}

						if(res.data.state == 'notActive')
						{							
							this.loading = true
							
							setTimeout(() => {

								this.loading = false
								this.state = 'notActive'

							}, 1500);	
						}
					}
					else
					{
						this.loading = true
							
						setTimeout(() => {

							this.loading = false
							this.state = 'notActive'

						}, 1500);
					}
				}				

			}).catch(err => {
				if(err)
				{
					this.loading = true

					setTimeout(() => {
						
						this.state = 'notActive'
						this.loading = false
					
					}, 2500);

					

				}

			})

		}

	},

	mounted() {

		// this.getState()
	}
}
</script>