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
                    <label for="new-todo">🤠增加选项：</label>
                    <el-input style = "width: auto" v-model="checkedNamesInput" id="new-todo" placeholder="E.g. 方！糕！" clearable/>
                    <br />
                    <el-button style = "margin-left:20px; margin-top:20px" @click="pushBack">加入！</el-button>
                </el-form>
                <br />
                <div>
                    <el-button type = "primary" @click="clearAll">清空</el-button>
                    <el-button type = "success" @click="randomChoice">选！</el-button> 
                    <el-button type = "primary" @click="randomTwo">精彩二选一！</el-button> 
                </div>

            </div>
    <br />
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="随个地点" name="1">
       <div class = "subDiv">
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(locations, 2)" :key="i">
                            <el-row class="row-bg" justify="space-evenly">
                                    <el-col :span = "10">
                                        <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                            {{ city[0] }}
                                        </el-checkbox>
                                    </el-col>
                                    <el-col :span = "10" :offset = "3">
                                        <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                            {{ city[1] }}
                                        </el-checkbox>
                                    </el-col>
                            </el-row>
                        </template>
                    </el-checkbox-group>       
            </div>
        <!-- <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div> -->
        <!-- <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div> -->
      </el-collapse-item>
      <el-collapse-item title="随个四十" name="2">
      <div class = "subDiv">
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(forty, 2)" :key="i">
                            <el-row class="row-bg" justify="space-evenly">
                                    <el-col :span = "10">
                                        <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                            {{ city[0] }}
                                        </el-checkbox>
                                    </el-col>
                                    <el-col :span = "10" :offset = "3">
                                        <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                            {{ city[1] }}
                                        </el-checkbox>
                                    </el-col>
                            </el-row>
                        </template>
                    </el-checkbox-group>       
            </div>
        <!-- <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div> -->
      </el-collapse-item>
      <el-collapse-item title="随个五十" name="3">
        <div class = "subDiv">
            <el-checkbox-group v-model="checkedNames" size="large">
                <template v-for = "(city, i) in sliceList(fifty, 2)" :key="i">
                    <el-row class="row-bg" justify="space-evenly">
                            <el-col :span = "10">
                                <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                    {{ city[0] }}
                                </el-checkbox>
                            </el-col>
                            <el-col :span = "10" :offset = "3">
                                <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                    {{ city[1] }}
                                </el-checkbox>
                            </el-col>
                    </el-row>
                </template>
            </el-checkbox-group>
        </div>       
        <!-- <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div> -->
      </el-collapse-item>
      <el-collapse-item title="随个九十" name="4">
        <div class = "subDiv">
            <el-checkbox-group v-model="checkedNames" size="large">
                <template v-for = "(city, i) in sliceList(ninty, 2)" :key="i">
                    <el-row class="row-bg" justify="space-evenly">
                            <el-col :span = "10">
                                <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                    {{ city[0] }}
                                </el-checkbox>
                            </el-col>
                            <el-col :span = "10" :offset = "3">
                                <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                    {{ city[1] }}
                                </el-checkbox>
                            </el-col>
                    </el-row>
                </template>
            </el-checkbox-group>       
        </div>
        <!-- <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.
        </div> -->
      </el-collapse-item>
      <el-collapse-item title = "随个校外" name = "5">
        <div class = "subDiv">
            <br />
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for = "(city, i) in sliceList(outside, 2)" :key="i">
                        <el-row class="row-bg" justify="space-evenly">
                                <el-col :span = "10">
                                    <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                        {{ city[0] }}
                                    </el-checkbox>
                                </el-col>
                                <el-col :span = "10" :offset = "3">
                                    <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                        {{ city[1] }}
                                    </el-checkbox>
                                </el-col>
                        </el-row>
                    </template>
                </el-checkbox-group>       
        </div>
      </el-collapse-item>
    </el-collapse>
            
            <br />
           <!-- <div class = "subDiv">
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(locations, 2)" :key="i">
                            <el-row class="row-bg" justify="space-evenly">
                                    <el-col :span = "10">
                                        <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                            {{ city[0] }}
                                        </el-checkbox>
                                    </el-col>
                                    <el-col :span = "10" :offset = "3">
                                        <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                            {{ city[1] }}
                                        </el-checkbox>
                                    </el-col>
                            </el-row>
                        </template>
                    </el-checkbox-group>       
            </div> -->
            <!-- <br />
            <br /> -->
            <!-- <div class = "subDiv">
           
                
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(forty, 2)" :key="i">
                            <el-row class="row-bg" justify="space-evenly">
                                    <el-col :span = "10">
                                        <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                            {{ city[0] }}
                                        </el-checkbox>
                                    </el-col>
                                    <el-col :span = "10" :offset = "3">
                                        <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                            {{ city[1] }}
                                        </el-checkbox>
                                    </el-col>
                            </el-row>
                        </template>
                    </el-checkbox-group>       
            </div> -->
            <!-- <br />
            <br /> -->
             <!-- <div class = "subDiv">
           
                
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(fifty, 2)" :key="i">
                            <el-row class="row-bg" justify="space-evenly">
                                    <el-col :span = "10">
                                        <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                            {{ city[0] }}
                                        </el-checkbox>
                                    </el-col>
                                    <el-col :span = "10" :offset = "3">
                                        <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                            {{ city[1] }}
                                        </el-checkbox>
                                    </el-col>
                            </el-row>
                        </template>
                    </el-checkbox-group>       
            </div>
           -->
            <!-- <br />
            <br /> -->
            <!-- <div class = "subDiv">
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(ninty, 2)" :key="i">
                            <el-row class="row-bg" justify="space-evenly">
                                    <el-col :span = "10">
                                        <el-checkbox :label="city[0]" :id = "forID(city[0])" border >
                                            {{ city[0] }}
                                        </el-checkbox>
                                    </el-col>
                                    <el-col :span = "10" :offset = "3">
                                        <el-checkbox :label="city[1]" :id = "forID(city[1])" border >
                                            {{ city[1] }}
                                        </el-checkbox>
                                    </el-col>
                            </el-row>
                        </template>
                    </el-checkbox-group>       
            </div> -->
            <br />
            <br />
            
            
          </div>
        </div>
    
</template>


<script src = "../js/RandomGenerator.js">
</script>

<style lang="scss" scoped>

.el-checkbox-group {
    margin : 0 auto;
    width : 360px;
    // align-items: ;
    
}
.el-checkbox{
	  border: 5px solid #C0C0C0 ;
	  width: 150px;
	  height: 16px;
	  border-radius: 0;
      margin-bottom: 10px;
      margin-top: 10px;
      padding : 5px 5px 5px 5px;
  
      
}
.subDiv{
    border : 2px solid #c0c0c0;
    border-radius: 10px; 
    margin : 0 auto;
    display:flex;
    align-items: left;
    justify-content: center;
    display: flex;
    // display:;

    // display:flex;
    #guide{
        font-size:10px;
        color : #c0c0c0;
        padding-top:5px;

       
        // position: fixed;
       
        // position: fixed;
    }
}

.mainDiv{
border : 2px solid #c0c0c0;
    #guide{
        font-size:10px;
        color : #c0c0c0;
        padding-left : 5px;
        padding-top:5px;
    }
}

</style>