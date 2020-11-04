<template>
    <div class="row w-100 p-md-5 p-3">
        <div class="col-md-6 col-12 text-left m-auto text-md-right ">
            <h1> <strong> {{exp.org}} </strong> </h1>
        </div>
        <div class="col-md-6 col-12 text-left">
            <ul class="list-group" >
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; {{exp.title}} </li>												
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; <i class="fas fa-map-pin    "></i> {{exp.location}} </li>												
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; 
                    <span v-if="mode == 'dark'" class="text-warning"> {{getDate(exp.start)}} </span> 
                    <span v-else class="text-primary"> {{getDate(exp.start)}} </span> 
                    to 
                    <span v-if="mode == 'dark'" class="text-warning"> {{getDate(exp.end)}} </span> 
                    <span v-else class="text-primary"> {{getDate(exp.end)}} </span> 
                </li>												
                <li class="list-group-item bg-transparent border-0 h4"> &nbsp; <em> Experience &#8628; </em> 
                    <ul>
                        <li v-for="(detail, i) in exp.details" :key="i" class="h5"> {{detail}} </li>
                    </ul>
                </li>												
            </ul>
        </div>				
    </div>
</template>

<script>
export default {
    name: 'WorkExp',
    props: {
        exp: Object
    },

    data() {
        return {

            mode: localStorage.getItem('mode')

        }
    },

    methods: {

        getDate(date)
        {
            const d = new Date(date)    
            const m = d.getMonth();
            const y = d.getFullYear();            
            return m + '/' + y;
		},

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