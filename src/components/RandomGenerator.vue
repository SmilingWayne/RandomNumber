<template>
<div id = "randomNumber" class = "demo3">
        <div id="v-model-multiple-checkboxes">
            <div class = "show">
            <h1>🛒🛒</h1>
            <div v-if="checkedNames.length > 0">
                <ul>
                    <template v-for="item in checkedNames"  v-model="checkedNames">
                      <el-button tyle = "info"  @click = "deleteMessage(item)"> {{ item }} </el-button>
                    </template>
                  </ul>
            </div>
            <div v-else>
            <h3>这里空空如也</h3>
            </div>
            </div>
            <div>
                <el-form v-on:submit.prevent="pushBack">
                    <label for="new-todo">增加选项：</label>
                    <el-input style = "width: auto" v-model="checkedNamesInput" id="new-todo" placeholder="E.g. 方！糕！" />
                    <span> </span>
                    <el-button style = "margin-left:20px" @click="pushBack">加入！</el-button>
                </el-form>
                <br />
                <div>
                    <el-button type = "primary" @click="clearAll">清空</el-button>
                    <el-button type = "success" @click="randomChoice">选！</el-button> 
                </div>

            </div>
            <br />
            <br />
            <div class = "mainDiv">
                <template v-for="(location, index) in sliceList(locations, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>     
                             
                    </template>
                    <br>
                    <br>
                </template>
            </div>
            <br />
            <br />

            <div class = "subDiv">
                 <template v-for="(location, index) in sliceList(forty, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>
            </div>
            <br />
            <br />
            <div class = "subDiv">
               <template v-for="(location, index) in sliceList(fifty, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>

            </div>
            <br />
            <br />
            <div class = "subDiv">
               <template v-for="(location, index) in sliceList(ninty, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>

            </div>
            <br />
            <br />
            <div class = "subDiv">
                <template v-for="(location, index) in sliceList(outside, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>
            </div>
            
          </div>
        </div>
    
</template>


<script src = "../js/RandomGenerator.js">
</script>
