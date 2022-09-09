<template>
This is the main Page

<div id = "box1" >
<el-row>
    
    <el-col :span="8" ><router-link to="/keyboard">Go to KeyBoard</router-link></el-col>
    <el-col :span="8" ><router-link to="/Gravity">Go to Gravity</router-link></el-col>
    <el-col :span="8" ><router-link to="/CollisionParticles">Go to CollisionParticles</router-link></el-col>
</el-row>
<br/>
<el-row>
    
    <el-col :span="8" ><router-link to="/MovingBalls">Go to Moving Balls</router-link></el-col>
    <el-col :span="8" ><router-link to="/Gravity">Go to Gravity</router-link></el-col>
    <el-col :span="8" ><router-link to="/Minesweeper">Go to Minesweeper</router-link></el-col>
</el-row>
</div>
      
</template>


<style scoped>
#box1{
    width : 200px;
    margin:20px auto; 
    /* position:c */
}
</style>