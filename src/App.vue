<template>

<div class="container">
  <main>
  
    
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @open="handleOpen" @close="handleClose"
    router>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/RandomGenerator">吃啥好呢</el-menu-item>
  <el-menu-item index="/">吃在南哪</el-menu-item>
  </el-menu>

  <router-view></router-view>

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
import DayTimeVue from './components/DayTime.vue';
import GravityVue from './components/Gravity.vue';
import SineWavesVue from './components/SineWaves.vue';


// import KeyBoardVue from './components/KeyBoard.vue';



</script>
<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Tahoma,Helvetica,Arial,'宋体',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding :0;
  margin-bottom: 50px;
}
.el-menu-item {
  width : 33%
}
</style>
