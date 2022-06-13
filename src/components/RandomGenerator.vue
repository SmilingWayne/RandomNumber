<template>
<div id = "randomNumber" class = "demo3">
        <div id="v-model-multiple-checkboxes">
            <div class = "show">
            <h1>🛒🛒</h1>
            <div v-if="checkedNames.length > 0"  style = "height: 75px">
                <ul>
                    <template v-for="item in checkedNames"  v-model="checkedNames">
                      <el-button tyle = "info"  @click = "deleteMessage(item)"> {{ item }} </el-button>
                    </template>
                  </ul>
            </div>
            <div v-else style = "height: 75px">
            <h3>啥也没有😭</h3>
            </div>
            </div>
            <div>
                <el-form v-on:submit.prevent="pushBack">
                    <label for="new-todo">增加选项：</label>
                    <el-input style = "width: auto" v-model="checkedNamesInput" id="new-todo" placeholder="E.g. 方！糕！" />
                    <br />
                    <el-button style = "margin-left:20px; margin-top:20px" @click="pushBack">加入！</el-button>
                </el-form>
                <br />
                <div>
                    <el-button type = "primary" @click="clearAll">清空</el-button>
                    <el-button type = "success" @click="randomChoice">选！</el-button> 
                </div>

            </div>
            
            <br />
            <div class = "mainDiv">
                <span id = "guide">可以去这些地方！</span>
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for="(city, i) in locations" :key="city">
                        <div v-if="i % 4 == 0 && i != 0">
                            <br/>
                        </div>
                        <el-checkbox :label="city" :id = "forID(city)" border style = "margin-top:10px">
                            {{ city }}
                        </el-checkbox>
                    </template>
                </el-checkbox-group>
            </div>
            <br />
            <br />
            <div class = "subDiv">
            <span id = "guide">四十！</span>
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for="(city, i) in forty" :key="city">
                        <div v-if="i % 4 == 0 && i != 0">
                            <br/>
                        </div>
                        <el-checkbox :label="city" :id = "forID(city)" border style = "margin-top:10px">
                            {{ city }}
                        </el-checkbox>
                    </template>
                </el-checkbox-group>
            </div>
            <!-- <div class = "subDiv">
                 <template v-for="(location, index) in sliceList(forty, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>
            </div> -->
            <br />
            <br />
            <div class = "subDiv">
            <span id = "guide">五十！</span>
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for="(city, i) in fifty" :key="city">
                        <div v-if="i % 4 == 0 && i != 0">
                            <br/>
                        </div>
                        <el-checkbox :label="city" :id = "forID(city)" border style = "margin-top:10px">
                            {{ city }}
                        </el-checkbox>
                    </template>
                </el-checkbox-group>
            </div>
            <!-- <div class = "subDiv">
               <template v-for="(location, index) in sliceList(fifty, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>

            </div> -->
            <br />
            <br />
            <div class = "subDiv">
            <span id = "guide">九十！</span>
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for="(city, i) in ninty" :key="city">
                        <div v-if="i % 4 == 0 && i != 0">
                            <br/>
                        </div>
                        <el-checkbox :label="city" :id = "forID(city)" border style = "margin-top:10px">
                            {{ city }}
                        </el-checkbox>
                    </template>
                </el-checkbox-group>
            </div>
            <!-- <div class = "subDiv">
               <template v-for="(location, index) in sliceList(ninty, 5)" :key="index">
                    <template v-for="(item,i) in location" :key="i">
                        <input type="checkbox" :id="forID(item)" :value="forID(item)" v-model="checkedNames" />
                        <label>{{ item }}</label>        
                    </template>
                    <br>
                    <br>
                </template>

            </div> -->
            <br />
            <br />
            <div class = "subDiv">
            <span id = "guide">去外面吃！</span>
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for="(city, i) in outside" :key="city">
                        <div v-if="i % 4 == 0 && i != 0">
                            <br/>
                        </div>
                        <el-checkbox :label="city" :id = "forID(city)" border style = "margin-top:10px">
                            {{ city }}
                        </el-checkbox>
                    </template>
                </el-checkbox-group>
            </div>
            
          </div>
        </div>
    
</template>


<script src = "../js/RandomGenerator.js">
</script>

<style lang="scss" scoped>
.subDiv{
    border : 2px solid #c0c0c0;
    #guide{
        font-size:10px;
        color : #c0c0c0;
        padding-left : 5px;
        padding-top:5px;
    }
}

.mainDiv{
border : 1px solid #c0c0c0;
    #guide{
        font-size:10px;
        color : #c0c0c0;
        margin-left : 5px;
        margin-top:5px;
    }
}

</style>