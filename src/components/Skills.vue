<template>
     <div class="row m-0 p-md-4 fullsize" id="skills">
        <div class="col-12 m-auto text-center">
            <h1 class="display-4 d-none d-md-block"> SKILLS </h1>
            <h1 class="d-md-none"> SKILLS </h1>
        </div>
        <div class="row w-100 mb-auto mx-auto p-0">                        
            <ul class="list-group mb-auto mx-auto col-lg-6 p-1 col-12 list-group-flush ">
                <li class="list-group-item h4" v-for="(skill, s_i) in skills" :key="s_i">
                    {{skill.title}}
                    <span class="float-right skill-star">
                        <span class="mx-1 " v-for="i in getSkill(skill.level)" :key="i">
                            <i class="fa fa-star " aria-hidden="true"> </i>
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Skills',

    props: {

        skills: Array
    },

    methods: {

        getSkill(level)
        {
            return Number(level)
        }
    }

}
</script>

<style>

</style>