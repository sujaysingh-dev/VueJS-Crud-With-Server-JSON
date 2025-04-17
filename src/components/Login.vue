<template>
  <div class="container">
    <img src="../assets/res-logo.png" class="logo" />
    <h2>LOGIN</h2>
    <div class="form">
      <input type="text" v-model="email" placeholder="Enter User Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
      <p>
        I don't have an account?
        <router-link to="/signup">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
        if (result.status === 200 && result.data.length > 0) {
          alert(`Logged in user ${result.data[0].name}`);
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home" });
        } else {
          alert("Invalid credentials");
        }
      } catch (e) {
        console.error("Login error", e);
        alert("An error occurred during login.");
      }
    },
  },
  
  mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Home'})
        }
    }
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.logo {
  width: 8rem;
  height: 8rem;
  margin-top: 5rem;
}
h2 {
  color: blue;
}
.form {
  width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
input,
button {
  height: 2rem;
  padding: 0rem 0.5rem;
  font-size: 0.9rem;
  border: 1px solid blue;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
p {
  margin-top: -0.2rem;
  font-size: 0.8rem;
}
p a {
  color: blue;
  text-decoration: none;
}
p a:hover {
  color: rgba(0, 0, 255, 0.805);
}
.container button {
  color: white;
  transition: 0.5s;
  background-color: rgba(0, 0, 255, 0.832);
}
.container button:hover {
  cursor: pointer;
  border: 1px solid blue;
  background-color: blue;
}
</style>
