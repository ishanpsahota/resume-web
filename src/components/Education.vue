<template>
    <div class="row w-100 p-md-5 p-3" >
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
            <h1> <strong> {{edu.title}} </strong> </h1>					
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <ul class="list-group" >																					
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; {{edu.institute}} </li>
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; <i class="fa fa-map-marker" aria-hidden="true"></i> {{edu.location}} </li>
                <li class="list-group-item bg-transparent border-0 h4 font-italic lead"> &nbsp;  {{edu.gpa}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Education',
    props: {

        edu: Object

    }

}
</script>

<style>

</style>