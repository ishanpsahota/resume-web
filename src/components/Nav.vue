<template>
    <div id="nav" class="row m-0 navbar-light  w-100 p-2">        
        <nav class="navbar navbar-expand-md nav border-bottom w-100">
            <a class="navbar-brand text-dark font-weight-lighter " href="/"> ISHAN PRASAD </a>
            
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapseNav" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mx-auto  justify-content-end navbar-collapse " id="collapseNav">
                <!-- <a href="/login" :class="getState('login') + ' mx-1 '"> Log In </a> -->
                <a href="/#projects" :class=" ' mx-2 text-dark ' "> Projects </a>
                <a href="https://laazzzyyyydev.netlify.app" :class="getState('blogs') + '  mx-2 '"> Laazzzyyyy.dev  </a>
                
                <!-- <a v-if="loggedIn" @click="logout()" :class="getState('logout') + '  mx-1 '"> Log Out  </a> -->
                <a v-if="loggedIn" href="/edit" :class="getState('edit') + '  mx-2 '"> Edit  </a>
                
                <!-- <button v-if="loggedIn" class="btn text-theme sticky-bottom " type="button" id="triggerId" data-toggle="dropdown"> <i class="fa fa-lg fa-plus-circle" aria-hidden="true"></i> </button>                     -->

                <div class="btn-group">
                    <button v-if="loggedIn" class="btn text-theme sticky-bottom " type="button" id="triggerId" data-toggle="dropdown"> <i class="fa fa-lg fa-plus-circle" aria-hidden="true"></i> </button>                                     
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/new">New Blog</a>
                        <a class="dropdown-item " href="/edit/resume"> Edit Resume </a>                    
                    </div>
                </div>
                <a v-if="loggedIn" @click="logout()" :class=" ' text-light btn btn-dark  mx-2 '"> Log Out <i class="fa fa-sign-out-alt" aria-hidden="true"></i>  </a>
            </div>
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
            mode: localStorage.getItem('mode')
        }  
    },

    methods: {

        getState(active) {

            var url = this.$route.path.split("/")
            // console.log(url)
            
            if(url[2] == null || url[2] == "")
            {
                if(url[1] == active) return " text-underline "
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

        },

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
