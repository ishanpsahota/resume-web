<template>
    <div class="row w-100 p-1" >
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
            <h3> <strong> {{cert.title}} </strong> </h3>										
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <p class="lead"	> {{getDate(cert.date)}} </p>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Certificates',

    props: {

        cert: Object

    },

    methods: {

        getDate(date)
        {
            const d = new Date(date)   
            const m = d.getMonth();
            const y = d.getFullYear();             
            return m + '/' + y;
		},
    }

}
</script>

<style>

</style>