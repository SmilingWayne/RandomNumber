<template>
<div id = "randomNumber" class = "demo3">
        <div id="v-model-multiple-checkboxes">
            <div class = "show">
            <h1>🛒🛒</h1>
            <div v-if="checkedNames.length > 0"  style = "height: 75px">
                <ul>
                    <template v-for="item in checkedNames"  v-model="checkedNames">
                      <el-button style = "info"  @click = "deleteMessage(item)"> {{ item }} </el-button>
                    </template>
                  </ul>
            </div>
            <div v-else style = "height: 75px">
            <h3>啥也没有😭, 你上次选了{{ lastChoice }}</h3>
            </div>
            </div>
            <div>
                <el-form v-on:submit.prevent="pushBack">
                    <label for="new-todo">🤠 Add By Enter：</label>
                    <el-input style = "width: auto" v-model="checkedNamesInput" id="new-todo" placeholder="E.g. 方！糕！" clearable/>
                    <br />
                    <!-- <el-button style = "margin-left:20px; margin-top:20px" @click="pushBack">加入！</el-button> -->
                </el-form>
                <br />
                <div>
                    <el-button type = "primary" plain @click="clearAll">清空</el-button>
                    <el-button type = "success" plain @click="randomChoice">选！</el-button> 
                    <el-button type = "primary" plain @click="randomTwo">去不去！</el-button> 
                </div>

            </div>
            <div style = "text-align: center, position: relative">
                <RollingBoard  ref="child"  text-align="center" margin="auto"></RollingBoard>
            </div>
    <br />

    <div>
        <el-button type = "primary" plain @click="randomChoiceArrTest('breakFast')">早餐</el-button>
        <el-button type = "success" plain @click="randomChoiceLocations('InCampus')">校内</el-button> 
        <el-button type = "success" plain @click="randomChoiceLocations('OutofCampus')">校外</el-button> 
        <el-button type = "primary" plain @click="randomChoiceArrTest('yiMing')">一鸣</el-button>
        <el-button type = "primary" plain @click="randomChoiceArrTest('luoSen')">罗森</el-button>
    </div>
    
    <div>
        <el-button type = "primary" plain @click="randomChoiceArrTest('xueYou')">学友</el-button>
        <el-button type = "plain" plain @click="randomChoiceArrTest('forty')">四十</el-button> 
        <el-button type = "plain" plain @click="randomChoiceArrTest('fifty')">五十</el-button> 
        <el-button type = "plain" plain @click="randomChoiceArrTest('ninty')">九十</el-button>
        <el-button type = "primary" plain @click="randomChoiceArrTest('drinks')">饮料</el-button>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">

      <el-collapse-item title= "四十有啥"  name="2">
      <div class = "subDiv">
                <br />
                    <el-checkbox-group v-model="checkedNames" size="large">
                        <template v-for = "(city, i) in sliceList(Foods.forty, 2)" :key="i">
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
      <el-collapse-item title="五十有啥" name="3">
        <div class = "subDiv">
            <el-checkbox-group v-model="checkedNames" size="large">
                <template v-for = "(city, i) in sliceList(Foods.fifty, 2)" :key="i">
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
      <el-collapse-item title="九十有啥" name="4">
        <div class = "subDiv">
            <el-checkbox-group v-model="checkedNames" size="large">
                <template v-for = "(city, i) in sliceList(Foods.ninty, 2)" :key="i">
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
      <el-collapse-item title = "校外有啥" name = "5">
        <div class = "subDiv">
            <br />
                <el-checkbox-group v-model="checkedNames" size="large">
                    <template v-for = "(city, i) in sliceList(locations2.OutofCampus, 2)" :key="i">
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
            <br />
            <br />
            
            
          </div>
        </div>
    
</template>


<style lang="scss">

@media screen and (max-width: 750px) {
  .el-message-box {
    width: 65% !important;
    
    .el-message-box__btns {  
        display: flex;  
        justify-content: center;    
        align-items: center;
    }

  }
  
}

.el-button{
    margin : 5px;
}

.el-checkbox-group {
    margin : 0 auto;
    width : 360px; 
       
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

    #guide{
        font-size:10px;
        color : #c0c0c0;
        padding-top:5px;

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

<script src = "../js/RandomGenerator.js">
</script>
