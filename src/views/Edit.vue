<template>
    <div id="edit" class="row w-100 m-0 p-0 animate__animated animate__fadeIn"> 
		<vue-headful :title=title />       
        <div class="row w-100 p-0 m-0">
            <h1 class="display-3"> Edit </h1>
            <div class="col-12 border-bottom p-3">
                <h1 class=""> Your Blogs </h1>
                <div class="row w-100 p-0 m-0">
                    <div v-if="blogs.length > 0">
                        <div v-for="blog in blogs" :key="blog.randomId" class="card col-12 col-md-2">
                            <img :src="blog.heroimg.image" class="img-fluid card-img-top">
                            <div class="card-body">
                                {{blog.title}}
                            </div>
                            <div class="card-footer">
                                <button type="button" class="btn btn-dark" @click="edit(blog.randomId)"> <i class=" fas fa-edit    "></i> </button>
                                <button type="button" class="btn btn-danger" @click="deleteBlog(blog.randomId)"> <i class="fa fa-trash" aria-hidden="true"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h3> No blogs present. Add one <a href="/new"> now! </a> </h3>
                    </div>
                </div>
            </div>
            <div class="col-12 p-3 border-bottom">
                <h1 class=""> Your Details </h1>
                <div class="row w-100 p-0 m-0">
                    <div v-if="self">                        
                    </div>
                    <div v-else>
                        <h3> No blogs present. Add one <a href="/new"> now! </a> </h3>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Edit',
    data() {
        return {
            title: 'Edit',
            blogs: [],
            self: []
        }
    }
}
</script>

<style>

</style>