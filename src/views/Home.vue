<template>
  <div>
    <h1>THiS <span>iS</span> A <span>PAGE</span> ABOUT <span>CATS</span></h1>

    <img alt="Vue logo" src="../assets/longwalks.jpeg" />
    <post-list></post-list>
  </div>
</template>
<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue';

export default {
  name: "Home",
  components: { PostList }
};


</script>
