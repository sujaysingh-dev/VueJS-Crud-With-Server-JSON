<template>
    <div class="header">
        <div class="logo">
            <router-link to="/">R.<span>HIGHWAY</span></router-link>
        </div>
        <div class="right">
            <div class="navlink">
                <router-link to="/">Home</router-link>
                <router-link to="/add-restaurant">Add Resturant</router-link>
                <a href="#" v-on:click="logout" class="logout">Logout</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HeaderTop',
        data(){
            return{
                name: ''
            }
        },  
        methods:{
            logout(){
                localStorage.clear()
                this.$router.push({name: 'Login'})
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');

            if (!user) {
                this.$router.push({ name: 'Login' });
                return;
            }

        }
    }
</script>

<style>
    .header{
        height: 10vh;
        width: 100%;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: space-between;
        background: rgb(47, 47, 47);
        z-index: 999;
    }
    a{
        color: gray;
        text-decoration: none;
    }
    .logo{
        margin-left: 3rem;
        font-size: 2rem;
        font-weight: bold;
    }
    span{
        font-size: .8rem;
        color: white;
    }
    .right{
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .navlink{
        margin-right: .5rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .8rem;
        transition: .5s;
    }
    .navlink a:hover{
        color: rgb(213, 213, 213);
    }
    .logout{
        border: 1px solid white;
        margin-right: 3rem;
        padding: .2rem 1rem;
        border-radius: 50px;
    }
</style>