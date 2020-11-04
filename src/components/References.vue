<template>
    <div class="row w-100 p-1" >
        <div class="col-md-6 col-12  text-left m-auto  p-4 text-md-right ">					
            <blockquote class="blockquote">
                <p class="mb-0"> {{ref.quote}} </p>
                <footer class="blockquote-footer">{{ref.by}}</footer>
            </blockquote>
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <p class="lead"	> <i class="fa fa-map-marker" aria-hidden="true"></i> {{ref.title}} </p>
        </div>
    </div>
</template>

<script>
export default {

    name: 'References',

    props: {

        ref: Object

    }

}
</script>

<style>

</style>