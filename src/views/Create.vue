<template>
  <div class="create">
    <h2>Post a picture of a cat</h2>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a cat description "
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <br />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        CHOOSE A CAT IMAGE
      </button>
      <br />
      <button class="create-post" type="button" v-on:click="createPost">
        CREATE A CAT POST
      </button>
      <div><img :src="post.image" class="image-preview" /></div>
    </form>
  </div>
</template>


<script>
import { postRef } from '../firebase-db'
export default {
    name: 'Update', 
    data () {
      return {
      post: {
        description: '', 
        image: null
      }
    }
},

methods: {
  triggerChooseImg () {
    this.$refs.fileInput.click()
  },
  previewImage () {
    const imageFile = this.$refs.fileInput.files[0]
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      this.post.image = event.target.result 
    }
    fileReader.readAsDataURL(imageFile)
  }, 
  createPost () {
    postRef.add(this.post)
    this.$router.push('/')
  }
}
}




</script>

<style>
h1 {
  color: hotpink;
}

h1 > span {
  color: purple;
}

input[type="file" i] {
  display: none;
}

input {
  width: 170px;
  height: 40px;
  text-align: center;
  font-family: "Luckiest Guy", cursive;
}

.choose-image {
  background-color: #dca1ff;
}

.create-post {
  background-color: #b1fca4;
}

button {
  width: 180px;
  height: 40px;
  margin-top: 1%;
  border: none;
  color: grey;
  font-weight: bold;
  font-size: 1.1em;

  font-family: "Luckiest Guy", cursive;
}
</style>