<template>
    <div class="row m-0 p-4 fullsize bg-gray" id="work">                    
        <div class="col-12 m-auto text-center">
            <h1 class="display-4 d-none d-md-block"> WORK EXPERIENCE </h1>
            <h1 class="d-md-none"> WORK EXPERIENCE </h1>
            <blockquote class="blockquote">
                Passion is the difference between having a job &amp; having a career.
                <footer class="blockquote-footer"> Unknown </footer>
            </blockquote>
        </div>                          
        <div class="row w-100 m-0 p-0 mb-auto justify-content-center">
            <div v-for="(work, w_i) in exp" :key="w_i" class=" work-box card rounded-0 m-2 p-4 text-center col-10 col-sm-6 col-md-4 col-lg-3 ">                                
                <h2 class="card-title d-none d-md-block"> {{work.title}} </h2>
                <h4 class="card-title d-block d-md-none "> {{work.title}} </h4>
                <div class="card-body">
                    <p class="lead">
                        {{work.org}}
                    </p>
                    <p class="card-text gpa">                                    
                        <span v-for="(detail, d) in work.details" :key="d">
                            <i class="fa fa-star" aria-hidden="true"></i> {{detail}} <br>
                        </span>                                    
                    </p>
                </div>
            </div>                            
        </div>                    
    </div>
</template>

<script>
export default {
    name: 'WorkExp',
    props: {
        exp: Array
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