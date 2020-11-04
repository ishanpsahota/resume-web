<template>
    <div class="row w-100 p-1">
        <div class="col-md-6 col-12 text-left m-auto  p-4 text-md-right ">					
            <h1> <strong> {{skill.title}} </strong> </h1>					
            <h4> <i class="fa fa-star" aria-hidden="true"></i> {{skill.level}}/5 </h4>
        </div>
        <div class="col-md-6 col-12 m-auto p-4 text-left">
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
                    :style="{'width': getSkill(skill.level) }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="5">{{skill.level}}
                </div>						
            </div>					
        </div>
    </div>
</template>

<script>
export default {

    name: 'Skills',

    props: {

        skill: Object
    },

    methods: {

        getSkill(level)
		{
			var l = (level / 5) * 100 
			return l.toString() + '%';
		}
    }

}
</script>

<style>

</style>