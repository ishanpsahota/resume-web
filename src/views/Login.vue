<template>
    <div id="login" class="row w-100 m-auto fullsize p-0 animate__animated animate__fadeIn">
        <vue-headful :title=title />       
        <div class="col-12 d-flex hrow m-auto text-dark">
            <div class="col-lg-4 col-12 m-auto bg-white p-4 rounded shadow-lg">
                <h1 class="display-4 text-center"> Login </h1>
                <form @submit.prevent="login()">
                    <div class="form-group">
                      <label for="">E-Mail</label>
                      <input type="email" class="form-control" name="email" id="email" v-model="email" required aria-describedby="emailHelpId" placeholder="">                      
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" name="password" v-model="password" required id="password" placeholder="">
                    </div>
                    <button type="submit" v-if="loginBtn" class="btn btn-warning btn-lg btn-block">Login </button>
                    <button type="button" disabled v-if="loggingIn" class="btn btn-warning btn-lg btn-block"> <div class="spinner-border text-light"></div> </button>
                    <button type="submit" v-if="loggedIn" disabled class="btn btn-primary btn-lg btn-block"> Successful </button>
                    <button type="submit" v-if="loginErr" class="btn btn-danger btn-lg btn-block">Error! </button>
                </form>
                <div v-if="loginErr" class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>Error!</strong> Either user not registered or invalid credentials!
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            loginBtn: true,
            loggingIn: false,
            loggedIn: false,
            loginErr: false,
            error: null,
            title:'Login'
        }
    },
    methods: {

        login() {

            this.loginBtn = false
            this.loggingIn = true;

            
            const email = this.email
            const password = this.password
            

            this.$store.dispatch('login', { email, password })
            .then(() => {
                this.loggingIn = false; 
                this.loggedIn = true
                this.email = ''
                this.password = ''
                setTimeout(() => {
                    this.$router.push('/edit')    
                }, 2500);
            })
            .catch(err => {
                this.loggingIn = false;    
                this.loginErr = true
                this.error = err;

                setTimeout(() => {
                    this.loginErr = false
                    this.error = null
                    this.loginBtn = true
                }, 2500);

            })
        }
    }

}
</script>

<style>

</style>