<template>
	<div id="welcome" class="row w-100 m-0 animate__animated animate__fadeIn">
		<vue-headful :title="title" />
		<div class="row w-100 p-3 border-bottom my-3">
			<div class="col-12">
				<h1 class=""> Top Blogs </h1>		
			</div>
			<div class="row w-100 p-0 m-0">
				<div class="col-lg-3 col-11 card card-home p-0 bg-white border-0 m-2 shadow-sm  rounded">
					<img src="../assets/logos/logo_transparent.png" class="card-img  bg-gray card-img-hover rounded" />
					<div class="card-img-overlay d-flex card-text text-white text-center rounded-lg ">
						<a class="text-white m-auto" href="/blogs">
							<h2 class="my-auto d-none d-lg-block "> See All <i class="fa fa-arrow-right" aria-hidden="true"></i> </h2>				
							<h1 class="my-auto d-lg-none"> See All <i class="fa fa-arrow-right" aria-hidden="true"></i> </h1>				
						</a>
					</div>			
				</div>								
			</div>
		</div>
		<div class="row w-100 my-3 p-3 border-bottom">
			<div class="col-12">
				<h2 class=""> The Artist behind this art ;-) </h2>		
			</div>
			<div class="col-lg-3 card p-0 col-11 bg-white border-0 m-2 shadow-sm border  rounded">
				<img src="../assets/images/home01.jpg" class="card-img card-img-hover rounded" />
				<div class="card-img-overlay d-flex card-text text-white text-center rounded-lg mt-auto">
					<a class="text-white m-auto" href="/whoami">
						<h2 class="my-auto "> Who Am I? </h2>				
					</a>
				</div>			
			</div>				
		</div>
	</div>
</template>

<script>
export default {

	name: 'Welcome',
	data() {
		return {
			title: 'Home'
		}
	}
}
</script>

<style>

</style>