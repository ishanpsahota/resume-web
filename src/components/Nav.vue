<template>
    <div id="nav" class="row m-0 w-100 border-0 p-0">
        <nav class="navbar navbar-expand-sm sticky-top bg-white pl-md-3 pr-md-0 py-1 w-100">
            <a class="navbar-brand " href="/" data-toggle="tooltip" data-placement="bottom" title="Home">
                <img src="../assets/logos/logo_transparent.png" class="logo" />
            </a>
            <button class="navbar-toggler  d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div class="  collapse navbar-collapse p-2" id="collapsibleNavId">
                <ul class="navbar-nav bg-theme border-theme-right ml-auto">
                    <li class="nav-item px-4 ">
                        <a class="nav-link text-light" href="/blogs">Blogs </a>
                    </li>
                    <!-- <li class="nav-item px-4 ">
                        <a class="nav-link text-light" href="/whoami">About Me  </a>
                    </li> -->
                    <!-- <li class="nav-item px-4 ">
                        <a class="nav-link text-light" href="/myself">Myself </a>
                    </li> -->                    
                     <li v-if="loggedIn" class="nav-item px-4 ">
                        <a class="nav-link text-light" href="/edit"> Edit  </a>
                    </li>
                    <li v-if="loggedIn" class="nav-item px-4 ">
                        <a class="nav-link text-light" href="/new" > New Blog  </a>
                    </li>
                    <li v-if="loggedIn" class="nav-item px-4 ">
                        <a class="nav-link text-light" @click="logout()" > Logout  </a>
                    </li>

                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li> -->
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control text-warning bg-transparent border-warning mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
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
            loggedIn: ''
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