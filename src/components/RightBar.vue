<template>
    <div id="rBar" class="p-0 sticky-top mt-5 pt-5">
        <div class="mt-4 p-2">
            <h5> <strong> Search </strong> </h5>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control w-100" type="text" placeholder="Search">            
            </form>
        </div>
        <div class="my-2 p-2">
            <h5> <strong> Recent Blogs </strong> </h5>

        </div>
        <div class="my-2 p-2">
            <h5> <strong> Get In Touch </strong> </h5>
            <ul class="list-group  list-group-horizontal">
                <li class="list-group-item border-0 social"> <a href="https://instagram.com/ishanpsahota" class=""> <i class="fab fa-instagram fa-lg" aria-hidden="true"></i> </a> </li>
                <li class="list-group-item social border-0"> <a href="mailto:ishanprasad.sahota@gmail.com" class=""> <i class="fa fa-envelope fa-lg" aria-hidden="true"></i> </a> </li>
                <li class="list-group-item social border-0" > <a href="https://www.linkedin.com/in/ishan-prasad-b35a91181/" class=""> <i class="fab fa-linkedin fa-lg" aria-hidden="true"></i> </a> </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {

    name: 'RightBar',
    data() {
        return {
            quickLinks: ''
        }
    }

}
</script>

<style scoped>

    .social > a
    {
        color: #000
    }
    .social > a:hover
    {
        color: #17a2b8;
        transition: 0.75s;
    }
</style>