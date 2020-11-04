<template>
    <div class="row w-100 p-1" data-aos='' >
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right " v-bind:class="getMode()">					
            <h3> <strong> {{achieve.title}} </strong> </h3>										
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <p class="lead"	> {{achieve.details}} </p>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Achievements',

    props: {

        achieve: Object

    },

    data() {
        return {
            mode: null
        }
    },

    methods: {

        getMode()
        {
            if(this.mode == 'dark')
                return " text-warning "
            else return " text-primary "
        }

    },

    beforeMount()
    {
        this.mode = localStorage.getItem('mode')
    },

    beforeUpdate()
    {
        this.mode = localStorage.getItem('mode')
    }

}
</script>

<style>

</style>