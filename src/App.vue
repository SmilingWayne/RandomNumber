<template>
<div class="container">
<main>
<RandomGenerator />
<Header/>

<!-- <RandomGenerator /> -->

</main>
</div>
</template>


<script setup>
// TODO: 这里push 的时候要选择 git push -u origin2 "main" 才可以！
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
// import Header from "./components/Header.vue"
import RandomGenerator from './components/RandomGenerator.vue';
// import RandomGenerator from './components/RandomGenerator.vue';

</script>

<style>
#app {
  font-family: Tahoma,Helvetica,Arial,'宋体',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
