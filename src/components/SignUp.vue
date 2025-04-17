<template>
    <div class="container">
        <img src="../assets/res-logo.png" class="logo">
        <h2>REGISTER</h2>
        <div class="form">
            <input type="text" v-model="name" placeholder="Enter User Name">
            <input type="text" v-model="email" placeholder="Enter User Email">
            <input type="password" v-model="password" placeholder="Enter Password">
            <input type="password" v-model="cpassword" placeholder="Enter Confirm Password">
            <button v-on:click="signup">Sign up</button>
            <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            cpassword: ''
        }
    },
    methods: {
        async signup() {
            if (this.password === this.cpassword) {
                try {
                    const result = await axios.post('http://localhost:3000/user', {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    });

                    if (result.status === 201) {
                        alert(`Registered user ${this.name}`);
                        
                        try {
                            localStorage.setItem('user-info', JSON.stringify(result.data));
                            this.$router.push({name:'Home'})
                        } catch (e) {
                            console.warn('⚠️ localStorage is not accessible:', e);
                        }

                    } else {
                        alert('Registration not successful.');
                    }
                } catch (err) {
                    console.error('🚨 Signup error:', err);
                    alert('Something went wrong during registration.');
                }
            } else {
                alert('❗ Passwords do not match!');
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>


<style>
    .container{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .logo{
        width: 8rem;
        height: 8rem;
        margin-top: 5rem;
    }
    h2{
        color: blue;
    }
    .form{
        width: 22rem;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    input, button{
        height: 2rem;
        padding: 0rem .5rem;
        font-size: .9rem;
        border: 1px solid blue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    p{
        margin-top: -.2rem;
        font-size: .8rem;
    }
    p a{
        color: blue;
        text-decoration: none;
    }
    p a:hover{
        color: rgba(0, 0, 255, 0.805);
    }
    .container button{
        color: white;
        transition: .5s;
        background-color: rgba(0, 0, 255, 0.832);
    }
    .container button:hover{
        cursor: pointer;
        border: 1px solid blue;
        background-color: blue;
    }
</style>