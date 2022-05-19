<template>
<div id = "randomNumber" class = "demo3">
        <div id="v-model-multiple-checkboxes">
            <div class = "show">
            <h1>购物车</h1>
            <div v-if="checkedNames.length > 0">
                <ul>
                    <template v-for="item in checkedNames"  v-model="checkedNames">
                      <button  @click = "deleteMessage(item)"> {{ item }} </button>
                    </template>
                  </ul>
            </div>
            <div v-else>
            <h3>这里空空如也</h3>
            </div>
            </div>
            <div>
                <!-- <span>Checked names: {{ checkedNames }}</span> -->
                <form v-on:submit.prevent="pushBack">
                    <label for="new-todo">增加选项：</label>
                    <input v-model="checkedNamesInput" id="new-todo" placeholder="E.g. 方！糕！" />
                    <span> </span>
                    <!-- <br /> -->
                    <button>Add</button>
                </form>

                <div>
                    <button @click="clearAll">清空</button>
                    <button @click="randomChoice">选！</button> 
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
