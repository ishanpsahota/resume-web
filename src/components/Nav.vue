<template>
    <div id="nav" class="row m-0 p-0 w-100 bg-white">
        <nav class="navbar m-1 navbar-expand-sm w-100 sticky-top navbar-dark rounded shadow bg-dark">
            <a :class="' navbar-brand ' + getState('') " href="/" data-toggle="tooltip" data-placement="bottom" title="Home"> <i class="fa fa-home"  aria-hidden="true"></i> </a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a :class="'nav-link' + getState('blogs')" href="/blogs">Blogs </a>
                    </li>
                    <!-- <li class="nav-item">
                        <a :class="'nav-link' + getState('myself')" href="/myself">Myself </a>
                    </li> -->
                    <li v-if="loggedIn" class="nav-item">
                        <a :class="'nav-link' + getState('/logout')" @click="logout()" > Logout <i class="fas fa-sign-out-alt    "></i> </a>
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
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
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
            
            if(url[2] == null || url[2] == "")
            {
                if(url[1] == active) return " text-warning "
                else return " "
            }
 
        },

        logout() {

          this.$store.dispatch('logout');
          this.$router.push('/login');

        }
    },

    beforeMount() {

        this.loggedIn = !!this.$store.getters.isLoggedIn

    }
}
</script>

<style>

</style>