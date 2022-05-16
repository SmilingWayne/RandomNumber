<template>
<div id = "randomNumber" class = "demo3">
        <div id="v-model-multiple-checkboxes">
            <div class = "show">
            <h2>备选框</h2>
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
                <input type="checkbox" id="places" value="四十！" v-model="checkedNames" />
                <label for="四食！">四食！</label>
                <input type="checkbox" id="places" value="五食！" v-model="checkedNames" />
                <label for="五食！">五食！</label>
                <input type="checkbox" id="places" value="九食！" v-model="checkedNames" />
                <label for="九食！">九食！</label>
                <input type="checkbox" id="places" value="校外！" v-model="checkedNames" />
                <label for="校外！">校外！</label>
                <input type="checkbox" id="places" value="外卖！" v-model="checkedNames" />
                <label for="外卖！">外卖！</label>
                <p></p>
                <input type="checkbox" id="places" value="罗森！" v-model="checkedNames" />
                <label for="罗森！">罗森！</label>
                <input type="checkbox" id="places" value="学友！" v-model="checkedNames" />
                <label for="学友！">学友！</label>
                <input type="checkbox" id="places" value="哈尼家！" v-model="checkedNames" />
                <label for="哈尼家！">哈尼家！</label>
            </div>
            
            <br />
            <br />

            <div class = "subDiv">

                <input type="checkbox" id="food" value="铁板饭！" v-model="checkedNames" />
                <label for="铁板饭！">铁板饭！</label>
                <input type="checkbox" id="food" value="油泼面！" v-model="checkedNames" />
                <label for="油泼面！">油泼面！</label>
                <input type="checkbox" id="food" value="锡纸！" v-model="checkedNames" />
                <label for="锡纸！">锡纸！</label>
                <input type="checkbox" id="food" value="酸汤肥牛！" v-model="checkedNames" />
                <label for="酸汤肥牛！">酸汤肥牛！</label>
                <input type="checkbox" id="food" value="米线！" v-model="checkedNames" />
                <label for="米线！">米线！</label>

            </div>
            <br />
            <br />
            <div class = "subDiv">

                <input type="checkbox" id="food" value="羊肉面！" v-model="checkedNames" />
                <label for="羊肉面！">羊肉面！</label>
                <input type="checkbox" id="food" value="辛拉面！" v-model="checkedNames" />
                <label for="辛拉面！">辛拉面！</label>
                <input type="checkbox" id="food" value="水饺！" v-model="checkedNames" />
                <label for="辛拉面！">水饺！</label>
                <input type="checkbox" id="food" value="炒饭！" v-model="checkedNames" />
                <label for="炒饭！">炒饭！</label>
                <input type="checkbox" id="food" value="营养汤！" v-model="checkedNames" />
                <label for="营养汤！">营养汤！</label>

            </div>
            <br />
            <br />

            <div class = "subDiv">

                <input type="checkbox" id="food" value="瓦香鸡！" v-model="checkedNames" />
                <label for="瓦香鸡！">瓦香鸡！</label>
                <input type="checkbox" id="food" value="鱼粉！" v-model="checkedNames" />
                <label for="鱼粉！">鱼粉！</label>
                <input type="checkbox" id="food" value="麻辣烫！" v-model="checkedNames" />
                <label for="麻辣烫！">麻辣烫！</label>
                <input type="checkbox" id="food" value="炒饭！" v-model="checkedNames" />
                <label for="拌饭！">拌饭！</label>
                <input type="checkbox" id="food" value="猪肚鸡！" v-model="checkedNames" />
                <label for="猪肚鸡！">猪肚鸡！</label>

            </div>
            <br />
            <br />
            <div class = "subDiv">
                <input type="checkbox" id="food" value="黄焖鸡！" v-model="checkedNames" />
                <label for="黄焖鸡！">黄焖鸡！</label>
                <input type="checkbox" id="food" value="戴小姐！" v-model="checkedNames" />
                <label for="戴小姐！">戴小姐！</label>
                <input type="checkbox" id="food" value="饼！" v-model="checkedNames" />
                <label for="饼！">饼！</label>
                <input type="checkbox" id="food" value="杨国福！" v-model="checkedNames" />
                <label for="杨国福！">杨国福！</label>
                <p></p>
                <input type="checkbox" id="food" value="风铃巷！" v-model="checkedNames" />
                <label for="风铃巷！">风铃巷！</label>
                <input type="checkbox" id="food" value="麦当当！" v-model="checkedNames" />
                <label for="麦当当！">麦当当！</label>

            </div>
            
          </div>
        </div>
    
</template>


<script src = "../js/RandomGenerator.js">
</script>
