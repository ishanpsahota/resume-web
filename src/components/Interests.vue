<template>
    <div class="row w-100 p-md-5 p-3 my-1">
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">
            <h1 class="display-4 font-weight-bold"> Interests </h1>
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-center h4 ">
            <!-- <ul class="list-group list-group-horizontal m-auto" > -->
                <li class="list-group-item m-2 text-dark shadow bg-warning rounded-pill" v-for="(interest, i) in interests" :key="i"> {{interest}} </li>
            <!-- </ul> -->
        </div>        
    </div>
</template>

<script>
export default {

    name: 'Interests',

    props: {

        interests: Array

    }

}
</script>

<style>

</style>