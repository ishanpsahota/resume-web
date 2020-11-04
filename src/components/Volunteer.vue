<template>
    <div class="row w-100 p-1" >
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
            <h3> <strong> {{work.title}} </strong> </h3>										
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <p class="lead"	> {{work.details}} </p>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Volunteer',

    props: {
        work: Object
    }

}
</script>

<style>

</style>