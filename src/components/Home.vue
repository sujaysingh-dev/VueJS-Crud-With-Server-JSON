<template>
  <div>
    <Header />
    <div class="home">
      <div class="text">
        <h1>HELLO USER, {{ name }}.</h1>
        <h2>WELCOME TO RESTAURANT HIGHWAY</h2>
        <h3>Restaurant Highway – Patna’s Destination for Flavor and Fun.</h3>
        <p>
          Located in the heart of Patna, Restaurant Highway is your ultimate
          stop for delicious dining and good vibes. Offering a wide variety of
          both vegetarian and non-vegetarian dishes, our menu is crafted to
          satisfy every palate — from rich North Indian curries to sizzling
          tandoori specials. Whether you're dining with family, hanging out with
          friends, or just looking for a relaxed evening with great food and
          music, Restaurant Highway has you covered. Our vibrant ambiance,
          paired with live or curated music, creates the perfect setting for a
          memorable meal.
        </p>
        <button>Explore more</button>
        <div class="scroll">
          <div>SCROLL DOWN</div>
          <img src="../assets/scroll.png" alt="" />
        </div>
      </div>
      <div class="img">
        <img src="/hero-image.png" alt="Hero image" />
      </div>
    </div>

    <div class="restaurant">
      <h1>Restaurant List</h1>

      <div class="card">
        <div v-for="item in restaurant" :key="item.id" class="inner-card">
          <div class="left">
            <div class="name">Name: {{ item.name }}</div>
            <div class="location">Location: {{ item.location }}</div>
            <div class="contact">Contact: {{ item.contact }}</div>
          </div>
          <div class="right">
            <div class="about">
              <div class="span_about">About:</div>
              {{ item.about }}
            </div>
          </div>
          <div class="end">
            <router-link :to="'/update-restaurant/' + item.id" class="top">
              <img src="../assets/edit.png" alt="" />
            </router-link>
            <div class="bottom" v-on:click="deleteRestaurant(item.id)">
              <img src="../assets/delete.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "HomePage",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },

  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if(result.status == 200){
        this.loadData();
      }
    },

    async loadData() {
      let user = localStorage.getItem("user-info");

      if (!user) {
        this.$router.push({ name: "Login" });
      } else {
        this.name = JSON.parse(user).name;
      }

      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurant = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>










<style>
.home {
  padding-top: 10vh;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text {
  margin-left: 3rem;
}
h1 {
  margin-bottom: 2rem;
}
p {
  text-align: justify;
}
.text button {
  margin-top: 0.5rem;
  padding: 0.1rem 2rem;
  border: 1px solid blue;
  background-color: transparent;
  border-radius: 50px;
  transition: 0.5s;
}
.text button:hover {
  background: blue;
  color: white;
  cursor: pointer;
}
.scroll {
  position: absolute;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 1rem 2.8rem;
}
.scroll img {
  height: 4rem;
  width: 4rem;
  cursor: pointer;
}

.restaurant {
  padding: 0rem 3rem;
  margin-bottom: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.121);
}
.restaurant h1 {
  padding: 1rem 0rem;
}
.restaurant .card {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.restaurant .inner-card {
  background: rgba(128, 128, 128, 0.336);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0rem;
}
.restaurant .left {
  width: 30%;
}
.restaurant .right {
  padding-left: 2rem;
  width: 70%;
  display: flex;
  align-items: start;
}
.inner-card .name {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
}
.inner-card .location,
.contact {
  text-transform: capitalize;
}
.right .about {
  display: flex;
  font-size: 0.9rem;
  align-items: center;
}
.right .about .span_about {
  font-weight: bold;
  font-size: 1rem;
}
.end {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.end .top,
.bottom {
  width: 2rem;
  height: 2rem;
  background: #ffffff;
  border-radius: 50px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.end .top img {
  width: 1.8rem;
  height: 1.8rem;
}
.end .bottom img {
  width: 1rem;
  height: 1.3rem;
}
</style>
