<template>
    <div id="login" class="row w-100 m-0 p-0 animate__animated animate__fadeIn">
        <div class="col-12 d-flex hrow">
            <div class="col-6 m-auto bg-white p-4 rounded shadow-lg">
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
                    <button type="submit" class="btn btn-warning btn-lg btn-block">Login </button>
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
            error: null
        }
    },
    methods: {

        login() {

            this.loggingIn = true;

            let creds = {
                email: this.email,
                password: this.password
            }

            this.$store.dispatch('login', creds)
            .then(() => {
                this.loggingIn = false; 
                this.loggedIn = true
                setTimeout(() => {
                    this.$router.push('/edit')    
                }, 2500);
            })
            .catch(err => {
                this.loggingIn = false;    
                this.loginErr = true
                this.error = err;
            })
        }
    }

}
</script>

<style>

</style>