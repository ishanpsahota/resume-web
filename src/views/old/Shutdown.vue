<template>
    <div id="maintenance" class="bg-light row vh-100 vw-100 p-0 m-0 ">
        <vue-headful :title=title />       
        <div class="col-8 bg-white m-auto text-center p-3 rounded shadow-lg">
            <h1 class=""> This website has been shutdown temporarily for maintenance. <br> We'll be back soon <i class="fas fa-grin    "></i> </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Shutdown',
    data() {
        return {
            title: 'Maintenance in Progress'
        }
    }
}
</script>

<style>

</style>