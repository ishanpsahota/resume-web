<template>
    <div id="nav" class="row m-0 navbar-dark bg-black w-100 p-2">        
        <nav class="navbar nav w-100">
            <div class="btn-group text-right">
                <div v-if="showDiv()" class="btn-group text-right">
                    <button class="btn bg-theme rounded-circle dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">                        
                    </button>
                    <div class="dropdown-menu dropdown-menu-left p-0" aria-labelledby="triggerId">
                        <a class="dropdown-item " href="#about">About</a>                
                        <a class="dropdown-item " href="#work">Work Experience</a>                
                        <a class="dropdown-item " href="#projects">Projects</a>                
                        <a class="dropdown-item " href="#education">Education</a>                
                        <a class="dropdown-item " href="#skills">Skills</a>                
                    </div>
                </div>
            </div>
            <span>
                <a href="/" class="text-light navbar-brand"> Portfolio </a>
                <a href="/blogs" class="text-light mx-1"> Blogs </a>            
                <a v-if="loggedIn" class="text-light mx-1" href="/edit"> Edit </a>
                <a v-if="loggedIn" class="text-danger mx-1" @click="logout()"> <i class="fas fa-sign-out-alt fa-lg   "></i> </a>
            </span>
        </nav>
    </div>
</template>

<script>


export default {
    name: 'Nav',
    components: {
    },

    data() {
        return {
            loggedIn: '',            
        }
    },

    methods: {

        getState(active) {

            var url = this.$route.path.split("/")
            // console.log(url)
            
            if(url[2] == null || url[2] == "")
            {
                if(url[1] == active) return " text-primary "
                else return " text-dark "
            }
            else
            {
                if(url[1] == active) return " text-primary "
                else return " text-dark "
            }
 
        },

        showDiv()
        {
            var route = this.$route.path.split("/");
            // console.log(route);

            if(route[1] == "") return true
            else return false

        },

        logout() {

          this.$store.dispatch('logout');
          this.$router.push('/login');

        }
    },

    mounted() {

        this.loggedIn = !!this.$store.getters.isLoggedIn
        // console.log(this.loggedIn)

    },

    beforeUpdate() {

        this.loggedIn = !!this.$store.getters.isLoggedIn

    }
}
</script>

<style>

#nav
{
    z-index: 999 !important;
}


</style>