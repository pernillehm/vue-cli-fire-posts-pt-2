<template>
  <div id="app" :style="image" class="image">
    <div id="nav">
      <router-link to="/">Cat cat cat</router-link> |
      <router-link to="/create">Create a cat post</router-link> |
      <router-link to="/about">Life of Laurids</router-link>
    </div>
    <router-view />
  </div>
</template>


<script> 
 export default {
        data() {
            return {
                image: {backgroundImage: "url(https://image.freepik.com/free-vector/cute-cat-pastel-heart-seamless-pattern_42349-819.jpg)"}
            };
        }
    };
</script>


<style>
#app {
  font-family: "Luckiest Guy", cursive;
  text-align: center;
  color: #2c3e50;
}

@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Luckiest+Guy&display=swap");

#nav {
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  font-size: 1.5em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.image {
  height: 90vw;
  background-repeat: repeat center center fixed;
}
</style>
