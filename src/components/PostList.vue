<template>
  <div>
    <h2>Posts</h2>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img v-bind:src="post.image" />
        <h3>{{ post.description }}</h3>
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button class="update-button">Update</button>
        </router-link>
        <button
          class="delete-button"
          type="button"
          v-on:click="deletePost(post.id)"
        >
          Delete
        </button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";

export default {
  data() {
    return {
      posts: [],
    };
  },
methods: {
deletePost(id){
  console.log(id);
  postRef.doc(id).delete(); 
}
}, 
  firestore: {
    posts: postRef,
  }
};
</script>

<style>
.update-button {
  margin-right: 3px;
  background-color: #f8d678;
}

.delete-button {
  margin-left: 3px;
  background-color: #73deff;
}

button {
  width: 180px;
  height: 40px;
  margin-top: 1%;
  border: none;
  color: grey;
  font-weight: bold;
  font-size: 1.3em;
  font-family: "Luckiest Guy", cursive;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.grid-container > article > img {
  width: 60%;
}
</style>