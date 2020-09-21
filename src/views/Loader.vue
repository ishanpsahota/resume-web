<template>
    <div id="waitforit" class=" row vh-100 vw-100 p-0 m-0 ">
        <vue-headful :title=title />       
        <div class="col-8  m-auto text-center p-3 ">
            <h3> As Barney Stinson says, </h3>
            <h1 class=""> Wait for it <br> <div class="spinner-border text-primary"></div> </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    data() {
        return {
            title: 'Wait for it.'
        }
    }
}
</script>

<style>

</style>