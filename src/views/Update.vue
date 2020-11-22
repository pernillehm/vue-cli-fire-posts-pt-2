<template>
  <div class="update">
    <h1>Update</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Images
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" v-on:click="updatePost">Update post</button>
    </form>
  </div>
</template>

<script>
import {postRef} from "../firebase-db"; 
export default {
    name: "Update", 
    props: {
        post: Object
    },
    methods: {
        triggerChooseImg() {
            this.$refs.fileInput.click(); 
        }, 
        previewImage() {
            const imageFile = this.$refs.fileInput.files[0];
            const fileReader = new FileReader(); 
            fileReader.onload = event => {
                this.post.image = event.target.result;          
            }; 
            fileReader.readAsDataURL(imageFile); 
        }, 
        updatePost() {
            console.log(this.post); 

            postRef.doc(this.post.id).set({
                description: this.post.description,
                image: this.post.image
            }); 
            this.$router.push("/"); 
        }
    }
}



</script>