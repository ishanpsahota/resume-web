<template>
	<div id="app" class="container-fluid p-0 m-0">
		<div class="row p-0 w-100 m-auto bg-white">
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
	</div>
</template>

<script>

import Nav from './components/Nav'
import RightBar from './components/RightBar'
import Footer from './components/Footer'
import Top from './components/Top'

export default {
	name: 'App',
	components: {
		Nav,
		RightBar,
		Footer,
		Top
	}
}
</script>