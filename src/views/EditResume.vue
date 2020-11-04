<template>
    <div class="row w-100 m-0 p-3" id="edit_resume">
        <h1 class="display-4"> Edit Resume </h1> <br>
        <div v-if="loading.resume" class="col-12 ">
            <div class="spinner-border text-light "> </div>
        </div>
        <div v-if="load.resume" class="col-12 ">
            <button class="btn bg-theme float-right border-outline-light" type="button" @click="getResume()"> <i class="fas fa-sync-alt    "></i> Refresh </button>
        </div>
        <div v-if="loaded.resume && resume" class="row w-100 justify-content-center m-0">
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Owner Details </h1>
                </div>
                <div class="card-body">
                    <p> Name: {{resume.name}} </p>
                    <p> E-Mail: {{resume.email}} </p>
                    <p> IG: {{resume.instagram}} </p>
                    <p> LinkedIn: {{resume.linkedin}} </p>
                    <p> GitHub: {{resume.github}} </p>
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <img :src="resume.profile" class="img-fluid ">
                <div class="card-header text-center">
                    <h1> Profile Picture </h1>
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card p-0 bg-theme border-light m-1 col-lg-3 col-md-4 col-sm-5 col-6">
                <img :src="resume.background" class="img-fluid p-2 m-auto ">
                <div class="card-header text-center">
                    <h1> Profile Picture </h1>
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Work Experience </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center  ">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(work, w_i) in resume.workexp" :key="w_i"> {{work.title}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Projects </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(project, p_i) in resume.projects" :key="p_i"> {{project.title}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Education </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(edu, e_i) in resume.education" :key="e_i"> {{edu.title}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Skills </h1>
                </div>
                <div class="card-body m-auto">                 
                    <ul class="list-group list-group-flush m-auto rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(skill, s_i) in resume.skills" :key="s_i"> {{skill.title}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Interests </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(int, i_i) in resume.interests" :key="i_i"> {{int}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Certificates </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(cert, c_i) in resume.certificates" :key="c_i"> {{cert.title}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Achievements </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(ach, a_i) in resume.achievements" :key="a_i"> {{ach.title}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div v-if="resume.volunteer" class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Volunteer </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(vol, v_i) in resume.volunteer" :key="v_i"> {{vol}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div v-if="resume.references" class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> References </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(ref, r_i) in resume.references" :key="r_i"> {{ref}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
            <div v-if="resume.causes" class="card bg-theme border-light p-0 m-1 col-lg-2 col-md-3 col-sm-6 col-12">
                <div class="card-header text-center">
                    <h1> Causes </h1>
                </div>
                <div class="card-body">                 
                    <ul class="list-group list-group-flush rounded text-center">
                        <li class="list-group-item rounded bg-dark border m-1" v-for="(cause, c_i) in resume.causes" :key="c_i"> {{cause}} </li>                        
                    </ul>                 
                </div>
                <div class="card-footer text-center">
                    <button class="btn bg-theme border-light"> <i class="fas fa-edit    "></i> </button>
                </div>
            </div>
        </div>
        <div v-if="loadErr.resume && error.resume" class="alert alert-primary alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Error!</strong> {{error.resume}}
        </div>
    </div>
</template>

<script>

import api from '../api/index'

export default {

    name: 'EditResume',
    data() {
        return {
            resume: null,
            load: {
                resume: false
            },
            loading: {
                resume: true
            },
            loaded: {
                resume: false
            },
            loadErr: {
                resume: false
            },
            error: {
                resume: null
            }
        }
    },

    methods: {

        getResume()
        {
            this.loading.resume = true

            api.getResume()
            .then(res => {

                if(res.status == 200)
                {
                    this.loading.resume = false
                    this.loaded.resume = true
                    this.resume = res.data.resume
                }

            }).catch(err => {

                this.loading.resume = false
                this.loadErr.resume = true
                this.error.resume = err;
                this.load.resume = true

            })
        }

    },

    mounted()
    {
        this.getResume();
    }

}
</script>

<style>

</style>