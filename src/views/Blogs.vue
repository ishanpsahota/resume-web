<template>
    <div id="blogs" class="row w-100 m-0 p-0 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
        <div class="col-12">
            <h1 class="display-1"> Blogs </h1>
            <div class="row w-100 m-0 p-0">
                <div v-if="blogs.length > 0">
                    <div v-for="blog in blogs" :key="blog.randomId" class="card col-12 col-md-3">
                        <img :src="blog.heroimg.image" :alt="blog.title" class="img-fluid card-img-top">
                        <div class="card-body">
                            {{blog.title}}
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h3> No blog present for now. Wait for the creator to add some! </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            title: 'Blogs',
            blogs: []
        }
    }
}
</script>

<style>

</style>