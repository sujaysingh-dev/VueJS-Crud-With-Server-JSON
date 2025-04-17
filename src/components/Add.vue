<template>
    <div>
        <Header/>
        <div class="add">
            <h2>Add New Restaurant Record</h2>
            <div class="input">
                <label>Restaurant Name</label>
                <input type="text" v-model="restaurant.name">
                <label>Location</label>
                <input type="text" v-model="restaurant.location">
                <label>Contact:</label>
                <input type="number" v-model="restaurant.contact">
                <label>About:</label>
                <textarea name="" v-model="restaurant.about"></textarea>
                <div class="btn" >
                    <button>Reset</button>
                    <button v-on:click="addRestaurant">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
import Header from './Header.vue';
    export default {
        name: 'AddRest',

        components: {
            Header
        },  

        data(){
            return{
                restaurant:{
                    "name": '',
                    "location": '',
                    "contact": '',
                    "about": ''
                }
            }
        },

        methods: {
            async addRestaurant() {
                if(!this.restaurant.name || !this.restaurant.location || !this.restaurant.contact || !this.restaurant.about){
                    alert('Every feilds are required')
                }
                else{
                    const result = await axios.post('http://localhost:3000/restaurant', {
                        name: this.restaurant.name,
                        location: this.restaurant.location,
                        contact: this.restaurant.contact,
                        about: this.restaurant.about
                    });
                    alert(`Restaurant added successfully: ${this.restaurant.name}`)
                    if(result.status == 201){
                        this.$router.push({name: 'Home'})
                    }               
                }
            }
        },
 

        mounted() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({ name: 'Login' });
            }
        }
    }
</script>

<style>
    .add{
        padding-top: 10vh;
        padding-left: 3rem;
        padding-right: 3rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
    }
    .add h2{
        color: black;
        margin-top: 2rem;
        border-bottom: 1px solid rgb(197, 197, 197);
    }
    .add .input{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        width: 100%;
        border-radius: 5px;
    }
    .add .input input{
        font-size: .8rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .add textarea{
        height: 8rem;
        font-size: .8rem;
        padding: .5rem;
        resize: vertical;
        border: 1px solid blue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .add .btn{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    .add .btn button{
        width: 100%;
        cursor: pointer;
    }
    .add .btn button:first-child{
        border: 1px solid red;
    }
</style>